let canvas = document.getElementById('canvas');

autoSetCanvasSize(canvas);
let buttons = document.getElementById('buttons');
let eraser = document.getElementById('eraser');
let brush = document.getElementById('brush');

listenUser(canvas);
let context = canvas.getContext('2d');
let isCleaning = false;

// 画笔和橡皮擦切换
brush.onclick = function () {
  isCleaning = false;
  brush.classList.add('active');
  eraser.classList.remove('active');
};
eraser.onclick = function () {
  isCleaning = true;
  eraser.classList.add('active');
  brush.classList.remove('active');
};
// 切换颜色
let colors = document.querySelector('.colors');
colors.addEventListener('click',function(e){
  let colorName = e.target.getAttribute('color');
  context.fillStyle = colorName;
  context.strokeStyle = colorName;
  let colorLists = [].slice.call(this.children);
  colorLists.forEach(function(item, index, arr){
    item.classList.remove('active')
  });
  e.target.classList.add('active');
});

function listenUser(canvas) {
  let isDrawing = false;
  let lastPoint;
  // 设备检测
  if (document.documentElement.ontouchstart !== undefined) {
    // 是触屏设备
    canvas.ontouchstart = function (e) {
      isDrawing = true;
      let x = e.touches[0].clientX;
      let y = e.touches[0].clientY;
      if (isCleaning) {
        context.clearRect(x - 5, y - 5, 10, 10);
      } else {
        drawCircle(x, y);
      }
      lastPoint = {
        'x': x,
        'y': y
      }
    };
    canvas.ontouchmove = function (e) {
      let x = e.touches[0].clientX;
      let y = e.touches[0].clientY;
      let newPoint = {
        'x': x,
        'y': y
      };
      if (!isDrawing) {
        return false;
      }
      if (isCleaning) {
        context.clearRect(x, y, 10, 10);
      } else {
        drawCircle(x, y);
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
      }
      lastPoint = newPoint;
    };
    canvas.ontouchend = function () {
      isDrawing = false;
    }
  } else {
    // 是PC
    canvas.onmousedown = function (e) {
      isDrawing = true;
      let x, y;
      x = e.clientX;
      y = e.clientY;
      if (isCleaning) {
        context.clearRect(x - 5, y - 5, 10, 10);
      } else {
        drawCircle(x, y);
      }
      lastPoint = {
        'x': x,
        'y': y
      }
    };

    canvas.onmousemove = function (e) {
      let x, y;
      x = e.clientX;
      y = e.clientY;
      let newPoint = {
        'x': x,
        'y': y
      };
      if (!isDrawing) {
        return false;
      }
      if (isCleaning) {
        context.clearRect(x, y, 10, 10);
      } else {
        drawCircle(x, y);
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
      }
      lastPoint = newPoint;
    };
    canvas.onmouseup = function () {
      isDrawing = false;
    };
  }

}


//  点下的时候 画圆
function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, 2.5, 0, Math.PI * 2);
  context.fill();
}

// 连接上一个点和最新点
function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineWidth = 5;
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}


//  自动设置canvas大小, 拖动大小
function autoSetCanvasSize(canvas) {

  resizeCanvas(canvas);

  function resizeCanvas(canvas) {
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    canvas.width = clientWidth;
    canvas.height = clientHeight;
  }

  window.onresize = function () {
    resizeCanvas(canvas);
  };
}
