const ws = require('nodejs-websocket')

console.log("websocket 开始建立连接...")
const userList = {
    
}
// 创建一个websocket
ws.createServer((server)=>{
    let user = server.path.slice(1)
    var aaa = setInterval(()=>{
        server.sendText('Heartbeat')
    },5000)
    userList[user] = server;
    server.on('text',receivedMsg.bind(server))
    server.on('close',(e) => {
        delete userList[user]
        console.log('=========closed=======')
        clearInterval(aaa)
    })

    server.on('error',(e) => {
        console.log('----error----',e)
    })

}).listen(8001),

console.log('websocket 建立完毕')
function receivedMsg(str){
    if(this.path.slice(1) == '123') {
        if(!userList['456']) {
            this.sendText('对方不在线哦~');
            return;
        }
        userList['456'].sendText(str)
    } else {
        if(!userList['123']) {
            this.sendText('对方不在线哦~');
            return;
        }
        userList['123'].sendText(str)
    }
}


