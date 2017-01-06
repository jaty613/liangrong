import 'assets/css/ui.css'
import 'assets/css/comin.css'
import 'mint-ui/lib/style.css'
//  import 'assets/css/swiper.min.css'
import dictionaries from './dictionaries.json'
export default {
  dic
}

const dic = function (name, key) {
  if (dictionaries[name]) {
    return dictionaries[name].values[key] ? dictionaries[name].values[key] : `字典项:${name} 找不到对应${key} 的值`
  } else {
    return `未找到字典项 ${name}`
  }
}

window.$dic = dic

/**
 *
 * 金融算法扩展
 *
 * */

// 数据值转简单表示方式  亿、万等
window.Math.transScientific = function (val) {
  var _val = '0'
  if (typeof val === 'number') {
    if (val >= 10000000 || val <= -10000000) {
      _val = `${parseFloat(val / 100000000).toFixed(1)}g`
    } else if (val >= 10000 || val <= -10000) {
      _val = `${parseFloat(val / 10000).toFixed(1)}w`
    } else if (val >= 1000 || val <= -1000) {
      _val = `${parseFloat(val / 1000).toFixed(1)}k`
    } else {
      _val = `${parseInt(val)}`
    }
  }
  return _val
}
// 数据值转简单表示中文方式  亿、万等
window.Math.transCNScientific = function (val) {
  var _val = '0'
  if (typeof val === 'number') {
    if (val >= 10000000 || val <= -10000000) {
      _val = `${parseFloat(val / 100000000).toFixed(1)}亿`
    } else if (val >= 10000 || val <= -10000) {
      _val = `${parseFloat(val / 10000).toFixed(1)}万`
    } else {
      _val = `${parseInt(val)}`
    }
  }
  return _val
}
// // 数据值转简单表示中文方式  亿、万等 保留num为小数
window.Math.transScientificNum = function (val, num) {
  var _val = '0'
  if (!num || typeof num !== 'number') {
    num = 2
  }
  if (typeof val === 'number') {
    if (val >= 10000000 || val <= -10000000) {
      _val = `${parseFloat(val / 100000000).toFixed(num)}亿`
    } else if (val >= 10000 || val <= -10000) {
      _val = `${parseFloat(val / 10000).toFixed(num)}万`
    } else {
      _val = `${parseFloat(val).toFixed(num)}`
    }
  }
  return _val
}
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
// (new Date()).Format('yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
window.Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,                 // 月份
    'd+': this.getDate(),                    // 日
    'h+': this.getHours(),                   // 小时
    'm+': this.getMinutes(),                 // 分
    's+': this.getSeconds(),                 // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds()             // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

// 解析URL
window.getUrlParamVal = function (name) {
  var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href)
  if (!results) {
    return 0
  }
  return results[1] || 0
}
