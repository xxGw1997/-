(function(){
    function ajax(method,url,data){
        return new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(200)
                    }else{
                        reject(xhr.starus)
                    }
                }else{
                    reject("请求失败")
                }
            }
            xhr.open(method,url)
            xhr.send()
        })
    }


    let p = ajax("get",'www.baidu.com')
    p.then(resolve=>{
        console.log(resolve)
    }).catch(reason=>{
        console.log(reason)
    })

})()