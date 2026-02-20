(function(){
  const btns = document.querySelectorAll('[data-lang]');
  btns.forEach(b=>{
    b.addEventListener('click', ()=>{
      const lang = b.getAttribute('data-lang');
      const parts = window.location.pathname.split('/').filter(Boolean);
      const page = parts.slice(1).join('/');
      window.location.href = '/' + lang + '/' + (page || '');
    });
  });
})();
