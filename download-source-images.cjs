const fs = require('fs');
const path = require('path');
const images = {
 'sorato-front-01.jpg':'https://sorato-umie.com/cmswp/wp-content/themes/sorato-umie.com/_assets/img/front/front-pic01.jpg',
 'sorato-front-02.jpg':'https://sorato-umie.com/cmswp/wp-content/themes/sorato-umie.com/_assets/img/front/front-pic02.jpg',
 'sorato-front-03.jpg':'https://sorato-umie.com/cmswp/wp-content/themes/sorato-umie.com/_assets/img/front/front-pic03.jpg',
 'sorato-facility.jpg':'https://sorato-umie.com/cmswp/wp-content/uploads/2020/05/sorato-pic00.jpg',
 'umie-facility.jpg':'https://sorato-umie.com/cmswp/wp-content/uploads/2020/05/umie-pic00.jpg',
 'karada-kids.jpg':'https://sorato-umie.com/cmswp/wp-content/uploads/2025/08/archive-karadakids-kakogawa.jpg',
 'job-college.jpg':'https://sorato-umie.com/cmswp/wp-content/uploads/2025/08/jobcollege-pic01-3.jpg',
 'sharehome-kakogawa.jpg':'https://emifull-group.or.jp/sharehome/cmswp/wp-content/uploads/2022/09/kakogawa_gaikan.jpg',
 'sharehome-tenri.jpg':'https://emifull-group.or.jp/sharehome/cmswp/wp-content/uploads/2024/09/tenri_gaikan.jpg',
 'nojigiku-about.jpg':'https://nojigiku.org/cmswp/wp-content/themes/nojigiku/assets/img/about-main.jpg',
 'nojigiku-work-01.jpg':'https://nojigiku.org/cmswp/wp-content/themes/nojigiku/assets/img/about-sub01.jpg',
 'nojigiku-work-02.jpg':'https://nojigiku.org/cmswp/wp-content/themes/nojigiku/assets/img/merit-image01.jpg'
};
(async()=>{
 for (const [name,url] of Object.entries(images)) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join('public/source-images', name), buf);
  console.log(name, buf.length);
 }
})().catch(e=>{console.error(e); process.exit(1)});
