(function(){
    // //1、原型链继承(少用)
    // function Person(sex){
    //     this.sex = sex
    //     this.do = ['吃']
    // }  
    // console.log(Person.prototype     )

    // Person.prototype.doing = function(){
    //     console.log('我可以' + this.do)
    // }

    // function Chinese(name){
    //     this.name = name
    // }
    
    // Chinese.prototype = new Person('男')

    // let c1 = new Chinese('小杨')
    // let c2 = new Chinese('小轩')
    // c1.sex = '女'
    // c2.sex = '人妖'
    // c1.do.push('睡觉')
    // c1.doing()      //我可以吃，睡觉
    // c2.do.push('玩电脑')
    // console.log(c1.sex)     //女
    // console.log(c2.sex)     //人妖
    // console.log(c1.do)      //["吃", "睡觉", "玩电脑"]
    // console.log(c2.do)      //["吃", "睡觉", "玩电脑"]
    // console.log(c1.constructor)     //function Person

    // console.log("------------------------------------------")     //function Person


    //...不常用的，都有缺陷

    //!!!最常用的-----------------------------------------------------------------------
    function Person(name,age){
        this.name = name
        this.age = age
        this.like = ['睡觉']
    }

    Person.prototype.sayHi = function(){
        console.log('大家好!我叫' + this.name + ',今年' + this.age + '岁,喜欢' + this.like)
    }

    Person.prototype.doing = function(){
        console.log("我是一个人")
    }

    function Student(name,age,level){
        Person.apply(this,[name,age])
        this.level = level
    }


    /**
     * 1、首先创建一个空的Object对象
     * 2、再将这个空对象的__proto__指向Person的prototype
     * 3、最后将这个空对象的__proto__赋值给Student的prototype，即把这个Student的prototype指向这个空对象的__proto__
     */
    Student.prototype = Object.create(Person.prototype)

    Student.prototype.sayHi = function(){
        console.log('大家好!我叫' + this.name + ',今年' + this.age + '岁，我是' + this.level + ',喜欢' + this.like)
    }

    let p1 = new Person("杨文轩",23)
    let s1 = new Student("轩轩国王",6,"小学生")
    let s2 = new Student("xxgw",12,"初中生")
    p1.like.push('敲代码')
    s1.like.push('LOL')
    s2.like.push('谈恋爱')



    p1.sayHi()
    s1.sayHi()
    s2.sayHi()
    p1.doing()
    s1.doing()
    s2.doing()
















})()