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
    console.log('添加累')
  }else {
    siteHead.classList.remove('sticky');
    console.log('移除累')
  }
};

// 头部subMenu
let triggerMenu = document.getElementsByClassName('triggerMenu');
let triggerMenuArr = [].slice.call(triggerMenu);
triggerMenuArr.map((item)=>{
  item.onmouseenter = function(e){
    let current = e.currentTarget;
    let a = current.nextSibling;
    while (a.nodeType === 3){
      a = a.nextSibling;
    }
    a.classList.add('active')
  }
  item.onmouseleave = function(e){
    let current = e.currentTarget;
    let a = current.nextSibling;
    while (a.nodeType === 3){
      a = a.nextSibling;
    }
    a.classList.remove('active')
  }
});
