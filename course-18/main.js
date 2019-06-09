let canvas = document.getElementById('canvas');

autoSetCanvasSize(canvas);
let buttons = document.getElementById('buttons');
let eraser = document.getElementById('eraser');
let brush = document.getElementById('brush');

listenMouse(canvas);
let context = canvas.getContext('2d');



let isCleaning = false;
eraser.onclick = function(){
  isCleaning = true;
  buttons.className = 'active';
};
brush.onclick = function(){
  isCleaning = false;
  buttons.className = '';
};



function listenMouse(canvas){

  let isDrawing = false;
  let lastPoint;
  canvas.onmousedown = function(e){
    isDrawing = true;
    let x,y;
    x = e.clientX;
    y = e.clientY;
    if(isCleaning){
      context.clearRect(x-5, y-5, 10, 10);
    }else {
      drawCircle(x, y);
    }
    lastPoint = {
      'x': x,
      'y': y
    }
  };

  canvas.onmousemove = function(e){
    let x,y;
    x = e.clientX;
    y = e.clientY;
    let newPoint = {
      'x': x,
      'y': y
    };
    if(!isDrawing){
      return false;
    }
    if(isCleaning){
      context.clearRect(x, y, 10, 10);
    }else {
      drawCircle(x, y);
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
    }
    lastPoint = newPoint;
  };
  canvas.onmouseup = function () {
    isDrawing = false;
  };

}


//  点下的时候 画圆
function drawCircle(x,y,color){
  context.beginPath();
  context.fillStyle = color || 'black';
  context.arc(x, y, 2.5, 0, Math.PI * 2);
  context.fill();
}

// 连接上一个点和最新点
function drawLine(x1, y1, x2, y2, color){
  context.beginPath();
  context.strokeStyle = color || 'black';
  context.moveTo(x1, y1);
  context.lineWidth = 5;
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}



//  自动设置canvas大小, 拖动大小
function autoSetCanvasSize(canvas){

  resizeCanvas(canvas);

  function resizeCanvas(canvas){
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    canvas.width = clientWidth;
    canvas.height = clientHeight;
  }

  window.onresize = function(){
    resizeCanvas(canvas);
  };
}
