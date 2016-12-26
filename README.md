# liangrong

> 两融项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

No binary for PhantomJS browser on your platform.   Please, set "PHANTOMJS_BIN"
解决方案：
(sudo ) npm install karma-phantomjs-launcher   即可解决此问题

#Nginx 管理
nginx -s reload|reopen|stop|quit

#减少请求数请开启nginx的 combo 功能
    nginx 第三方模块combo 需要配置 参考:
#前端页面引用 PS:
<link rel="stylesheet" href="//g.hundsuncdn.com/msui/sm/0.6.2/css/??sm.min.css,sm-extend.min.css">
<script type='text/javascript' src='//g.hundsuncdn.com/msui/sm/0.6.2/js/??sm.min.js,sm-extend.min.js' charset='utf-8'></script>




