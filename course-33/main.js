let n = 1;
let $allImgs = $('.slide-wrap > img');
let $slideWrap = $('.slide-wrap');
let WIDTH = $allImgs.width();

let $imgFirst = $allImgs.eq(0).clone(true);
let $imgLast = $allImgs.eq($allImgs.length - 1).clone(true);
$slideWrap.append($imgFirst).prepend($imgLast);
$slideWrap.css('transform', `translateX(-${WIDTH}px)`);

$('.buttons').on('click', 'button',function(e){
    let index = $(e.currentTarget).index();
    if(n === $allImgs.length && index === 0){
      $slideWrap.css({
        'transform': `translateX(-${($allImgs.length + 1) * WIDTH}px)`
      }).one('transitionend', function(){
        $slideWrap.hide().offset();
        $slideWrap.css('transform', `translateX(-${WIDTH}px)`).show()
      })
    }else if(n === 1 && index + 1 === $allImgs.length){
      $slideWrap.css({
        'transform': `translateX(0)`
      }).one('transitionend',function(){
        $slideWrap.hide().offset();
        $slideWrap.css('transform', `translateX(-${$allImgs.length * WIDTH}px)`).show()
      });
    }else {
      $slideWrap.css( 'transform', `translateX(-${WIDTH * (index + 1)}px)` );
    }
    n = index + 1;
});

