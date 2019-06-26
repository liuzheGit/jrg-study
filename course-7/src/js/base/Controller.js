window.Controller = function(options){
  let object = {
    view: null,
    model: null,
    init: function(view, model){
      this.view = view;
      if(model){
        this.model = model;
        this.model.init();
      }
      this.bindEvents();
    }
  };
  for (let key in options){
    if(key !== 'init'){
      object[key] = options[key]
    }
  }
  return object
};