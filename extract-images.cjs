const fs = require('fs');
const sites = ['https://sorato-umie.com/','https://emifull-group.or.jp/sharehome/','https://nojigiku.org/'];
(async()=>{
 for (const site of sites) {
   const html = await fetch(site).then(r=>r.text());
   const imgs = [...html.matchAll(/<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi)].map(m=>m[1]);
   const bg = [...html.matchAll(/url\(["']?([^"')]+)["']?\)/gi)].map(m=>m[1]);
   const all = [...new Set([...imgs,...bg].map(u=>new URL(u, site).href).filter(u=>/\.(png|jpe?g|webp)(\?|$)/i.test(u)))];
   console.log('\nSITE',site,'COUNT',all.length);
   all.slice(0,40).forEach(u=>console.log(u));
 }
})().catch(e=>{console.error(e); process.exit(1)});
