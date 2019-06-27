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
let n = 0;
let timerId;
let code = document.getElementById('code');
let styleTag = document.getElementById('styleTag');



runCode();
function runCode(){
  timerId = setInterval(()=>{
    n += 1;
    code.innerHTML = resource.substring(0, n);
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    styleTag.innerHTML = resource.substring(0, n);
    if(n >= resource.length){
      window.clearInterval(timerId)
    }
  }, 10)
}