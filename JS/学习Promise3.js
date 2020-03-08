(function(){
    function multiply(input){
        return new Promise((resolve,reject)=>{
            console.log('计算:' + input + 'x' + input + '=' + (input * input))
            //setTimeOut 第三个参数代表是第一个参数回调函数的参数
            setTimeout(resolve, 500,input * input);
        })
    }

    function add(input){
        return new Promise((resolve,reject)=>{
            console.log('计算:' + input + '+' + input + '=' + (input + input))
            //setTimeOut 第三个参数代表是第一个参数回调函数的参数
            setTimeout(resolve, 500,input + input);
        })
    }

    const p = new Promise((resolve,reject)=>{
        console.log('开始计算')
        setTimeout(() => {
            resolve(20)
            
        }, 2000);
    })

    p.then(multiply).then(add).then(result =>{console.log(result)})


})()