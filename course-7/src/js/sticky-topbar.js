!function(){
  window.addEventListener('scroll', function(e){
    let scrollY = window.scrollY;
    if(scrollY > 0){
      siteHead.classList.add('sticky');
    }else {
      siteHead.classList.remove('sticky');
    }
  });
}.call();