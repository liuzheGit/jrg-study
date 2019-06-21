let current = 0;
let temer;
let $allImgs = $('.slide-wrap > img');
let $slideWrap = $('.slide-wrap');
let WIDTH = $allImgs.width();
let m = 1;

let $imgFirst = $allImgs.eq(0).clone(true);
let $imgLast = $allImgs.eq($allImgs.length - 1).clone(true);
$slideWrap.append($imgFirst).prepend($imgLast);
$slideWrap.css('transform', `translateX(-${WIDTH}px)`);

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
