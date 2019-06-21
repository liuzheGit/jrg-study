let current = 0;
let timer;
let $allImgs = $('.slide-wrap > img');
let $slideWrap = $('.slide-wrap');
let $operation = $('.operation-panel');
let WIDTH = $allImgs.width();
fakeDom();

$slideWrap.css('transform', `translateX(-${WIDTH}px)`);
timer = autoplay();

// 事件监听
$('.buttons').on('click', 'button',function(e){
    let index = $(e.currentTarget).index();
    goToSlide(index)
});
$('#next').on('click',function(){
    goToSlide(current + 1)
});
$('#previous').on('click',function(){
    goToSlide(current - 1)
});
$operation.on('mouseenter', function(){
  window.clearInterval(timer);
  console.log('轮播停止')
});
$operation.on('mouseleave', function(){
  timer = autoplay();
  console.log('轮播开始')
});
// 页面不显示的时候 停止自动轮播
//startSimulation 和 pauseSimulation 在其他地方定义
function handleVisibilityChange() {
  if (document.hidden) {
    window.clearInterval(timer);
  } else  {
    timer = autoplay();
  }
}
document.addEventListener("visibilitychange", handleVisibilityChange, false);


function fakeDom(){
  let $imgFirst = $allImgs.eq(0).clone(true);
  let $imgLast = $allImgs.eq($allImgs.length - 1).clone(true);
  $slideWrap.append($imgFirst).prepend($imgLast);
}

// 很重要
function goToSlide(index){
  if(index > $allImgs.length - 1){
    index = 0
  }else if(index < 0){
    index = $allImgs.length - 1
  }
    if(current === $allImgs.length - 1 && index === 0){
        // 从最后一张到第一张
        $slideWrap.css({
            'transform': `translateX(-${($allImgs.length + 1) * WIDTH}px)`
        }).one('transitionend', function(){
            $slideWrap.hide().offset();
            $slideWrap.css('transform', `translateX(-${WIDTH}px)`).show()
        })
    }else if(current === 0 && index + 1 === $allImgs.length){
      // 从第一张到最后一张
        $slideWrap.css({
            'transform': `translateX(0)`
        }).one('transitionend',function(){
            $slideWrap.hide().offset();
            $slideWrap.css('transform', `translateX(-${$allImgs.length * WIDTH}px)`).show()
        });
    }else {
        $slideWrap.css( 'transform', `translateX(-${WIDTH * (index + 1)}px)` );
    }
    current = index;
}

function autoplay(){
  return setInterval(()=>{
    goToSlide(current + 1);
    current + 1
  }, 3000)
}


