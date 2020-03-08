"use strict";
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log("\u4F60\u597D\u6211\u662F" + this.name);
    };
    Person.fly = function () {
        console.log('Person can not fly');
    };
    return Person;
}());
var p = new Person('轩轩国王');
p.run();
Person.fly();
