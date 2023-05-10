import AsyncStorage from "@react-native-async-storage/async-storage";

import { login, getUserInfoRequest } from "../api/user_requst";
import { Config } from "../config/index";

enum LoginType {
  PASSWORD = "PASSWORD",
}

enum RecipientType {
  EMAIL = "EMAIL",
}

// 单利模式，只保留一份
class UserService {
  setUserInfo(userInfo: any) {
    AsyncStorage.setItem(Config.userInfoKey, JSON.stringify(userInfo));
  }

  // 获取用户信息
  async getUserInfo(): Promise<string | null> {
    const data = await AsyncStorage.getItem(Config.userInfoKey);
    if (data) {
      return JSON.parse(data);
    } else {
      const userInfo = await getUserInfoRequest();
      this.setUserInfo(userInfo);
      return userInfo;
    }
  }

  setUserToken(token: string) {
    AsyncStorage.setItem(Config.userTokenKey, token);
  }

  async getUserToken(): Promise<string | null> {
    return await AsyncStorage.getItem(Config.userTokenKey);
  }

  // 登录
  async login(name: string, password: string) {
    try {
      const token = await this.getUserToken();
      if (token) {
        console.log(">>>token", token);

        const userInfo = await this.getUserInfo();

        console.log(">>>userInfo", userInfo);
      } else {
        console.log(">>> 用户未登录");

        const loginInfo = await login({
          recipientType: RecipientType.EMAIL,
          loginType: LoginType.PASSWORD,
          recipient: name,
          code: password,
          platform: "pw",
        });
        this.setUserToken(loginInfo.data.token);

        await this.getUserInfo();
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  // 登出
  async logout() {
    await AsyncStorage.removeItem(Config.userTokenKey);
    await AsyncStorage.removeItem(Config.userInfoKey);
  }
}

var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new UserService();
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
var userService = Singleton.getInstance();

export { userService };
