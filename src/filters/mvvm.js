function Mvvm(options = {}) {
  this.$options = options;
  let data = this._data = this.$options.data;
  observe(data)
  for(let key of data){
    Object.defineProperty(this,key,{
      configurable: true,
      get() {
        return this._data[key];
      },
      set(newVal) {
        this._data[key] = newVal;
      }
    })
  }
}

function Observe(data){
  for(let key in data){
    let val = data[key];
    observe(val);
    Object.defineProperty(data,key,{
      configurable: true,
      get() {
        return val;
      },
      set(newVal) {
        if(val === newVal){
          return ;
        }
        value = newVal;
        console.log('old Value',value,' new value ',newVal)
        observe(newVal)
      }
    })
  }
}
function observe(data){
  if(!data || typeof data !== 'object') return;
  return new Observe(data);
}


