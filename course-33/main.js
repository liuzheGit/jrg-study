let $allImgs = $('.slide-wrap > img');
let $slideWrap = $('.slide-wrap');
let $imgFirst = $allImgs.eq(0).clone(true);
let $imgLast = $allImgs.eq($allImgs.length - 1).clone(true);
let n = 1;
$slideWrap.append($imgFirst).prepend($imgLast);

$slideWrap.css({
  'transform': 'translateX(-400px)'
});

$('#btn1').on('click', function(){
  if(n === 3){
    $slideWrap.css({
      'transform': 'translateX(-1600px)'
    }).one('transitionend',function(){
      console.log('动画结束');
      $slideWrap.hide().offset();
      $slideWrap.css('transform', 'translateX(-400px)').show()
    });
  }else{
    $slideWrap.css({
      'transform': 'translateX(-400px)'
    });
  }
  n = 1;
});
$('#btn2').on('click', function(){
  $slideWrap.css({
    'transform': 'translateX(-800px)'
  });
  n = 2
});
$('#btn3').on('click', function(){
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
    n = 3;
  }
});
