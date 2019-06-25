!function () {
  // 会变的头部
  let siteHead = document.getElementById('siteHead');
  // 标记的有特殊属性的标签
  let specialTags = document.querySelectorAll('[data-x]');
  for (let i = 0, len = specialTags.length; i < len; i++) {
    specialTags[i].classList.add('offset')
  }
  setTimeout(function () {
    initScroll();
  }, 800);
  window.addEventListener('scroll', function (e) {
    let scrollY = window.scrollY;
    initScroll(scrollY)
  });

  function initScroll(scrollY) {
    let minIndex = 0;
    for (let i = 1, len = specialTags.length; i < len; i++) {
      if (Math.abs(specialTags[i].offsetTop - scrollY) < Math.abs(specialTags[minIndex].offsetTop - scrollY)) {
        minIndex = i;
      }
    }
    let id = specialTags[minIndex].id;
    let a = document.querySelector(`a[href="#${id}"]`);
    let li = a.parentNode;
    let brotherAndMe = li.parentNode.children;
    for (let i = 0, len = brotherAndMe.length; i < len; i++) {
      brotherAndMe[i].classList.remove('highlight');
      li.classList.add('highlight')
    }
    console.log(minIndex)
    specialTags[minIndex].classList.remove('offset');
  }
}.call();
