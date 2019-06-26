window.View = function(selector){
  return{
    get: function(){
      return document.querySelector(selector)
    },
    getALl: function(){
      return document.querySelectorAll(selector)
    }

  }
};


