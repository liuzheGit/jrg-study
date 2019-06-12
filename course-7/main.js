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
window.onscroll = function(){
  let scrollY = window.scrollY;
  if(scrollY > 0){
    siteHead.classList.add('sticky');
  }else {
    siteHead.classList.remove('sticky');
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

// 滚动到响应的内容区域
let aTags = document.querySelectorAll('.triggerNav>ul>li>a');
for(let i = 0, len = aTags.length; i < len; i++){
  aTags[i].onclick = function(e){
    e.preventDefault();
    let href = e.currentTarget.getAttribute('href');
    let targetTag = document.querySelector(href);
    let x = targetTag.offsetTop;
    window.scrollTo(0, x - 90)
  }
}
