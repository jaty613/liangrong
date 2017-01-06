import { Toast } from 'mint-ui'
// 普通交易 - 担保品买入
export const VA3020 = (data = {}, confirm) => {
  if (data.stock_code === '') {
    Toast({message: '股票代码不能为空', duration: 1000})
    return false
  }
  if ((data.exchange_type !== '1' && data.exchange_type !== '2')) {
    Toast({message: '该证券不在担保证券池中', duration: 1000})
    return false
  }
  if (data.entrust_price === '' || data.entrust_price < 0) {
    Toast({message: '买入价不能为空,并且是正数', duration: 1000})
    return false
  }
  if (data.entrust_amount === '' || data.entrust_amount < 100) {
    Toast({message: '买入量必须大于100', duration: 1000})
    return false
  }
  if (data.entrust_amount % 100 !== 0) {
    data.entrust_amount = data.entrust_amount - (data.entrust_amount % 100)
    Toast({message: '买入量必须是100的整数倍', duration: 1000})
    return false
  }
  if (data.entrust_prop === '') {
    Toast({message: '必须选择委托方式', duration: 1000})
    return false
  }
  let template = `<ul class="">
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">买卖方向：</p>
      <p class="am-flexbox-item">买入</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票代码：</p>
      <p class="am-flexbox-item">${data.stock_code}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票名称：</p>
      <p class="am-flexbox-item">${data.stock_name}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托价格：</p>
      <p class="am-flexbox-item">${data.entrust_price}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托方式：</p>
      <p class="am-flexbox-item">${($dic('entrust_prop', data.entrust_prop))}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托数量：</p>
      <p class="am-flexbox-item">${data.entrust_amount}</p>
    </li>
  </ul>
  ${parseFloat(data.entrust_price) < parseFloat(data.downPrice) ? '<div class="am-ft-sm">(委托价格低于跌停价,交易可能失败!)</div>' : ''}
  ${parseFloat(data.entrust_price) > parseFloat(data.upPrice) ? '<div class="am-ft-sm">(委托价格高于涨停价,交易可能失败!)</div>' : ''}

`
  return template
}

// 普通交易 - 担保品卖出
export const VA3021 = (data) => {
  if (data.stock_code === '') {
    Toast({message: '股票代码不能为空', duration: 1000})
    return false
  }
  if ((data.exchange_type !== '1' && data.exchange_type !== '2')) {
    Toast({message: '该证券不在担保证券池中', duration: 1000})
    return false
  }
  if (data.entrust_price === '' || data.entrust_price < 0) {
    Toast({message: '买出价不能为空,并且是正数', duration: 1000})
    return false
  }
  if (data.entrust_amount === '' || data.entrust_amount < 100) {
    Toast({message: '委托数量必须大于100', duration: 1000})
    return false
  }
  if (data.entrust_amount % 100 !== 0) {
    data.entrust_amount = data.entrust_amount - (data.entrust_amount % 100)
    Toast({message: '委托数量必须是100的整数倍', duration: 1000})
    return false
  }
  if (data.entrust_prop === '') {
    Toast({message: '必须选择委托方式', duration: 1000})
    return false
  }
  let template = `<ul class="">
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">买卖方向：</p>
      <p class="am-flexbox-item">卖出</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票代码：</p>
      <p class="am-flexbox-item">${data.stock_code}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票名称：</p>
      <p class="am-flexbox-item">${data.stock_name}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托价格：</p>
      <p class="am-flexbox-item">${data.entrust_price}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托方式：</p>
      <p class="am-flexbox-item">${($dic('entrust_prop', data.entrust_prop))}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托数量：</p>
      <p class="am-flexbox-item">${data.entrust_amount}</p>
    </li>
  </ul>
  ${parseFloat(data.entrust_price) < parseFloat(data.downPrice) ? '<div class="am-ft-sm">(委托价格低于跌停价,交易可能失败!)</div>' : ''}
  ${parseFloat(data.entrust_price) > parseFloat(data.upPrice) ? '<div class="am-ft-sm">(委托价格高于涨停价,交易可能失败!)</div>' : ''}
`
  return template
}

