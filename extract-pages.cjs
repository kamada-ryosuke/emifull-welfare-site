const pages = [
 'https://emifull-group.or.jp/sharehome/family',
 'https://emifull-group.or.jp/sharehome/facility',
 'https://emifull-group.or.jp/sharehome/day',
 'https://emifull-group.or.jp/sharehome/flow',
 'https://sorato-umie.com/facility/',
 'https://sorato-umie.com/service/',
 'https://sorato-umie.com/about/'
];
(async()=>{
 for (const page of pages) {
  try {
   const html = await fetch(page).then(r=>r.text());
   const imgs = [...html.matchAll(/<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi)].map(m=>m[1]);
   const bg = [...html.matchAll(/url\(["']?([^"')]+)["']?\)/gi)].map(m=>m[1]);
   const all = [...new Set([...imgs,...bg].map(u=>new URL(u, page).href).filter(u=>/\.(png|jpe?g|webp)(\?|$)/i.test(u)))];
   console.log('\nPAGE',page,'COUNT',all.length);
   all.slice(0,80).forEach(u=>console.log(u));
  } catch(e){ console.log('ERR', page, e.message); }
 }
})().catch(e=>{console.error(e); process.exit(1)});
