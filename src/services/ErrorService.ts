class ErrorService {
  logErrorToMyService() {
    console.log("loging errors to server...");
  }
}

var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new ErrorService();
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// 创建一个单例
var errorService = Singleton.getInstance();

export { errorService };