// 融资 - 融资买入
export const VA7042 = (data) => {
  if (data.stock_code === '') {
    Toast({message: '股票代码不能为空', duration: 1000})
    return false
  }
  if ((data.exchange_type !== '1' && data.exchange_type !== '2')) {
    Toast({message: '该证券不在担保证券池中', duration: 1000})
    return false
  }
  if (data.entrust_price === '' || data.entrust_price < 0) {
    Toast({message: '买入价不能为空,并且是正数', duration: 1000})
    return false
  }
  if (data.entrust_amount === '' || data.entrust_amount < 100) {
    Toast({message: '买入量必须大于100', duration: 1000})
    return false
  }
  if (data.entrust_amount % 100 !== 0) {
    data.entrust_amount = data.entrust_amount - (data.entrust_amount % 100)
    Toast({message: '买入量必须是100的整数倍', duration: 1000})
    return false
  }
  if (data.entrust_prop === '') {
    Toast({message: '必须选择委托方式', duration: 1000})
    return false
  }
  let template = `<ul class="">
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">买卖方向：</p>
      <p class="am-flexbox-item">买入</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票代码：</p>
      <p class="am-flexbox-item">${data.stock_code}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票名称：</p>
      <p class="am-flexbox-item">${data.stock_name}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托方式：</p>
      <p class="am-flexbox-item">${($dic('entrust_prop', data.entrust_prop))}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托价格：</p>
      <p class="am-flexbox-item">${data.entrust_price}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托数量：</p>
      <p class="am-flexbox-item">${data.entrust_amount}</p>
    </li>
  </ul>
  ${parseFloat(data.entrust_price) < parseFloat(data.downPrice) ? '<div class="am-ft-sm">(委托价格低于跌停价,交易可能失败!)</div>' : ''}
  ${parseFloat(data.entrust_price) > parseFloat(data.upPrice) ? '<div class="am-ft-sm">(委托价格高于涨停价,交易可能失败!)</div>' : ''}
`
  return template
}

// 融资 - 卖券还款
export const VA7043 = (data) => {
  if (data.stock_code === '') {
    Toast({message: '股票代码不能为空', duration: 1000})
    return false
  }
  if ((data.exchange_type !== '1' && data.exchange_type !== '2')) {
    Toast({message: '该证券不在担保证券池中', duration: 1000})
    return false
  }
  if (data.entrust_price === '' || data.entrust_price < 0) {
    Toast({message: '卖出价不能为空,并且是正数', duration: 1000})
    return false
  }
  if (data.entrust_amount === '' || data.entrust_amount < 100) {
    Toast({message: '委托数量必须大于100', duration: 1000})
    return false
  }
  if (data.entrust_amount % 100 !== 0) {
    data.entrust_amount = data.entrust_amount - (data.entrust_amount % 100)
    Toast({message: '委托数量必须是100的整数倍', duration: 1000})
    return false
  }
  if (data.entrust_prop === '') {
    Toast({message: '必须选择委托方式', duration: 1000})
    return false
  }
  let template = `<ul class="">
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">买卖方向：</p>
      <p class="am-flexbox-item">卖出</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票代码：</p>
      <p class="am-flexbox-item">${data.stock_code}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票名称：</p>
      <p class="am-flexbox-item">${data.stock_name}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托方式：</p>
      <p class="am-flexbox-item">${($dic('entrust_prop', data.entrust_prop))}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托价格：</p>
      <p class="am-flexbox-item">${data.entrust_price}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托数量：</p>
      <p class="am-flexbox-item">${data.entrust_amount}</p>
    </li>
  </ul>
  ${parseFloat(data.entrust_price) < parseFloat(data.downPrice) ? '<div class="am-ft-sm">(委托价格低于跌停价,交易可能失败!)</div>' : ''}
  ${parseFloat(data.entrust_price) > parseFloat(data.upPrice) ? '<div class="am-ft-sm">(委托价格高于涨停价,交易可能失败!)</div>' : ''}
`
  return template
}

// 融资 - 现金还款
export const VA7070 = (data) => {
  if (!data.occur_balance || data.occur_balance === '') {
    Toast({message: '还款金额不能为空', duration: 1000})
    return false
  }
  if (!data.occur_balance || data.occur_balance <= 0) {
    Toast({message: '还款金额必须大于0', duration: 1000})
    return false
  }
  let template = `<ul class="">
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">还款金额：</p>
      <p class="am-flexbox-item">${data.occur_balance}</p>
    </li>
  </ul>`
  return template
}

