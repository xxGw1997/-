(function(){
    //1、typeof
    console.log(typeof "");             //string
    console.log(typeof 1);              //number
    console.log(typeof true);           //boolean
    console.log(typeof null);           //object
    console.log(typeof undefined);      //undefined
    console.log(typeof []);             //object   引用类型只能判断出是object，无法判断具体类型
    console.log(typeof function(){});   //function
    console.log(typeof {});             //object


    //2、instanceof
    console.log("1" instanceof String);             //false
    console.log(1 instanceof Number);               //false
    console.log(true instanceof Boolean);           //false
    console.log(new String('1') instanceof String);             //true
    console.log(new Number(1) instanceof Number);               //true
    console.log(new Boolean(true) instanceof Boolean);           //true
    //console.log(null instanceof Null);              //false
    //console.log(undefined instanceof Undefined);    //false
    console.log([] instanceof Array);               //true
    console.log(function(){} instanceof Function);  //true
    console.log({} instanceof Object);              //true
})()