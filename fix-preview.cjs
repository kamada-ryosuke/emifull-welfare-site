const fs = require("fs");
const path = require("path");

const outDir = path.resolve("out");

function walk(dir) {
  const files = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) files.push(...walk(p));
    else if (/\.(html|js|txt)$/.test(item.name)) files.push(p);
  }
  return files;
}

function routeToExportPath(route) {
  const [pathname, suffix = ""] = route.split(/(?=[?#])/);
  const clean = pathname === "/" ? "/index" : pathname.replace(/\/$/, "");
  return `${clean.replace(/^\//, "")}.html${suffix}`;
}

function relativeForFile(file, route) {
  const fromDir = path.dirname(file);
  const target = path.join(outDir, routeToExportPath(route));
  let rel = path.relative(fromDir, target).replaceAll(path.sep, "/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

function relativeAssetForFile(file, url) {
  const fromDir = path.dirname(file);
  const target = path.join(outDir, url.replace(/^\//, ""));
  let rel = path.relative(fromDir, target).replaceAll(path.sep, "/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

function rewriteStaticRefs(file, source) {
  return source.replace(/(["'])(\/(?:images|_next|source-images)\/[^"']+)\1/g, (_m, quote, url) => {
    return `${quote}${relativeAssetForFile(file, url)}${quote}`;
  }).replace(/(["'])\/(manifest\.webmanifest|favicon\.svg|apple-touch-icon\.svg)\1/g, (_m, quote, url) => {
    return `${quote}${relativeAssetForFile(file, `/${url}`)}${quote}`;
  });
}

function rewriteAnchorHrefs(file, source) {
  return source.replace(/href="(\/(?!\/|images\/|_next\/|source-images\/|manifest\.webmanifest|favicon\.svg|apple-touch-icon\.svg)[^"]*)"/g, (_m, route) => {
    return `href="${relativeForFile(file, route)}"`;
  });
}

const previewScript = String.raw`
<script id="file-preview-link-fix">
(function(){
  function exportPath(route){
    var hashIndex = route.search(/[?#]/);
    var suffix = hashIndex >= 0 ? route.slice(hashIndex) : "";
    var pathname = hashIndex >= 0 ? route.slice(0, hashIndex) : route;
    var clean = pathname === "/" ? "/index" : pathname.replace(/\/$/, "");
    return clean.replace(/^\//, "") + ".html" + suffix;
  }
  function currentDirParts(){
    var p = decodeURIComponent(location.pathname).replace(/\\/g, "/");
    var marker = "/out/";
    var idx = p.lastIndexOf(marker);
    if (idx < 0) return [];
    var rel = p.slice(idx + marker.length);
    var parts = rel.split("/");
    parts.pop();
    return parts.filter(Boolean);
  }
  function relTo(route){
    var target = exportPath(route).split("/");
    var file = target.pop();
    var from = currentDirParts();
    var common = 0;
    while (common < from.length && common < target.length && from[common] === target[common]) common++;
    var up = new Array(from.length - common).fill("..");
    var down = target.slice(common);
    var rel = up.concat(down, file).join("/");
    return rel || "./index.html";
  }
  function fix(){
    document.querySelectorAll("a[href]").forEach(function(a){
      var raw = a.getAttribute("href");
      if (!raw || raw[0] !== "/" || raw.indexOf("//") === 0) return;
      if (/^\/(?:images|_next|source-images)\//.test(raw)) return;
      if (/^\/(?:manifest\.webmanifest|favicon\.svg|apple-touch-icon\.svg)$/.test(raw)) return;
      a.setAttribute("href", relTo(raw));
    });
  }
  document.addEventListener("click", function(e){
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var raw = a.getAttribute("href");
    if (!raw || raw[0] !== "/") return;
    e.preventDefault();
    location.href = relTo(raw);
  }, true);
  fix();
  new MutationObserver(fix).observe(document.documentElement, { childList: true, subtree: true });
})();
</script>`;

function injectPreviewScript(source) {
  if (source.includes('id="file-preview-link-fix"')) return source;
  return source.replace("</body>", `${previewScript}</body>`);
}

for (const file of walk(outDir)) {
  let source = fs.readFileSync(file, "utf8");
  let next = rewriteStaticRefs(file, source);
  if (file.endsWith(".html")) {
    next = rewriteAnchorHrefs(file, next);
    next = injectPreviewScript(next);
  }
  if (next !== source) fs.writeFileSync(file, next, "utf8");
}
