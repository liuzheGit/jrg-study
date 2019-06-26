!function(){
  // 会变的头部
  let view = View('#siteHead').get();
  let controller = Controller({
    bindEvents: function(){
      // 可以用 箭头函数 简便 用外部this
      let that = this;
      window.addEventListener('scroll', function(e){
        let scrollY = window.scrollY;
        if(scrollY > 0){
          that.active()
        }else {
          that.deactive();
        }
      });
    },
    active: function(){
      this.view.classList.add('sticky');
    },
    deactive: function(){
      this.view.classList.remove('sticky');
    }
  });
  
  controller.init(view);
}.call();