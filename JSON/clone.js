//深拷贝与浅拷贝
//1.深拷贝：比如对一个对象进行拷贝，对象中的基本数据类型是将值拷贝过来，对象属性和数组等
//属性则是新创建一个对应相同的对象属性和数组，修改对象中的属性或者数组后，两者互不影响
//2.浅拷贝：比如对一个对象进行拷贝，对象中的基本数据类型是将值拷贝过来，而对象属性和数组则
//是将原来对象中的对象地址和数组的地址进行拷贝，即进行拷贝后的对象和数组指向的是同一个
//修改其中的值，会对双方都造成影响

//SSS、最简单的深拷贝（能解决99%的深拷贝问题，但是还是有缺陷）
let data = {name:'xxGw',gender:'male',hobbys:['play','sleep','music']}
let dataClone = JSON.parse(JSON.stringify(data))
console.log("data:",data)
console.log("dataClone:",dataClone)
console.log("data[hobbys] === dataClone[hobbys] ?",data.hobbys === dataClone.hobbys)
//false



//SSS、浅拷贝
function lowClone(target){
    let cloneTarget = {}
    for(const key in target){
        cloneTarget[key] = target[key]
    }
    return cloneTarget
}

let lowCloneData = lowClone(data)
console.log("data:",data)
console.log("lowCloneData:",lowCloneData)
console.log("data[hobbys] === lowCloneData[hobbys] ?",data.hobbys === lowCloneData.hobbys)
//true


//SSS、深拷贝进阶
/**深拷贝是只要对基本类型直接赋值返回，引用类型则创建一个新对象(数组)，进行对其深度遍历
 * 直到其是基本类型再依次添加到该新对象(数组)上
 */
function deepClone(target,map=new WeakMap()){
    if(typeof target === 'object'){
        let cloneTarget = Array.isArray(target)?[]:{}   //根据数组或者对象进行创建
        if(map.get(target)){
            //开辟一个新的内存空间来进行存储是否已经被拷贝过的对象，可以解决拷贝引用陷入死循环,
            //并且WeakMap的key是弱引用，以防内存溢出
            return map.get(target)
        }
        map.set(target,cloneTarget)
        const keys = Array.isArray(target) ? undefined : Object.keys(target)
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value
            }
            cloneTarget[key] = deepClone(target[key], map)
        })
        return cloneTarget
    }else{
        return target
    }
}