// 融券 - 融券卖出
export const VA7040 = (data) => {
  if (data.stock_code === '') {
    Toast({message: '股票代码不能为空', duration: 1000})
    return false
  }
  if ((data.exchange_type !== '1' && data.exchange_type !== '2')) {
    Toast({message: '该证券不在担保证券池中', duration: 1000})
    return false
  }
  if (data.entrust_price === '' || data.entrust_price < 0) {
    Toast({message: '买出价不能为空,并且是正数', duration: 1000})
    return false
  }
  if (data.entrust_amount === '' || data.entrust_amount < 100) {
    Toast({message: '委托数据必须大于100', duration: 1000})
    return false
  }
  if (data.entrust_amount % 100 !== 0) {
    data.entrust_amount = data.entrust_amount - (data.entrust_amount % 100)
    Toast({message: '委托数据必须是100的整数倍', duration: 1000})
    return false
  }
  if (data.entrust_prop === '') {
    Toast({message: '必须选择委托方式', duration: 1000})
    return false
  }
  let template = `<ul class="">
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">买卖方向：</p>
      <p class="am-flexbox-item">卖出</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票代码：</p>
      <p class="am-flexbox-item">${data.stock_code}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票名称：</p>
      <p class="am-flexbox-item">${data.stock_name}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account}</p>
    </li>
     <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托价格：</p>
      <p class="am-flexbox-item">${data.entrust_price}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托数量：</p>
      <p class="am-flexbox-item">${data.entrust_amount}</p>
    </li>
  </ul>
  ${parseFloat(data.entrust_price) < parseFloat(data.downPrice) ? '<div class="am-ft-sm">(委托价格低于跌停价,交易可能失败!)</div>' : ''}
  ${parseFloat(data.entrust_price) > parseFloat(data.upPrice) ? '<div class="am-ft-sm">(委托价格高于涨停价,交易可能失败!)</div>' : ''}
`
  return template
}

// 融券 - 买券还券
export const VA7041 = (data) => {
  if (data.stock_code === '') {
    Toast({message: '股票代码不能为空', duration: 1000})
    return false
  }
  if ((data.exchange_type !== '1' && data.exchange_type !== '2')) {
    Toast({message: '该证券不在担保证券池中', duration: 1000})
    return false
  }
  if (data.entrust_price === '' || data.entrust_price < 0) {
    Toast({message: '买入价不能为空,并且是正数', duration: 1000})
    return false
  }
  if (data.entrust_amount === '' || data.entrust_amount < 100) {
    Toast({message: '买入量必须大于100', duration: 1000})
    return false
  }
  if (data.entrust_amount % 100 !== 0) {
    data.entrust_amount = data.entrust_amount - (data.entrust_amount % 100)
    Toast({message: '买入量必须是100的整数倍', duration: 1000})
    return false
  }
  if (data.entrust_prop === '') {
    Toast({message: '必须选择委托方式', duration: 1000})
    return false
  }
  let template = `<ul class="">
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">买卖方向：</p>
      <p class="am-flexbox-item">买入</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票代码：</p>
      <p class="am-flexbox-item">${data.stock_code}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票名称：</p>
      <p class="am-flexbox-item">${data.stock_name}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托方式：</p>
      <p class="am-flexbox-item">${($dic('entrust_prop', data.entrust_prop))}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托价格：</p>
      <p class="am-flexbox-item">${data.entrust_price}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托数量：</p>
      <p class="am-flexbox-item">${data.entrust_amount}</p>
    </li>
  </ul>
  ${parseFloat(data.entrust_price) < parseFloat(data.downPrice) ? '<div class="am-ft-sm">(委托价格低于跌停价,交易可能失败!)</div>' : ''}
  ${parseFloat(data.entrust_price) > parseFloat(data.upPrice) ? '<div class="am-ft-sm">(委托价格高于涨停价,交易可能失败!)</div>' : ''}
`
  return template
}

// 融券 - 现券还券
export const VA7080 = (data) => {
  if (data.stock_code === '') {
    Toast({message: '股票代码不能为空', duration: 1000})
    return false
  }
  if ((data.exchange_type !== '1' && data.exchange_type !== '2')) {
    Toast({message: '该证券不在担保证券池中', duration: 1000})
    return false
  }
  if (data.occur_amount === '' || data.occur_amount < 100) {
    Toast({message: '委托数量必须大于100', duration: 1000})
    return false
  }
  if (data.occur_amount % 100 !== 0) {
    data.occur_amount = data.occur_amount - (data.occur_amount % 100)
    Toast({message: '委托数量必须是100的整数倍', duration: 1000})
    return false
  }

  let template = `<ul class="">
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票代码：</p>
      <p class="am-flexbox-item">${data.stock_code}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票名称：</p>
      <p class="am-flexbox-item">${data.stock_name}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">委托数量：</p>
      <p class="am-flexbox-item">${data.occur_amount}</p>
    </li>
  </ul>
  ${parseFloat(data.entrust_price) < parseFloat(data.downPrice) ? '<div class="am-ft-sm">(委托价格低于跌停价,交易可能失败!)</div>' : ''}
  ${parseFloat(data.entrust_price) > parseFloat(data.upPrice) ? '<div class="am-ft-sm">(委托价格高于涨停价,交易可能失败!)</div>' : ''}

`
  return template
}

