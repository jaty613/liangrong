import {$Auth, $Visual, $P, $G} from './data-action'
import { Toast, Indicator, MessageBox } from 'mint-ui'
import * as VaildStore from './vaild-action'
const ActionStore = {}
// 普通交易认证
ActionStore['200:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Auth(dispatch, '200:1:0:1').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      window.location.replace(decodeURIComponent(window.getUrlParamVal('redict')))
    }
  })
}

// 融资融券认证
ActionStore['200:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Auth(dispatch, '200:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else window.location.replace('h5.html#!/welcome')
  })
}

// 信用上限查询
ActionStore['28325:0'] = ({dispatch}, vm) => {
  return $Visual(dispatch, '28325:0:1:4')
}

// 客户信用额度调整申请
ActionStore['28572:0'] = ({dispatch}, vm) => {
  let template = VaildStore.VA285720($P('28572:0'))
  if (template) {
    MessageBox({title: '确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $Visual(dispatch, '28572:0:1:4').then((msg) => {
          Indicator.close()
          if (msg) Toast({message: msg.message, duration: 1000})
          else Toast({message: '申请成功', duration: 1000})
        })
      }
    })
  }
}

// 查询客户负债汇总信息
ActionStore['705:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '705:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 信用资产查询
ActionStore['28324:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '28324:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 客户融资融券年利率
ActionStore['729:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '729:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 未了合约 列表
ActionStore['28501:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '28501:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('28501:0').position_str = $G('28501:0')[$G('28501:0').length - 1].position_str
    }
  })
}

// 未了合约 查询
ActionStore['28501:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '28501:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 已了合约 列表
ActionStore['28501:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '28501:1:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('28501:1').position_str = $G('28501:1')[$G('28501:1').length - 1].position_str
    }
  })
}

// 已了合约 查询
ActionStore['28501:1:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '28501:1:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 当日合约 列表
ActionStore['28501:2'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '28501:2:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('28501:2').position_str = $G('28501:2')[$G('28501:2').length - 1].position_str
    }
  })
}

// 现金预还款 列表
ActionStore['728:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '728:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('728:0').position_str = $G('728:0')[$G('728:0').length - 1].position_str
    }
  })
}

// 现金预还款 查询
ActionStore['728:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '728:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 利率信息查询
ActionStore['28502:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '28502:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 信用股东查询
ActionStore['407:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '407:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 信用额度调整查询 列表
ActionStore['724:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '724:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('724:0').position_str = $G('724:0')[$G('724:0').length - 1].position_str
    }
  })
}

// 信用额度调整查询 查询
ActionStore['724:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '724:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 资金流水查询 列表
ActionStore['412:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '412:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('412:0').position_str = $G('412:0')[$G('412:0').length - 1].position_str
    }
  })
}

// 资金流水查询 查询
ActionStore['412:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '412:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 负债流水查询 列表
ActionStore['728:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '728:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('728:0').position_str = $G('728:0')[$G('728:0').length - 1].position_str
    }
  })
}

// 负债流水查询 查询
ActionStore['728:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '728:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 融资融券持仓 列表
ActionStore['403:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '403:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('403:0').position_str = $G('403:0')[$G('403:0').length - 1].position_str
    }
  })
}

// 融资融券持仓 详情
ActionStore['403:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '403:1:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 普通持仓 列表
ActionStore['403:2'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '403:2:0:1', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('403:2').position_str = $G('403:2')[$G('403:2').length - 1].position_str
    }
  })
}

// 普通持仓 详情
ActionStore['403:3'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '403:3:1:1').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 普通账号-股东号、席位号 列表
ActionStore['407:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '407:1:0:1').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 融券委托代码
ActionStore['701:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '701:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

//  担保证券提交 (提交前必须冻结)
ActionStore['712:0:submit'] = ({dispatch}, vm) => {
  let template = VaildStore.VA7120($P('712:0'))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $P('711:0')['exchange_type'] = $P('712:0')['exchange_type']
        // $P('711:0')['stock_account'] = $P('712:0')['stock_account']
        $P('711:0')['stock_code'] = $P('712:0')['stock_code']
        $P('711:0')['occur_amount'] = $P('712:0')['occur_amount']
        // $P('711:0')['valid_date'] = (new Date(new Date().setDate((new Date().getDate() + 2))).Format('yyyyMMdd'))
        $P('711:0')['valid_date'] = (new Date().Format('yyyyMMdd'))
        // 担保证券冻结
        $Visual(dispatch, '711:0:1:1').then((msg) => {
          if (msg) {
            Toast({message: msg.message, duration: 1000})
          } else {
            $Visual(dispatch, '712:0:1:4').then((msg) => {
              if (msg) Toast({message: msg.message, duration: 1000})
              else {
                Toast({message: `委托成功! 委托编号: ${$G('712:0').entrust_no}`, duration: 1000})
                $P('712:0')['stock_code'] = ''
                $Visual(dispatch, '403:2:0:1', 'RELOAD')
              }
            })
          }
          Indicator.close()
        })
      }
    })
  }
}

