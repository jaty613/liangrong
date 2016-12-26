var wilddog = require('wilddog')
var config = {
  syncDomain: "yuecai.wilddog.com",
  syncURL: "https://yuecai.wilddogio.com" //输入节点 URL
};
wilddog.initializeApp(config);
var ref = wilddog.sync().ref("/v1");
ref.on('value', function(snapshot) {
  console.log(JSON.stringify(snapshot.val())); // 这里我们把数据转成 json 格式
});
