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
     position: fixed;
     left: 0;
     width: 50%;
     height: 100vh;
     overflow: auto;
     background: #282a35;
     transform: rotateY(5deg);
     animation: breathe 1s infinite alternate-reverse;
   }
`;

let resource2 = `
  /** 
  * 下一步添加一个白纸
  **/ 
  #paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100vh;
    background: white;
  }
`;

let md = `
## 异步

异步就是 不等结果 直接走之后的事情 

很形象的 是 定闹钟 

回调可以拿到异步的结果

- 回调是拿到异步结果的一种方式
- 回调也可以拿同步结果



## 什么是异步

由于JavaScript是单线程的, 一次只能执行一个任务, 此时如果有一个任务特别消耗时间, 后边的任务则必须排队.  常见的就是 浏览器无响应 ( 假死 ) .

为了解决这个问题, JavaScript将任务执行分为同步和异步:

 同步:  一个任务执行完成前后边的都不执行, 就是等待结果后执行下一个

 异步:  就是不等待结果, 后边的任务也可以执行, 此时如果想要获取异步中的结果的话, 可以通过回调的形式, 把要做的事情 通过函数传进去, 异步任务执行到可以完成的时候, call 传进来的函数. 执行要做的事情.



参考答案

- 异步是指一个不等一个任务返回结果（成功/失败/或其他结果），就直接执行下一句代码。
  同步则是前者执行完拿到结果（返回值）了之后，再执行下一句代码

## 什么是回调

我有一个任务我没办法执行, 然后我给你, 你有了可执行的时机时 然后执行它. 
`;
writeCss('', resource, ()=>{
  writeCss(resource, resource2, ()=>{
    writeMd(md, ()=>{
      console.log('写完了');
    })
  })
});
function writeCss(prefix, code ,fn){
  let n = 0;
  let codeDom = document.getElementById('code');
  let styleTag = document.getElementById('styleTag');
  let timerId = setInterval(()=>{
    n += 1;
    // 获取高亮的code ,加入到html中
    codeDom.innerHTML= Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
    codeDom.scrollTop = codeDom.scrollHeight;
    // 把源码加到css中
    styleTag.innerHTML = prefix +  code.substring(0, n);
    if(n >= code.length){
      window.clearInterval(timerId);
      fn.call();
    }
  }, 0)
}


function writeMd(code, fn){
  let n = 0;
  let previewDom = document.getElementById('previewMd');
  let timerId = setInterval(()=>{
    n += 1;
    previewDom.innerHTML = code.substring(0, n);
    previewDom.scrollTop = previewDom.scrollHeight;
    if(n >= code.length){
      window.clearInterval(timerId)
      fn.call()
    }
  }, 0)
}


