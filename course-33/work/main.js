let current = 0;
let timer;
let length = $('.slide').length;
$('.menuItem').on('click',function (e) {
  e.preventDefault();
  let current = $(this).index() - 1;
  goToSlide(current);
});

timer = autoplay();

$('.gallery').on('mouseenter', function () {
  window.clearInterval(timer)
}).on('mouseleave', function(){
  timer = autoplay();
});

function handleVisibilityChange() {
  if (document.hidden) {
    window.clearInterval(timer);
  } else  {
    timer = autoplay();
  }
}
document.addEventListener("visibilitychange", handleVisibilityChange, false);

function goToSlide(current){
  $('.slides').css('transform', `translateX(-${current * 920}px)`)
  $('.menuItem').removeClass('active').eq(current).addClass('active')
}

function autoplay(){
  return setInterval(()=>{
    current += 1;
    if(current > length - 1){
      current = 0
    }else if(current < 0){
      current = length - 1
    }
    goToSlide(current);
  }, 1500)
}
