let resource = `
   /**
   * 你好啊, 兄弟
   * 我来介绍一下我自己吧.
   * 说话多没意思
   * 让我用代码和动画给你展示吧!
   *
   **/
   /* 首先添加一个背景颜色吧 */
   body{background: gray;}
   
   /* 首先添加渐变效果, 显得没那么突兀了 */
   *{ transition: all .4s; }
   
   /* 然后给代码添加一个边框吧 */
   #code{ border: 1px solid gray; padding: 15px; }
   
   /* 代码没有高亮? 加一个吧 */
   .token.comment{ color: slategray; }
   .token.punctuation { color: #999; }
   .token.selector { color: #690; }
   .token.property { color: #905; }
   
   #code{
     position: fixed;
     left: 0;
     width: 48%;
     height: 98vh;
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
    padding: 20px 0 0 20px;
    right: 0;
    width: 48%;
    height: 98vh;
    background: white;
  }
  #paper > pre{
    height: 100%;
    overflow: auto;   
  }
`;

let md = `
# 个人信息

- 胶布帝/男/1990 
- 手机：135******** 
- Email：goodman@gmail.com
- QQ/微信号：6*******
- 本科/萌鹿大学计算机系 
- 工作年限：3年
- 技术博客：http://blog.github.io
- Github：http://github.com/geekcompany 
- 期望职位：Web前端高级程序员，应用架构师

------

# 工作经历

## ABC公司 （ 2012年9月 ~ 2014年9月 ）

### DEF项目 

我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。

### GHI项目 

我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。

### 其他项目

（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）

## JKL公司 （ 2010年3月 ~ 2012年8月 ）

### MNO项目 

我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。

### PQR项目 

我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。

### 其他项目

（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）

------

## 开源项目

（对于程序员来讲，没有什么比Show me the code能有说服力了）

- [STU](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明
- [WXYZ](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明

## 技术文章

- [一个产品经理眼中的云计算：前生今世和未来](http://get.jobdeer.com/706.get)
- [来自HeroKu的HTTP API 设计指南(翻译文章)](http://get.jobdeer.com/343.get)

# 技能清单

以下均为我熟练使用的技能

- 前端框架：Vue/React/Bootstrap/小程序
- 前端工具：Gulp/Sass/Less
- 版本管理和自动化部署工具：Svn/Git/Webpack

## 技能

- CSS3
- ES6
- Vue
- React
- Ajax
- Flex

------

# 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。`;

let resource3 = `
  /* markdown 格式的代码没有被识别
  * 还不好看, 我们用 marked库 把它转化为html吧
  **/
`;
let resource4 = `
  #previewMd ul{
    list-style: none;
  }
  #previewMd h1{
    margin: 10px;
  }
  #previewMd p{
    text-indent: 2em;
    white-space: pre-line;
  }
  #previewMd h2{
    margin: 5px;
  }
`
writeCss('', resource, ()=>{
  writeCss(resource, resource2, ()=>{
    writeMd(md, ()=>{
      writeCss(resource + resource2, resource3, ()=>{
        mdToHtml(()=>{
          writeCss(resource + resource2 + resource3, resource4, ()=>{
            console.log('终于TM写完了')
          })
        })
      });
    })
  })
});


function mdToHtml(fn){
  document.getElementById('previewMd').innerHTML =
      marked(md)
  fn.call();
}





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


