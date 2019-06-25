!function(){
  let view = document.querySelectorAll('.triggerNav > ul > li');
  view = [].slice.call(view);
  let controller = {
    view: null,
    init: function(view){
      this.view = view;
      this.bindEvents();
    },
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
  };
  controller.init(view)
}.call();
