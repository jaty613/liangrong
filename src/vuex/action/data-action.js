import * as URLAPI from '../../api/two-asset'

import {params as ParamsStore, state as StateStore} from '../services'
export const $P = (mark) => {
  return ParamsStore[mark]
}

export const $G = (mark) => {
  return StateStore[mark]
}

export const $Visual = (dispatch, mark, op = 'INIT') => {
  if (mark) {
    var marks = mark.split(':') // 功能号、定义号、格式号、系统号
    if (op === 'RESET') {
      return dispatch(`${marks[0]}:${marks[1]}:${op}`)
    } else {
      if (op === 'RELOAD' || op === 'INIT') {
        delete $P(`${marks[0]}:${marks[1]}`).position_str
      }
      return URLAPI.visual([marks[0], marks[2]], $P(`${marks[0]}:${marks[1]}`), marks[3]).then(reply => {
        if (reply && reply.data && reply.data['error_code'] && reply.data['error_code'] === '-10001') { // 非法访问接口
          window.location.href = 'login.html'
        }
        if (reply && reply.data && reply.data['error_code'] === 0) {
          if (reply.data.result instanceof Array && reply.data.result.length === 0) {
            dispatch(`${marks[0]}:${marks[1]}:${op}`, reply.data.result)
            return Promise.resolve({message: '没有更多数据', data: reply.data.result})
          } else {
            return dispatch(`${marks[0]}:${marks[1]}:${op}`, reply.data.result)
          }
        } else {
          return Promise.resolve(new Error(reply['message'] ? reply.message : reply.data['resultMsg']))
        }
      })
    }
  }
}

export const $Auth = (dispatch, mark) => {
  if (mark) {
    var marks = mark.split(':') // 功能号、定义号、格式号、系统号
    return URLAPI.auth($P(`${marks[0]}:${marks[1]}`), marks[3]).then(reply => {
      if (reply && reply.data && reply.data['error_code'] === 0) {
        return dispatch(`${marks[0]}:${marks[1]}:INIT`, reply.data.result)
      } else {
        return Promise.resolve(new Error(reply['message'] ? reply.message : reply.data['resultMsg']))
      }
    })
  }
}

export const $Session = () => {
  return URLAPI.session().then(reply => {
    if (reply && reply.data && reply.data['error_code'] === 0) {
      return Promise.resolve(reply.data.result)
    } else {
      return Promise.resolve(new Error(reply['message'] ? reply.message : reply.data['resultMsg']))
    }
  })
}

export const $Macro = (code, number) => {
  return URLAPI.macro(code, number).then(reply => {
    if (reply && reply.data && reply.data['success'] === true) {
      reply.data.data.map((obj) => {
        let hexStr = `0x${parseInt(obj.codeType, 10).toString(16)}`.substring(0, 4)
        if (hexStr === '0x11') { // 上海
          obj.exchange_type = '1'
        } else if (hexStr === '0x12') { // 深圳
          obj.exchange_type = '2'
        }
        obj.stock_code = obj.stockCode
        obj.stock_name = obj.stockName
        delete obj.codeType
        delete obj.stockCode
        delete obj.stockName
      })
      return Promise.resolve(reply.data.data)
    } else {
      return Promise.resolve(new Error(reply['message'] ? reply.message : '股票精灵查询失败'))
    }
  })
}

export const $Market = (code) => {
  return URLAPI.market(code).then(reply => {
    if (reply && reply.data && reply.data['success'] === true) {
      return Promise.resolve(reply.data.data)
    } else {
      return Promise.resolve(new Error(reply['message'] ? reply.message : reply.data['resultMsg']))
    }
  })
}

