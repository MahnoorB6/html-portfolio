const b=document.getElementById('theme');if(localStorage.theme==='dark'){document.body.classList.add('dark');b.textContent='☀'}b.onclick=()=>{document.body.classList.toggle('dark');let d=document.body.classList.contains('dark');localStorage.theme=d?'dark':'light';b.textContent=d?'☀':'☾'};

if('scrollRestoration' in history) history.scrollRestoration='manual';

// Keep the homepage at the top when opened normally; section links still work normally.
window.addEventListener('load',()=>{if(!location.hash) window.scrollTo(0,0);});
