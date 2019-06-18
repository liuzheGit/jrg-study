$(function () {
  initDOM();

  function initDOM(){
    $('.window > img:nth-child(1)').addClass('current');
    $('.window > img:nth-child(2)').addClass('next');
    $('.window > img:nth-child(3)').addClass('next');
  }

  let n = 1;
  setInterval(()=>{
    console.log(x(n));
    $(`.window > img:nth-child(${x(n)})`).removeClass('current').addClass('prev')
        .one('transitionend', (e)=>{
          $(e.currentTarget).removeClass('prev').addClass('next')
        });
    $(`.window > img:nth-child(${x(n+1)})`).removeClass('next').addClass('current')
    n += 1;
  },3000)
});
function x(index){
  if(index > 3){
    index = index % 3;
    if(index === 0){
      index = 3
    }
  }
  return index;
}