// 担保品 - 提交
export const VA7120 = (data) => {
  console.log(data)
  if (data.stock_code === '') {
    Toast({message: '股票代码不能为空', duration: 1000})
    return false
  }
  if ((data.exchange_type !== '1' && data.exchange_type !== '2')) {
    Toast({message: '该证券不在担保证券池中', duration: 1000})
    return false
  }
  if (data.occur_amount === '' || data.occur_amount < 100) {
    Toast({message: '委托数量必须大于100', duration: 1000})
    return false
  }
  if (data.occur_amount % 100 !== 0) {
    data.occur_amount = data.occur_amount - (data.occur_amount % 100)
    Toast({message: '委托数量必须是100的整数倍', duration: 1000})
    return false
  }
  let template = `<ul class="">
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票代码：</p>
      <p class="am-flexbox-item">${data.stock_code}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票名称：</p>
      <p class="am-flexbox-item">${data.stock_name}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">信用股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account_crdt}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">普通资金账号：</p>
      <p class="am-flexbox-item">${data.fund_account_comm}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">普通股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account_comm}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">普通席位号：</p>
      <p class="am-flexbox-item">${data.seat_no_comm}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">数量：</p>
      <p class="am-flexbox-item">${data.occur_amount}</p>
    </li>
  </ul>`
  return template
}

// 担保品 - 返回
export const VA7121 = (data) => {
  if (data.stock_code === '') {
    Toast({message: '股票代码不能为空', duration: 1000})
    return false
  }
  if ((data.exchange_type !== '1' && data.exchange_type !== '2')) {
    Toast({message: '该证券不在担保证券池中', duration: 1000})
    return false
  }
  if (data.occur_amount === '' || data.occur_amount < 100) {
    Toast({message: '委托数量必须大于100', duration: 1000})
    return false
  }
  if (data.occur_amount % 100 !== 0) {
    data.occur_amount = data.occur_amount - (data.occur_amount % 100)
    Toast({message: '委托数量必须是100的整数倍', duration: 1000})
    return false
  }
  let template = `<ul class="">
   <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票代码：</p>
      <p class="am-flexbox-item">${data.stock_code}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">股票名称：</p>
      <p class="am-flexbox-item">${data.stock_name}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">信用股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account_crdt}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">普通资金账号：</p>
      <p class="am-flexbox-item">${data.fund_account_comm}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">普通股东账号：</p>
      <p class="am-flexbox-item">${data.stock_account_comm}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">普通席位号：</p>
      <p class="am-flexbox-item">${data.seat_no_comm}</p>
    </li>
    <li class="am-flexbox am-ft-sm am-pt-5">
      <p class="">数量：</p>
      <p class="am-flexbox-item">${data.occur_amount}</p>
    </li>
  </ul>`
  return template
}

// 信用额度 - 调整申请
export const VA285720 = (data) => {
  if (data.fin_apply_quota && data.fin_apply_quota <= 0) {
    Toast({message: '融资额度必须大于零!', duration: 1000})
    return false
  }
  if (data.slo_apply_quota && data.slo_apply_quota <= 0) {
    Toast({message: '融券额度必须大于零!', duration: 1000})
    return false
  }
  if (data.total_apply_quota && data.total_apply_quota <= 0) {
    Toast({message: '信用总额度必须大于零!', duration: 1000})
    return false
  }
  if (data.valid_date === '') {
    Toast({message: '有效日期不能为空', duration: 1000})
    return false
  }
  let template = '信用额度调整,确定要申请吗?'
  return template
}

// 验证开始时间必须小于结束时间
export const VAA001 = (data) => {
  if (data) {
    if (!data.begin_date) {
      Toast({message: '开始时间不能为空', duration: 1000})
      return false
    }
    if (!data.end_date) {
      Toast({message: '结束不能为空', duration: 1000})
      return false
    }
    if (new Date(data.begin_date).getTime() > new Date(data.end_date).getTime()) {
      Toast({message: '开始时间不能大于结束时间', duration: 1000})
      return false
    }
    if (new Date(data.end_date).getTime() - new Date(data.begin_date).getTime() > (30 * 24 * 60 * 60 * 1000)) {
      Toast({message: '时间间隔不能大于一个月', duration: 1000})
      return false
    }
    return true
  }
}
