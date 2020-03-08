(function(){
    function Person(){
        this.name = '小轩'
        this.age = '23'
    }
    Person.prototype.sayHi = function(){
        console.log('我是' + this.name)
    }

    let p1 = new Person()

    let p2 = new Person()

    p2.name = '小李'
    p2.sayHi = function(){
        console.log('我是' + this.name)
    }

    p1.sayHi()
    p2.sayHi()
    console.log(Person)
    console.log(p1)
    console.log(p2)
    console.log(p1.name)
    console.log(p1.age)
    console.log(p2.name)
    console.log(p2.age)
    console.log(p1.sayHi === p2.sayHi)
    console.log(p1.age === p2.age)
    console.log(p1.name === p2.name)
    console.log("--------------------")
    function foo(){}
    foo.prototype = {
    foo_prop: "foo val"
    };
    function bar(){}
    var proto = {
    bar_prop: "bar val",
    __proto__: foo.prototype
    };
    bar.prototype = proto;
    var inst = new bar;
    console.log(inst.foo_prop);
    console.log(inst.bar_prop);

})()