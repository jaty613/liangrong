import {$http} from './config'
import $node from './nodes'
const $post = (url, body, options = { _timeout: 3000 }) => {
  return $http.post(url, body, options).catch((e) => {
    return Promise.resolve({message: e.message ? e.message : '连接超时,请检测网络设置'})
  })
}

const $get = (url, body, options = { _timeout: 3000 }) => {
  return $http.get(url, body, options).catch((e) => {
    return Promise.resolve({message: e.message ? e.message : '连接超时,请检测网络设置'})
  })
}

// 认证
export const auth = (body, sys = 4) => $post(`${$node[sys]}/user/login`, body)
// 用户会话
export const session = (body, sys = 4) => $get(`${$node[sys]}/user/session`, body)
// 虚拟节点图 标记(功能号,数据返回格式)
export const visual = (marks, body, sys = 4) => $post(`${$node[sys]}/v1/api/auth/${marks[1]}/${marks[0]}`, body)
// 股票按键精灵
export const macro = (code, number, body, sys = 0) => $get(`${$node[sys]}/quote/stock/stock_data/${code}/${number}`, body)
// 股票行情
export const market = (code, body, sys = 0) => $get(`${$node[sys]}/quote/stock/${code}/real_time_data`, body)
