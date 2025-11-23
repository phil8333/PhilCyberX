// small UI helpers for PhilCyber (nav, theme, reveal)
document.addEventListener('DOMContentLoaded', ()=> {
  // mobile toggle
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle && navToggle.addEventListener('click', ()=> mobileNav.hidden = !mobileNav.hidden);

  // theme toggle (persist)
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('phil-theme');
  if(saved === 'light'){ root.classList.add('light'); themeToggle.textContent = '🌞'; themeToggle.setAttribute('aria-pressed','true'); }
  themeToggle && themeToggle.addEventListener('click', ()=>{
    const isLight = root.classList.toggle('light');
    localStorage.setItem('phil-theme', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '🌞' : '🌓';
    themeToggle.setAttribute('aria-pressed', String(isLight));
  });

  // reveal on load
  document.querySelectorAll('.reveal').forEach((el,i)=> setTimeout(()=> el.classList.add('show'), 80*i));

  // search modal (if present)
  const searchOpen = document.getElementById('searchOpen');
  const searchModal = document.getElementById('searchModal');
  const searchClose = document.getElementById('searchClose');
  const searchBtn = document.getElementById('searchBtn');
  if(searchOpen) searchOpen.addEventListener('click', ()=> { if(searchModal) searchModal.hidden = false; });

  if(searchClose) searchClose.addEventListener('click', ()=> { if(searchModal) searchModal.hidden = true; });
});
