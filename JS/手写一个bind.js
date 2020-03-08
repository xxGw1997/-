(function(){
    function myBind(context = window,...outerArg){
        let _this = this;
        console.log("outer:" + Array.from(outerArg));
        return function(...innerArg){
            console.log("innerArg:" + Array.from(innerArg));
            _this.call(context,...outerArg.concat(innerArg));
        }
    }
    Function.prototype.myBind = myBind;
})();

let obj = {name:"obj"};

function fn(...arg){
    console.log(this,arg);
};
document.body.onclick = fn.myBind(obj,100,200);

// document.body.onclick = function(ev){
//     console.log(ev);
// }