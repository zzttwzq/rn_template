import { request } from "../utils/request";

import { ApiPath } from "./api";

// 用户登录
export async function login(data: any) {
  return await request.post(ApiPath.login, data);
}

// 获取用户信息
export async function getUserInfoRequest() {
  return await request.post(ApiPath.userInfo);
}
