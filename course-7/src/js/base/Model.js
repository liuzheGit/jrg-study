window.Model = function({resourceName}){
  return {
    init: function(){
      var APP_ID = 'QEh7NSoCknPeaj6MPbFnC8M3-gzGzoHsz';
      var APP_KEY = 'oTaXOEUI0ccsrUfAvXITAyhG';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    save: function(object){
      let Instance = AV.Object.extend(resourceName);
      let instance = new Instance();
      return instance.save(object)
    },
    fetch: function(){
      let query = new AV.Query(resourceName);
      return query.find()
    }

  }
};