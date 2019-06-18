window.jQuery = function(nodeOrSelector){
  let nodes = {};
  if(typeof nodeOrSelector === 'string'){
    let tmp = document.querySelectorAll(nodeOrSelector);
    for(let i = 0, len = tmp.length; i < len; i++){
      nodes[i] = tmp[i]
    }
    nodes.length = tmp.length
  }else if(nodeOrSelector instanceof Node){
    nodes = {
      0: nodeOrSelector,
      length: 1
    }
  }

  nodes.addClass = function(classes){
    classes.forEach((value)=>{
      for(let i = 0, len = nodes.length; i < len; i++){
        nodes[i].classList.add(value)
      }
    })
  };
  nodes.setText = function(text){
    if(text === undefined){
      let texts = [];
      for(let i = 0, len = nodes.length; i < len; i++){
        texts.push(nodes[i].textContent);
      }
      return texts
    }else {
      for(let i = 0, len = nodes.length; i < len; i++){
        nodes[i].textContent = text;
      }
    }
  };
  return nodes
};
window.$ = window.jQuery;

let $ll = $('.ll');
console.log($ll);
let cla = ['red', 'green'];
$ll.addClass(cla);

// let res = $ll.setText('123')
// console.log(res);