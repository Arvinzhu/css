class EventEmeitter {
  constructor(){
    this._events = this._events || new Map()
    this._maxListener = this._maxListener || 10
   
  }
  addEventListener(type,fn){
    if(typeof fn !== 'function') return;
    let handle = this._events.get(type)
    if(!handle){
      this._events.set(type,fn);
    }else {
      if(Object.prototype.toString.call(handle) === '[object Array]'){
        handle = handle.push(fn);
      }else{
        handle = [handle,fn];
      }
      this._events.set(type,handle);
    }
  }
  removeEventListener(type,fn){
    if(typeof fn !== 'function') return;
    let handle = this._events.get(type)
    if(handle && typeof handle === 'function'){
      if(fn === handle){
        this._events.delete(type);
      }
    }else{
      let idx = handle.indexOf(fn);
      if(idx > -1){
        handle.splice(idx,1)
        if(handle.length === 1){
          handle = handle[0]
        }
      }else{
        return this;
      }
    }
  }
  emitter(type,...args){
    let handle = this._events.get(type);
    if(handle && typeof handle === 'function'){
      if(args.length>0){
          handle.apply(this,args)
        }else{
          handle.call(this)
        }
    }else if (handle && Object.prototype.toString.call(handle) === '[object Array]'){
      for(let item of handle){
        if(args.length>0){
          item.apply(this,args)
        }else{
          item.call(this)
        }
      }
    }
    return true;
  }

}

const emitter = new EventEmeitter();
console.log(emitter);
function name(name){console.log('-name--"+name+"---')}
function age(age){console.log('--age-"+age+"---')}
emitter.addEventListener('test-demo',name);

emitter.addEventListener('test-demo',age);
console.log(emitter);
emitter.emitter('test-demo');

emitter.removeEventListener('test-demo',name)
console.log('----------------------------------')
emitter.emitter('test-demo');
emitter.removeEventListener('test-demo',age)
console.log('----------------------------------')