// 担保物撤单
ActionStore['713:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '713:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('713:0').position_str = $G('713:0')[$G('713:0').length - 1].position_str
    }
  })
}

// 委托撤单
ActionStore['304:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '304:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      Toast({message: '撤单成功!', duration: 1000})
      $Visual(dispatch, '401:0:0:4')
    }
  })
}

// 担保物委托撤单
ActionStore['304:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '304:1:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      Toast({message: '撤单成功!', duration: 1000})
      $Visual(dispatch, '713:0:0:4')
    }
  })
}

// 非交易过户查询
ActionStore['713:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '713:1:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 可融资证券 列表
ActionStore['715:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '715:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('715:0').position_str = $G('715:0')[$G('715:0').length - 1].position_str
    }
  })
}
// 可融资证券 查询
ActionStore['715:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '715:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 融资负债订单明细 列表
ActionStore['720:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '720:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('720:0').position_str = $G('720:0')[$G('720:0').length - 1].position_str
    }
  })
}

// 融资负债订单明细 查询
ActionStore['720:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '720:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 可融券证券查询 列表
ActionStore['716:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '716:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('716:0').position_str = $G('716:0')[$G('716:0').length - 1].position_str
    }
  })
}

// 可融券证券查询 查询
ActionStore['716:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '716:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 融券负债订单 列表
ActionStore['706:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '706:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('706:0').position_str = $G('706:0')[$G('706:0').length - 1].position_str
    }
  })
}

// 融券负债订单 查询
ActionStore['706:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '706:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 委托撤单 列表
ActionStore['401:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '401:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('401:0').position_str = $G('401:0')[$G('401:0').length - 1].position_str
    }
  })
}

// 担保品返回
ActionStore['712:1:SUBMIT'] = ({dispatch}, vm) => {
  let template = VaildStore.VA7121($P('712:1'))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $Visual(dispatch, '712:1:1:4').then((msg) => {
          Indicator.close()
          if (msg) Toast({message: msg.message, duration: 1000})
          else {
            Toast({message: `委托成功! 委托编号: ${$G('712:1').entrust_no}`, duration: 1000})
            $P('712:1')['stock_code'] = ''
            $Visual(dispatch, '403:0:0:4', 'RELOAD')
          }
        })
      }
    })
  }
}

// 融券卖出 列表
ActionStore['716:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '716:1:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('716:1').position_str = $G('716:1')[$G('716:1').length - 1].position_str
    }
  })
}

// 融券卖出 单条记录 查询可卖数量
ActionStore['716:2'] = ({dispatch}, vm) => {
  $Visual(dispatch, '716:2:1:4')
}

// 融券卖出 单条记录 重置
ActionStore['716:2:RESET'] = ({dispatch}, vm) => {
  $Visual(dispatch, '716:2:1:4', 'RESET')
}
// 融券卖出 - 委托确认
ActionStore['704:0'] = ({dispatch}, vm) => {
  let template = VaildStore.VA7040(Object.assign({upPrice: vm.RealData.upPrice, downPrice: vm.RealData.downPrice}, $P('704:0')))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $Visual(dispatch, '704:0:1:4').then((msg) => {
          Indicator.close()
          if (msg) Toast({message: msg.message, duration: 1000})
          else {
            Toast({message: `委托成功! 委托编号: ${$G('704:0').batch_no}`, duration: 1000})
            $P('704:0')['stock_code'] = ''
            $Visual(dispatch, '716:1:0:4', 'RELOAD')
            // $Visual(dispatch, '703:0:1:4', 'RELOAD')
          }
        })
      }
    })
  }
}

