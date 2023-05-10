import AsyncStorage from "@react-native-async-storage/async-storage";

import { Config } from "../config/index";
import { userService } from "../services/UserService";

class Request {
  // 错误回调
  handelError(res: any, resolve: Function, reject: Function) {
    if (reject) {
      reject(res);
    }

    this.requestWillEnd(true, res);
  }

  // 成功回调
  handleSuccess(res: any, resolve: Function, reject: Function) {
    // res = JSON.parse(res);
    res.code = Number(res.code);

    if (res.code === 0) {
      if (resolve) {
        resolve(res);
      }
      this.requestWillEnd(false, res);
    } else {
      if (reject) {
        reject(res);
      }
      this.requestWillEnd(true, res);
    }
  }

  // 请求开始回调
  requestWillBegin(
    url: string,
    fullUrl: string,
    method: string,
    opts: any,
    data: any,
    params: any
  ) {
    if (Config.isDebug) {
      console.log("+++++++===========：", url);
      console.log(">>>method：", method);
      console.log(">>>fullUrl：", fullUrl);
      console.log(">>>params：", params);
      console.log(">>>data：", data);
      console.log(">>>headers：", opts);
    }
  }

  // 请求结束回调
  requestWillEnd(isError: boolean, res: any) {
    if (Config.isDebug) {
      if (isError) {
        console.log("*** Error");
        console.log("*** Info：", res);
      } else {
        console.log("=== Success");
        console.log("=== Data：", res);
      }

      console.log("+++++++===========");
    }
  }

  // 获取请求头
  async getHeaders() {
    let token = await userService.getUserToken();
    let opt = {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    };

    if (token) {
      opt["x-authorization"] = token;
    }

    return opt;
  }

  // 获取完整的url
  getFullUrl(url: string, params: Map<string, string | number>) {
    url = Config.baseUrl + url;

    //拼接参数
    let paramsArray = [];
    params &&
      Object.keys(params).forEach((key) =>
        paramsArray.push(key + "=" + params[key])
      );
    if (url.search(/\?/) === -1) {
      url += "?" + paramsArray.join("&");
    } else {
      url += "&" + paramsArray.join("&");
    }

    return url;
  }

  // get请求
  get(url: string, params: any) {
    const method = "GET";
    const fullUrl = this.getFullUrl(url, params ? params : {});
    const opts = this.getHeaders();

    this.requestWillBegin(url, method, fullUrl, opts, null, params);

    return new Promise((resolve, reject) => {
      fetch(fullUrl, {
        headers: opts,
        method: method,
      })
        .then(function (d) {
          return d.json();
        })
        .then((responseText) =>
          this.handleSuccess(responseText, resolve, reject)
        )
        .catch((err) => this.handelError(err, resolve, reject));
    });
  }

  // post请求
  async post(url: string, data: any, params: any) {
    const method = "POST";
    const fullUrl = this.getFullUrl(url, params ? params : {});
    const opts = await this.getHeaders();

    let formData = new FormData();
    data && Object.keys(data).forEach((key) => formData.append(key, data[key]));

    this.requestWillBegin(url, method, fullUrl, opts, data, params);

    return new Promise((resolve, reject) => {
      fetch(fullUrl, {
        headers: opts,
        method: method,
        body: data ? formData : null,
      })
        .then(function (d) {
          return d.json();
        })
        .then((responseText) =>
          this.handleSuccess(responseText, resolve, reject)
        )
        .catch((err) => this.handelError(err, resolve, reject));
    });
  }

  // put请求
  put(url: string, data: any, params: any) {
    const method = "PUT";
    const fullUrl = this.getFullUrl(url, params ? params : {});
    const opts = this.getHeaders();

    let formData = new FormData();
    data && Object.keys(data).forEach((key) => formData.append(key, data[key]));

    this.requestWillBegin(url, method, fullUrl, opts, data, params);

    return new Promise((resolve, reject) => {
      fetch(fullUrl, {
        headers: opts,
        method: method,
        body: data ? formData : null,
      })
        .then(function (d) {
          return d.json();
        })
        .then((responseText) =>
          this.handleSuccess(responseText, resolve, reject)
        )
        .catch((err) => this.handelError(err, resolve, reject));
    });
  }

  // delete请求
  delete(url: string, data: any, params: any) {
    const method = "DELETE";
    const fullUrl = this.getFullUrl(url, params ? params : {});
    const opts = this.getHeaders();

    let formData = new FormData();
    data && Object.keys(data).forEach((key) => formData.append(key, data[key]));

    this.requestWillBegin(url, method, fullUrl, opts, data, params);

    return new Promise((resolve, reject) => {
      fetch(fullUrl, {
        headers: opts,
        method: method,
        body: data ? formData : null,
      })
        .then(function (d) {
          return d.json();
        })
        .then((responseText) =>
          this.handleSuccess(responseText, resolve, reject)
        )
        .catch((err) => this.handelError(err, resolve, reject));
    });
  }

  // 上传文件
  uploadFile(file: any) {
    // let formData = new FormData();
    // formData.append("key",表单内容);
    // fetch(url , {
    //  method: 'POST',
    //  headers: {},
    //  body: formData,
    // ).then((response) => {
    //  if (response.ok) {
    //      return response.json();
    //  }
    // ).then((json) => {
    //  alert(JSON.stringify(json));
    // ).catch((error) => {
    //  console.error(error);
    // );
  }
}

var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Request();
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
var request = Singleton.getInstance();

export { request };
