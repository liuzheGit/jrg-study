let n = 1;
let $allImgs = $('.slide-wrap > img');
let $slideWrap = $('.slide-wrap');
let WIDTH = $allImgs.width();

let $imgFirst = $allImgs.eq(0).clone(true);
let $imgLast = $allImgs.eq($allImgs.length - 1).clone(true);
$slideWrap.append($imgFirst).prepend($imgLast);
$slideWrap.css('transform', `translateX(-${WIDTH}px)`);

$('#btn1').on('click', function(e){
  let index = $(e.currentTarget).index() + 1;
  let lastIndex = $allImgs.length;
  if(n === lastIndex){
    $slideWrap.css({
      'transform': `translateX(-${(lastIndex + 1) * WIDTH}px)`
    }).one('transitionend',function(){
      console.log('动画结束');
      $slideWrap.hide().offset();
      $slideWrap.css('transform', `translateX(-${WIDTH}px)`).show()
    });
  }else{
    $slideWrap.css({
      'transform': `translateX(-${WIDTH}px)`
    });
  }
  n = index;
});
$('#btn2').on('click', function(e){
  let index = $(e.currentTarget).index() + 1;
  $slideWrap.css( 'transform', 'translateX(-800px)' );
  n = index;
});
$('#btn3').on('click', function(e){
  let index = $(e.currentTarget).index() + 1;
  if(n === 1){
    $slideWrap.css({
      'transform': 'translateX(0)'
    }).one('transitionend',function(){
      $slideWrap.hide().offset();
      $slideWrap.css('transform', 'translateX(-1200px)').show()
    });
  }else{
    $slideWrap.css({
      'transform': 'translateX(-1200px)'
    });
    n = index;
  }
});
