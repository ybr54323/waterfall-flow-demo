

Function.prototype.__bind = function (ctx, ...args1) {
    if (!ctx) ctx = {};
    const func = this;
    function tem() { };

    tem.prototype = Object.create(this.prototype);
    const result = function (...args2) {
        return func.apply(this instanceof tem ? this : ctx, [...args1, ...args2]);
    }

    result.prototype = tem.prototype;
    return result;
}

function Parent(name, age) {
    this.name = name
    this.age = age
}
Parent.prototype.pfunc = function () {
    console.log(this.name)
}
var func = function () {
    console.log(this.name, this.age);
}
var tem = { name: 'test', age: '10das' };
const bound = Parent.__bind(null, 1, 2)
var a = new bound();

console.log(a)
a.pfunc()
