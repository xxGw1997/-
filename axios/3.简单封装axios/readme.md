1、XHR:使用XMLHttpRequest对象与服务器交互,允许页面在不影响用户的操作的情况下更新页面的局部内容

2、http请求与ajax请求
    a、ajax请求是一种特别的http请求
    b、在浏览器端有区别，对于服务端而言都是http请求
    c、ajax请求只有XHR或fetch发出的才是ajax请求
    d、一般请求:直接显示响应体数据，例如:刷新/跳转页面
    e、ajax请求：不会对界面进行任何更新操作，只是调用监视的回调函数并传入响应相关数据

3、XHR属性
    a、XMLHttpRequest.onreadystatechange
        当 readyState属性发生变化时调用的EventHandler(事件处理)。
    b、XMLHttpRequest.readyState 只读
        返回 一个无符号短整型（unsigned short）数字，代表请求的状态码。
    c、XMLHttpRequest.responseText 
        在一个请求被发送后，从服务器端返回文本。
    d、XMLHttpRequest.responseType
        返回响应数据的类型，默认为text
    e、XMLHttpRequest.status    只读
        返回了XMLHttpRequest 响应中的数字状态码，在请求完成前是0，如果XMLHttpRequest 请求出错也返回0

4、XHR方法
    a、XMLHttpRequest.abort()
        如果请求已被发送，则立刻中止请求。当一个请求被终止，它的 readyState 属性将被置为0
    b、XMLHttpRequest.open() 
        方法初始化一个请求，
        使用方法:xhrReq.open(method, url, async)
    c、XMLHttpRequest.send() 
        方法用于发送 HTTP 请求

5.GET请求
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/server', true);

    xhr.onload = function () {
        // 请求结束后,在此处写处理代码
    };

    xhr.send(null);
    // xhr.send('string');
    // xhr.send(new Blob());
    // xhr.send(new Int8Array());
    // xhr.send({ form: 'data' });
    // xhr.send(document);

6、POST请求
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/server', true);

    //发送合适的请求头信息
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function () { 
        // 请求结束后,在此处写处理代码 
    };
    xhr.send("foo=bar&lorem=ipsum"); 
    // xhr.send('string'); 
    // xhr.send(new Blob()); 
    // xhr.send(new Int8Array()); 
    // xhr.send({ form: 'data' }); 
    // xhr.send(document);

7、axios特点
    1、基本promise的异步ajax请求
    2、支持请求/响应拦截器
    3、支持请求取消
    4、请求/响应数据转换
    5、批量发送多个请求