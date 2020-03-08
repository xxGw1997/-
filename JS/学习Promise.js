/**
 * Promise是什么？
 * ！Promise是Js中进行异步编程的新的解决方案(旧的是使用纯回调的形式)
 *      从语法上来说:Promise是一个构造函数
 *      从功能上莱说:promise对象用来封装一个异步操作并可以获取其结果
 * 
 * ！promise的状态改变
 *      pending:进行中、未确定
 *      resolve:成功
 *      rejecte:失败
 *  只能从pending->resolve  和  pending->reject
 *      一个promise对象只能改变一次
 */

 //Promise基本使用
    const p = new Promise((resolve,reject)=>{
        //使用定时器模拟异步操作
        setTimeout(() => {
            const now = Date.now()
            if(now%2==0){
                //成功时执行resolve
                resolve("现在时间:"+ now)
            }else{
                //失败则执行reject
                reject("现在时间:" + now)
            }
        }, 1000);
    })

    //使用promise实例调用then()去执行异步操作
    /*p.then(
        value=>{ //成功时
        console.log(value + " 偶数")
    },
        reason=>{//失败时
        console.log(reason + " 奇数")
    })*/


    const p1 = new Promise((resolve,reject)=>{
        reject(2)
        //resolve(1)
    })

    const p2 = Promise.resolve(2)

    const p3 = Promise.reject(3)

    const pAll = Promise.all([p1,p2,p3])
    pAll.then(
        value=>{
            console.log("成功:" + value)
        },
        reason=>{
            console.log("失败:" + reason)
        }
    )