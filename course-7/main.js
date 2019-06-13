// 展示产品
let stateDiv = document.getElementById('nav-progress-bar');
let show = document.getElementById('show-works');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
btn1.onclick = function(){
  stateDiv.className = 'state1';
  show.className = 'works state1';
};
btn2.onclick = function(){
  stateDiv.className = 'state2';
  show.className = 'works state2';
};
btn3.onclick = function(){
  stateDiv.className = 'state3';
  show.className = 'works state3';
};

// loading
let loadingWrap = document.getElementById('loadingWrap');
setTimeout(function () {
  loadingWrap.classList.remove('active');
},2000);

// 会变的头部
let siteHead = document.getElementById('siteHead');
// 标记的有特殊属性的标签
let specialTags = document.querySelectorAll('[data-x]');
window.onscroll = function(){
  let scrollY = window.scrollY;
  if(scrollY > 0){
    siteHead.classList.add('sticky');
  }else {
    siteHead.classList.remove('sticky');
  }
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
    brotherAndMe[i].classList.remove('active');
    li.classList.add('active')
  }

};

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
