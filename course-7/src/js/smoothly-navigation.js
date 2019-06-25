!function () {
  // Setup the animation loop.
  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }

  requestAnimationFrame(animate);

// 滚动到响应的内容区域
  let aTags = document.querySelectorAll('.triggerNav>ul>li>a');
  for (let i = 0, len = aTags.length; i < len; i++) {
    aTags[i].onclick = function (e) {
      e.preventDefault();
      let href = e.currentTarget.getAttribute('href');
      let targetTag = document.querySelector(href);
      let currentTop = window.scrollY;
      let targetTop = targetTag.offsetTop - 90;
      let time = Math.abs((targetTop - currentTop) / 100 * 300); // 假设每100像素用300ms移动
      time = time > 500 ? 500 : time;  // 限制最大动画时间
      let coords = {y: currentTop};
      let tween = new TWEEN.Tween(coords)
          .to({y: targetTop}, time)  // 动画结束的hash值 , 总时间
          .easing(TWEEN.Easing.Quartic.InOut)
          .onUpdate(() => {
            window.scrollTo(0, coords.y)
          })
          .start();
    }
  }
}.call();
