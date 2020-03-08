class Person{
    name:string
    constructor(n:string){
        this.name = n
    }

    run():void{
        console.log(`你好我是${this.name}`)
    }

    static fly(){
        console.log('Person can not fly')
    }
}

let p = new Person('轩轩国王')
p.run()
Person.fly();