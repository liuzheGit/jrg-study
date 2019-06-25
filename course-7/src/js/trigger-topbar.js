!function(){
  // 头部subMenu
  let triggerMenu = document.querySelectorAll('.triggerNav > ul > li');
  triggerMenu = [].slice.call(triggerMenu);
  triggerMenu.map(function(item){
    item.onmouseenter = function(e){
      let current = e.currentTarget;
      current.classList.add('active')
    }
    item.onmouseleave = function(e){
      let current = e.currentTarget;
      current.classList.remove('active')
    }
  });
}.call();
