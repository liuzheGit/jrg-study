!function () {
  let view = View('#message-form').get();
  let model = Model({resourceName:'Messages'});
  let contorller = {
    view: null,
    model: null,
    init: function(view, model){
      this.view = view;
      this.model = model;
      this.model.init();
      this.loadMessage();
      this.saveMessage();
    },
    loadMessage: function(){
      this.model.fetch().then((result)=>{
        let messageUl = View('.message-wrap>.message-ul').get();
        result.map((item)=>{
          let object = item.attributes;
          let liEle = document.createElement('li');
          liEle.innerText = `${object.username}: ${object.content}`;
          messageUl.append(liEle)
        })
      })
    },
    saveMessage: function(){
      this.view.addEventListener('submit', (e)=>{
        e.preventDefault();
        let content = this.view.querySelector('input[name="content"]').value;
        let username = this.view.querySelector('input[name="username"]').value;
        this.model.save({content, username}).then((res)=>{
          let messageUl = View('.message-wrap>.message-ul').get();
          let object = res.attributes;
          let liEle = document.createElement('li');
          liEle.innerText = `${object.username}: ${object.content}`;
          messageUl.append(liEle);
          let contentDom = document.querySelector('#message-form input[name="content"]');
          contentDom.value = '';
        })
      })
    }
  };

  contorller.init(view, model)
}.call();


