window.jQuery = {};
window.$ = window.jQuery;
// 普通版
// window.$.ajax = function({url, method, body, success, fail, headers}){
//   let request = new XMLHttpRequest();
//   request.open(method, url);
//   for(let key in headers){
//     let value = headers[key]
//     request.setRequestHeader(key, value)
//   }
//   request.send();
//   request.onreadystatechange = function(){
//     if(request.readyState === 4){
//       if(request.status >= 200 && request.status < 300){
//         success.call(undefined, request.responseText);
//       }else if(request.status >= 400){
//         fail.call(undefined, request.responseText);
//       }
//     }
//   }
// };

// Promise 版
window.$.ajax = function({url, method, body, success, fail, headers}){
  return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    request.open(method, url);
    for(let key in headers){
      let value = headers[key];
      request.setRequestHeader(key, value)
    }
    request.send();
    request.onreadystatechange = function(){
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined, request.responseText);
        }else if(request.status >= 400){
          reject.call(undefined, request.responseText);
        }
      }
    }
  })
};