// 融券负债查询
ActionStore['722:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '722:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('722:0').position_str = $G('722:0')[$G('722:0').length - 1].position_str
    }
  })
}

// 融券负债订单 查询
ActionStore['722:0:SEARCH'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '722:0:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 买券还券 - 委托确认
ActionStore['704:1'] = ({dispatch}, vm) => {
  let template = VaildStore.VA7041(Object.assign({upPrice: vm.RealData.upPrice, downPrice: vm.RealData.downPrice}, $P('704:1')))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $Visual(dispatch, '704:1:1:4').then((msg) => {
          Indicator.close()
          if (msg) Toast({message: msg.message, duration: 1000})
          else {
            Toast({message: `委托成功! 委托编号: ${$G('704:1').batch_no}`, duration: 1000})
            $P('704:1')['stock_code'] = ''
            $Visual(dispatch, '722:0:0:4', 'RELOAD')
            // $Visual(dispatch, '702:0:1:4', 'RELOAD')
          }
        })
      }
    })
  }
}

// 融券取可买数量
ActionStore['702:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '702:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 融券取可买数量 - 重置
ActionStore['702:0:RESET'] = ({dispatch}, vm) => {
  $Visual(dispatch, '702:0:1:4', 'RESET')
}

// 融资取可买数量
ActionStore['702:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '702:1:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 融资取可买数量 - 重置
ActionStore['702:1:RESET'] = ({dispatch}, vm) => {
  $Visual(dispatch, '702:1:1:4', 'RESET')
}

// 直接还款
ActionStore['708:0'] = ({dispatch}, vm) => {
  let template = VaildStore.VA7080(Object.assign({upPrice: vm.RealData.upPrice, downPrice: vm.RealData.downPrice}, $P('708:0')))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $Visual(dispatch, '708:0:1:4').then((msg) => {
          Indicator.close()
          if (msg) Toast({message: msg.message, duration: 1000})
          else {
            Toast({message: `委托成功! 委托编号: ${$G('708:0').entrust_no}`, duration: 1000})
            $P('708:0')['stock_code'] = ''
            $Visual(dispatch, '722:0:0:4', 'RELOAD')
            // $Visual(dispatch, '702:0:1:4', 'RELOAD')
          }
        })
      }
    })
  }
}

// 融资买入 - 委托确认
ActionStore['704:2'] = ({dispatch}, vm) => {
  let template = VaildStore.VA7042(Object.assign({upPrice: vm.RealData.upPrice, downPrice: vm.RealData.downPrice}, $P('704:2')))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $Visual(dispatch, '704:2:1:4').then((msg) => {
          Indicator.close()
          if (msg) Toast({message: msg.message, duration: 1000})
          else {
            Toast({message: `委托成功! 委托编号: ${$G('704:2').batch_no}`, duration: 1000})
            $P('704:2')['stock_code'] = ''
            $Visual(dispatch, '403:0:0:4')
          }
        })
      }
    })
  }
}

// 大约可买获取
ActionStore['301:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '301:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 大约可买获取 - 重置
ActionStore['301:0:RESET'] = ({dispatch}, vm) => {
  $Visual(dispatch, '301:0:1:4', 'RESET')
}

// 卖券还款 委托确认
ActionStore['704:3'] = ({dispatch}, vm) => {
  let template = VaildStore.VA7043(Object.assign({upPrice: vm.RealData.upPrice, downPrice: vm.RealData.downPrice}, $P('704:3')))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $Visual(dispatch, '704:3:1:4').then((msg) => {
          Indicator.close()
          if (msg) Toast({message: msg.message, duration: 1000})
          else {
            Toast({message: `委托成功! 委托编号: ${$G('704:3').batch_no}`, duration: 1000})
            $P('704:3')['stock_code'] = ''
            $Visual(dispatch, '403:0:0:4')
            // $Visual(dispatch, '700:0:1:4')
          }
        })
      }
    })
  }
}

//  卖券还款 - 可买数量
ActionStore['700:0'] = ({dispatch}, vm) => {
  $Visual(dispatch, '700:0:1:4')
}

// 大约可买获取 - 重置
ActionStore['700:0:RESET'] = ({dispatch}, vm) => {
  $Visual(dispatch, '700:0:1:4', 'RESET')
}

