/**
 * 认证
 * 1、系统节点 SN
 * 2、功能号 FC
 * 3、输入参数 PS
 * 4、调度 DS
 * @returns {{login: (function()), logout: (function())}}
 * @constructor
 */
const Auth = () => {
  return {
    login: ({DS}, FC, PS) => {
      console.log('aa')
    },
    logout: () => {},
    session: () => {}
  }
}


