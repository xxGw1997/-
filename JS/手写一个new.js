~ function(){
    function Dog(name){
        this.name = name;

    }

    Dog.prototype.bar = function(){
        console.log(this.name + "汪汪汪");
    }

    let dog = new Dog("xwy");
    console.log(Dog.prototype);
    console.log(dog);
    dog.bar();
    /**
     * 1、创建一个空的Object对象
     * 2、将this指向这个这个对象
     * 3、执行构造函数
     * 4、返回这个对象
     */
    function _new(fn,...arg){
        let obj = Object.create(fn.prototype);
        Dog.call(obj,...arg);
        return obj;
    }

    let dog1 = _new(Dog,"ywx");
    console.log(dog1)
    dog1.bar();
}();


