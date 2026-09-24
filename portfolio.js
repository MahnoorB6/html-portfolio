const b=document.getElementById('theme');if(localStorage.theme==='dark'){document.body.classList.add('dark');b.textContent='☀'}b.onclick=()=>{document.body.classList.toggle('dark');let d=document.body.classList.contains('dark');localStorage.theme=d?'dark':'light';b.textContent=d?'☀':'☾'};

// Keep a fresh page load at the top; preserve intentional in-page hash navigation.
if('scrollRestoration' in history) history.scrollRestoration='manual';
if(!location.hash){window.scrollTo(0,0);requestAnimationFrame(()=>window.scrollTo(0,0));}

const revealObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible')}})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.section,.profile-section,.contact,.project,.skills article,.timeline article,.chips').forEach((el)=>{el.classList.add('reveal');revealObserver.observe(el)});
const sections=[...document.querySelectorAll('main section[id]')];const progress=document.createElement('div');progress.className='scroll-progress';document.body.appendChild(progress);
const updateProgress=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+(max>0?scrollY/max:0)+')'};addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const navLinks=[...document.querySelectorAll('.links a')];const activeObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}})},{threshold:.45});sections.forEach(s=>activeObserver.observe(s));
const hero=document.querySelector('.hero');addEventListener('scroll',()=>{if(hero&&scrollY<innerHeight){hero.style.setProperty('--hero-shift',Math.min(scrollY*.08,35)+'px')}},{passive:true});
