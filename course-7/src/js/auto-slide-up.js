!function () {
  let view = document.querySelectorAll('[data-x]');
  let controller = {
    view: null,
    init: function(view){
      this.view = view;
      this.addOffset();
      setTimeout(()=>{
        this.initScroll()
      }, 800);
      this.bindEvents();
    },
    addOffset: function(){
      for (let i = 0, len = this.view.length; i < len; i++) {
        this.view[i].classList.add('offset')
      }
    },
    bindEvents: function(){
      window.addEventListener('scroll', (e)=> {
        let scrollY = window.scrollY;
        this.initScroll(scrollY)
      });
    },
    initScroll: function(scrollY){
      let minIndex = 0;
      for (let i = 1, len = this.view.length; i < len; i++) {
        if (Math.abs(this.view[i].offsetTop - scrollY) < Math.abs(this.view[minIndex].offsetTop - scrollY)) {
          minIndex = i;
        }
      }
      let id = this.view[minIndex].id;
      let a = document.querySelector(`a[href="#${id}"]`);
      let li = a.parentNode;
      let brotherAndMe = li.parentNode.children;
      for (let i = 0, len = brotherAndMe.length; i < len; i++) {
        brotherAndMe[i].classList.remove('highlight');
        li.classList.add('highlight')
      }
      this.view[minIndex].classList.remove('offset');
    }
  };
  controller.init(view)

}.call();
