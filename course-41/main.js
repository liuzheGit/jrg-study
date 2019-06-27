let resource = `
   /**
   * 你好啊, 兄弟
   * 我来介绍一下我自己吧.
   * 说话多没意思
   * 让我用代码和动画给你展示吧!
   *
   **/
   
   /* 首先添加渐变效果, 显得没那么突兀了 */
   *{
     transition: all .4s;
   }
   
   /* 然后给代码添加一个边框吧 */
   #code{
     border: 1px solid gray;
     padding: 15px;
   }
   
   /* 代码没有高亮? 加一个吧 */
   .token.comment{
     color: slategray;
   }
   .token.punctuation {
     color: #999;
   }
   .token.selector {
     color: #690;
   }
   .token.property {
     color: #905;
   }
   
   #code{
     animation: breathe 1s infinite alternate-reverse;
   }
`;

let resource2 = `
  /** 
  * 下一步添加一个白纸
  **/ 
  #paper{
    width: 200px;
    height: 200px;
    border: 1px solid red;
  } 
`;
let n = 0;
let n2 = 0;
let timerId;
let timerId2;
let code = document.getElementById('code');
let styleTag = document.getElementById('styleTag');



runCode();
function runCode(){
  timerId = setInterval(()=>{
    n += 1;
    code.innerHTML = resource.substring(0, n);
    let beautifyCode = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    code.innerHTML = beautifyCode;
    styleTag.innerHTML = resource.substring(0, n);
    if(n >= resource.length){
      window.clearInterval(timerId);
      makePaper();
      cssPaper(beautifyCode)
    }
  }, 100)
}

function makePaper(){
  let paper = document.createElement('div');
  paper.id = 'paper';
  document.body.appendChild(paper);
}


function cssPaper(beautifyCode){
  timerId2 = setInterval(()=>{
    n2 += 1;
    code.innerHTML = resource2.substring(0, n2);
    let beautifyCode2 = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    code.innerHTML = beautifyCode + beautifyCode2;

    styleTag.innerHTML = resource + resource2.substring(0, n2);
    if(n2 >= resource2.length){
      window.clearInterval(timerId2);
    }
  }, 100)

}