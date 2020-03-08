~ function(){
    /*
        循环原始字符串中的每一项
    */
    // function myIndexOf(T){
    //     //=>This:S
    //     let lenT = T.length,
    //         lenS = this.length,
    //         res = -1;
    //     if(lenT>lenS){
    //         return res;
    //     }
    //     for(let i=0;i<lenS-lenT+1;i++){
    //         let char = this[i];
    //         if(this.substr(i,lenT) === T){
    //             res = i;
    //             break;
    //         }
    //     }
    //     return res;
    // }

    /**
     * 正则处理
     */
    function myIndexOf(T){
        //=>This:S
        let reg = new RegExp(T),
            res = reg.exec(this);
        return res === null? -1:res.index;
    }


    String.prototype.myIndexOf = myIndexOf;
}();

let S = "xuanxuanguowang",
    T = "guo";
console.log(S.myIndexOf(T));