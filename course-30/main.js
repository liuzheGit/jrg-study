$(function () {
  let n;
  initDOM();
  setInterval(()=>{
      makePrev(getImage(n)) .one('transitionend', (e)=>{
          makeNext($(e.currentTarget))
        });
      makeCurrent(getImage(n+1));
    n += 1;
  },3000);

  function x(index){
    if(index > 3){
      index = index % 3;
      if(index === 0){
        index = 3
      }
    }
    return index;
  }

  function getImage(n){
    return $(`.window > img:nth-child(${x(n)})`)
  }

  function makeCurrent($node){
    return $node.removeClass('next').addClass('current')
  }

  function makeNext($node){
    return $node.removeClass('prev').addClass('next');
  }

  function makePrev($node){
    return $node.removeClass('current').addClass('prev');
  }
// 初始化
  function initDOM(){
    n = 1;
    $('.window > img:nth-child(1)').addClass('current');
    $('.window > img:nth-child(2)').addClass('next');
    $('.window > img:nth-child(3)').addClass('next');
  }
});
