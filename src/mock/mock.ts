import Mock from 'mockjs';

function loginFun(prarms: any) {
    const prarmsObj = JSON.parse(prarms.body);
    let sendObj = {
        "errno": 0,
        "errmsg": "获取权限成功",
        "result": [
            {
                "path": "/home",
                "name": "首页",
                "component": "home",
                "children": [
                    {
                        "path": "/home/index",
                        "name": "首页",
                        "component": "index",
                        "isShow": true
                    }
                ]
            }
        ]
    }
    if (prarmsObj.token == 'front') {
        sendObj.result[0].children.push(
            {
                "path": "/home/addAdverse",
                "name": "地址",
                "component": "addAdverse",
                "isShow": true
            },
            {
                "path": "/home/change",
                "name": "嫦娥",
                "component": "change",
                "isShow": true
            }
        )
    } else if (prarmsObj.token == 'admin') {
        sendObj.result[0].children.push(
            {
                "path": "/home/about",
                "name": "关于",
                "component": "about",
                "isShow": true
            },
            {
                "path": "/home/zhaoxin",
                "name": "赵信",
                "component": "zhaoxin",
                "isShow": true
            }
        )
    } else {
        sendObj.errno = 1
        sendObj.errmsg = '没有此用户'
        
    }
    return sendObj
}

Mock.mock('/api/login', 'post', loginFun); //登录