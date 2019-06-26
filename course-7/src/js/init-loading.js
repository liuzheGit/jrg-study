!function(){
  let view = View('#loadingWrap').get();
  let controller = Controller({
    bindEvents: function(){
      setTimeout(()=>{
        this.view.classList.remove('active');
      },500)
    }
  });
  controller.init(view)
}.call();
