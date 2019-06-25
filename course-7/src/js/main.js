// loading
let loadingWrap = document.getElementById('loadingWrap');
setTimeout(function () {
  loadingWrap.classList.remove('active');
},500)
// 会变的头部
let siteHead = document.getElementById('siteHead');
// 标记的有特殊属性的标签
let specialTags = document.querySelectorAll('[data-x]');
for (let i = 0, len = specialTags.length; i < len; i++){
  specialTags[i].classList.add('offset')
}
setTimeout(function(){
  initScroll();
}, 800);
window.onscroll = function(){
  let scrollY = window.scrollY;
  if(scrollY > 0){
    siteHead.classList.add('sticky');
  }else {
    siteHead.classList.remove('sticky');
  }
  initScroll(scrollY)
};

function initScroll(scrollY){
  let minIndex = 0;
  for(let i = 1, len = specialTags.length; i < len; i++){
    if(Math.abs(specialTags[i].offsetTop - scrollY) < Math.abs(specialTags[minIndex].offsetTop - scrollY)){
      minIndex = i;
    }
  }
  let id = specialTags[minIndex].id;
  let a = document.querySelector(`a[href="#${id}"]`);
  let li = a.parentNode;
  let brotherAndMe = li.parentNode.children;
  for (let i = 0, len = brotherAndMe.length; i < len; i++){
    brotherAndMe[i].classList.remove('highlight');
    li.classList.add('highlight')
  }
  console.log(minIndex)
  specialTags[minIndex].classList.remove('offset');

}

// 头部subMenu
let triggerMenu = document.querySelectorAll('.triggerNav > ul > li');
triggerMenu = [].slice.call(triggerMenu);
triggerMenu.map(function(item){
  item.onmouseenter = function(e){
    let current = e.currentTarget;
    current.classList.add('active')
  }
  item.onmouseleave = function(e){
    let current = e.currentTarget;
    current.classList.remove('active')
  }
});
// Setup the animation loop.
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

// 滚动到响应的内容区域
let aTags = document.querySelectorAll('.triggerNav>ul>li>a');
for(let i = 0, len = aTags.length; i < len; i++){
  aTags[i].onclick = function(e){
    e.preventDefault();
    let href = e.currentTarget.getAttribute('href');
    let targetTag = document.querySelector(href);
    let currentTop = window.scrollY;
    let targetTop = targetTag.offsetTop - 90;
    let time = Math.abs((targetTop - currentTop) / 100 * 300); // 假设每100像素用300ms移动
    time = time > 500 ? 500 : time;  // 限制最大动画时间
    let coords = { y: currentTop };
    let tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, time)  // 动画结束的hash值 , 总时间
        .easing(TWEEN.Easing.Quartic.InOut)
        .onUpdate(() => {
          window.scrollTo(0, coords.y)
        })
        .start();
  }
}
