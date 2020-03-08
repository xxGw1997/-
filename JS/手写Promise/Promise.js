class _Promise{
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(executor){
        this.status = _Promise.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor(this.resolve.bind(this),this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(value){
        if(this.status === _Promise.PENDING){
            this.status = _Promise.FULFILLED;
            this.value = value;
            setTimeout(() => {
                this.callbacks.map(callbacks=>{
                    callbacks.onFulfilled(value);
                });
            });
        }
    }

    reject(reason){
        if(this.status === _Promise.PENDING){
            this.status = _Promise.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.map(callbacks=>{
                    callbacks.onRejected(reason);
                });
            });
        }
    }

    then(onFulfilled,onRejected){
        if(typeof onFulfilled != 'function'){
            onFulfilled = () => this.value;
        }

        if(typeof onRejected != 'function'){
            onRejected = () => this.value;
        }
        let promise = new _Promise((resolve,reject)=>{
            if(this.status === _Promise.PENDING){
                this.callbacks.push({
                    onFulfilled:value=>{
                        parse(promise,onFulfilled(value),resolve,reject);
                    },
                    onRejected:value=>{
                        parse(promise,onRejected(value),resolve,reject);
                    }
                });
            }
    
    
            if(this.status === _Promise.FULFILLED){
                setTimeout(() => {
                    parse(promise,onFulfilled(this.value),resolve,reject);
                });  
            }
    
            if(this.status === _Promise.REJECTED){
                setTimeout(() => {
                    parse(promise,onRejected(this.value),resolve,reject);
                });
            }
        });
        return promise;
    }

    parse(promise,result,resolve,reject){
        if(promise===result){
            throw new TypeError('Chaining cycle detected');
        }
        try {
            if(result instanceof _Promise){
                result.then(resolve,reject);
            }else{
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    }

    static resolve(value){
        return new _Promise((resolve,reject)=>{
            if(value instanceof _Promise){
                value.then(resolve,reject);
            }else{
                resolve(value);
            }
        });
    }

    static reject(value){
        return new _Promise((resolve,reject)=>{
            reject(value);
        });
    }

}