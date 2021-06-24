import http from '@/utils/request';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model';

enum Api {
  Login = '/login',
  GetUserInfo = '/getUserInfo',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return http.post<LoginResultModel>(
    Api.Login,
    params
  )
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return http.get<GetUserInfoModel>(Api.GetUserInfo);
}
