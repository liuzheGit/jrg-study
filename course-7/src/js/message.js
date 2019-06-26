!function () {
  let view = View('#message-form').get();
  let model = {
    init: function(){
      var APP_ID = 'QEh7NSoCknPeaj6MPbFnC8M3-gzGzoHsz';
      var APP_KEY = 'oTaXOEUI0ccsrUfAvXITAyhG';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    save: function({content, username}){
      let Message = AV.Object.extend('Messages');
      let message = new Message();
      return message.save({ content: content,username: username})
    },
    fetch: function(){
      let query = new AV.Query('Messages');
      return query.find()
    }
  };
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


