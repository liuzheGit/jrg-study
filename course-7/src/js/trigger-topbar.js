!function(){
  let view = View('.triggerNav > ul > li').getALl();
  view = [].slice.call(view);
  let controller = Controller({
    bindEvents: function(){
      this.view.map(function(item){
        item.onmouseenter = function(e){
          let current = e.currentTarget;
          current.classList.add('active')
        };
        item.onmouseleave = function(e){
          let current = e.currentTarget;
          current.classList.remove('active')
        }
      });
    }
  });
  controller.init(view)
}.call();