// 查询客户负债
ActionStore['705:0'] = ({dispatch}, vm) => {
  $Visual(dispatch, '705:0:1:4')
}

// 现金还款 - 查询未指定偿还负债订单明细
ActionStore['736:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '736:0:0:4', 'CONCAT').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
    else {
      $P('736:0').position_str = $G('736:0')[$G('736:0').length - 1].position_str
    }
  })
}

// 现金还款 - 直接还款
ActionStore['707:0'] = ({dispatch}, vm) => {
  let template = VaildStore.VA7070($P('707:0'))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        if ($P('707:0')['serial_no'] && $P('707:0')['serial_no'] !== true) { // 按笔还
          $P('707:0')['pay_type'] = 1
        } else { // 按合约还
          $P('707:0')['pay_type'] = 0
        }
        $Visual(dispatch, '707:0:1:4').then((msg) => {
          Indicator.close()
          if (msg) {
            Toast({message: msg.message, duration: 1000})
          } else {
            Toast({message: '委托成功!', duration: 1000})
            $P('707:0')['serial_no'] = ''
            $P('707:0')['occur_balance'] = ''
            $Visual(dispatch, '705:0:1:4')
            $Visual(dispatch, '736:0:0:4')
          }
        })
      }
    })
  }
}

// 担保品买入
ActionStore['302:0'] = ({dispatch}, vm) => {
  let template = VaildStore.VA3020(Object.assign({upPrice: vm.RealData.upPrice, downPrice: vm.RealData.downPrice}, $P('302:0')))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $Visual(dispatch, '302:0:1:4').then((msg) => {
          Indicator.close()
          if (msg) Toast({message: msg.message, duration: 1000})
          else {
            Toast({message: `委托成功! 委托编号: ${$G('302:0').batch_no}`, duration: 1000})
            $P('302:0')['stock_code'] = ''
            $Visual(dispatch, '403:0:0:4', 'RELOAD')
          }
        })
      }
    })
  }
}

// 担保品卖出
ActionStore['302:1'] = ({dispatch}, vm) => {
  let template = VaildStore.VA3021(Object.assign({upPrice: vm.RealData.upPrice, downPrice: vm.RealData.downPrice}, $P('302:1')))
  if (template) {
    MessageBox({title: '交易确认', message: template, showCancelButton: true}).then((action) => {
      if (action === 'confirm') {
        Indicator.open()
        $Visual(dispatch, '302:1:1:4').then((msg) => {
          Indicator.close()
          if (msg) Toast({message: msg.message, duration: 1000})
          else {
            Toast({message: `委托成功! 委托编号: ${$G('302:1').batch_no}`, duration: 1000})
            $P('302:1')['stock_code'] = ''
            $Visual(dispatch, '403:0:0:4', 'RELOAD')
            // $Visual(dispatch, '300:0:1:4')
          }
        })
      }
    })
  }
}

// TODO: 融资融券指定委托确认 - [未使用]
ActionStore['735:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '735:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// TODO: 卖券还款 - 查询某支股票未指定偿还负债订单明细 - [未使用]
ActionStore['736:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '736:1:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 卖券还款 - 某支股票-融券负债订单明细
ActionStore['706:1'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '706:1:0:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 证券代码信息查询
ActionStore['105:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '105:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 证券代码确认
ActionStore['300:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '300:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}
// 重置证券代码确认
ActionStore['300:0:RESET'] = ({dispatch}, vm) => {
  $Visual(dispatch, '300:0:1:4', 'RESET')
}

// 取融券可卖数量
ActionStore['703:0'] = ({dispatch}, vm) => {
  Indicator.open()
  $Visual(dispatch, '703:0:1:4').then((msg) => {
    Indicator.close()
    if (msg) Toast({message: msg.message, duration: 1000})
  })
}

// 重置取融券可卖数量
ActionStore['703:0:RESET'] = ({dispatch}, vm) => {
  $Visual(dispatch, '703:0:1:4', 'RESET')
}

// ***********************************************

export const $AS = (mark) => {
  if (ActionStore[mark]) {
    return ActionStore[mark]
  } else {
    console.log(`Action Store 未找到 ${mark} 的定义`)
    return () => {}
  }
}

export const $RELOAD = (mark) => {
  return ({dispatch}, vm) => {
    $Visual(dispatch, mark, 'RELOAD')
  }
}
