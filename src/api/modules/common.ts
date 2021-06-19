
// 登录
export function login () {
  return {
    // isOpen: false,
    url: '/login',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 退出
export function logout () {
  return {
    // isOpen: false,
    url: '/logout',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}