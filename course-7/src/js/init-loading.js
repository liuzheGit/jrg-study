!function(){
  let view = document.getElementById('loadingWrap');
  let controller = {
    view: null,
    init: function(view){
      this.view = view;
      this.bindEvents();
    },
    bindEvents: function(){
      setTimeout(()=>{
        this.view.classList.remove('active');
      },500)
    }
  };

  controller.init(view)
}.call();
