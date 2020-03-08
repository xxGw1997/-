(function(){
    let xhr = new XMLHttpRequest()
    let response
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status==200){
            response = xhr.responseText
        }else{
            response = 'failed'
        }
    }
    xhr.open("get","www.baidu.com")
    xhr.send()
    console.log(response)

})()