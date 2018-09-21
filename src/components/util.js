

let objectIs = function() {
  if(!Object.is){
    Object.is = function(x,y){
      if( x === y ){
        return x !==0 ||1/x === 1/y;
      } else {
        return x !== x && y !== y;
      }
    }
  }
  return Object.is;
}
function fun(n,o){
  console.log(o);
  return {
    fun: function(m){
      return fun(m,n);
    }
  };
}

// var a = fun(0);  // ?
// console.log(a);
// console.log(a.fun(1));        // ?        
// console.log(a.fun(2));        // ?
// console.log(a.fun(3));        // ?
// console.log('--------------')
// var b = fun(0).fun(1).fun(2).fun(3);  // ?
// console.log(b);
// console.log('-------------------')
// var c = fun(0).fun(1);  // ?
// console.log(c);
// console.log(c.fun(2));        // ?

// console.log(c.fun(3));        // ?

function Foo() {
    getName = function () { console.log(1); };//非严格模式下，这里添加了隐式全局变量
    return this;
}
Foo.getName = function () { console.log(2);};
Foo.prototype.getName = function () { console.log(3);};
var getName = function () { console.log(4);};
function getName() { console.log(5);}

//请写出以下输出结果：
// Foo.getName();//2
// getName();//4
// Foo().getName();//1   
// getName();//1


// new Foo.getName();//2 
// new Foo().getName();//3 
// new new Foo().getName();//3 


//实例
// const throttleExample  = throttle(() => console.log(1), 1000);
//调用
// throttleExample();
// throttleExample();
// throttleExample();
//函数防抖
const debouce = (fun, delay) => {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun();
        }, delay);
    }
}
//实例
const debouceExample = debouce(() => console.log(1), 1000);
//调用
// debouceExample();
// debouceExample();
// debouceExample();

// Function.prototype.call2 = function(context){
//   context = context || window;
//   let bake = context.fn === undefined? undefined :context.fn ;
//   context.fn = this;
//   let args = [],result;
//   for(var i =1 ,len = arguments.length;i<len;i++){
//     args.push('arguments['+i+']')
//   }
//   let str = args.join(',')
//   result = eval('context.fn('+str+')');
//   if(bake !== undefined){
//     context.fn =bake
//   }else{
//     delete context.fn
//   }
//   return result;
// }
// Function.prototype.apply2 = function(context,arr){
//   conetxt = context || window;
//   let bake = context.fn === undefined? undefined :context.fn ;
//   let  result;
//   context.fn = this;
//   if(!arr){
//     result = context.fn();
//   }else {
//     let args = [];
//     for(let i =0,len=arr.length;i<len;i++){
//       args.push('arr['+i+']')
//     }
//     result = eval('context.fn('+args +')')
//     if(bake !== undefined){
//       context.fn =bake
//     }else{
//       delete context.fn
//     }
//     return result
//   }
// }

// Function.prototype.call2 = function(context) {
//     context.fn = this;
//     var args = [];
//     for(var i = 1, len = arguments.length; i < len; i++) {
//         args.push('arguments[' + i + ']');
//     }
//     eval('context.fn(' + args +')');
//     delete context.fn;
// }

// // bar.call2(obj,'arvin',123);
// Function.prototype.bind2 = function(context){
//   if (typeof this !== "function") {
//     throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
//   }
//   let fn = this;
//   let slice = Array.prototype.slice;
//   let args = slice.call(arguments,1);
//   let fBound =  function(){
//     return fn.apply( this instanceof fBound? this : context, args.concat(slice.call(arguments,0)))
//   }
//   // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
//   //但是在这个写法中，我们直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候
//   fBound.prototype = this.prototype
//   return fBound;
// }
(function (){
function ProxyDemo(name,age) {
  this.name = name
  this.age = age
  return 'I am the target';
}
var functionHandler = {
  apply: function() {
    console.log('func apply:')
  }
}
var objectHandler = {
  get: function(target,prop){
    console.log('obj get:'+prop)
    return target[prop];
  },
  set: function(target,prop,value){
    console.log('obj set:'+prop)
    if( prop === 'name'){
      if(value && typeof value === 'string'){
        target[prop] = value
      }else {
        throw new Error(' invalid name');
      }
    }else if (prop === 'age'){
      value = parseInt(value)
      if( value >0 && value <=100){
        target[prop] = value
      }else {
        throw new Error('invalid age value');
      }
    }else {
      throw new Error('can not find prop');
    }
  }
}
// var demo = new ProxyDemo('arvin',18)
// var objProxy = new Proxy(demo,objectHandler)
// console.log(objProxy.name)
// objProxy.age = 50
// console.log(objProxy.age)
// objProxy.age = '50'
// var funcProxy = new Proxy(ProxyDemo, functionHandler)
// funcProxy();

// 执行结果:
// obj get:name
// arvin
// obj set:age
// obj get:age
// 50
// obj set:age
// func apply:

const queueObservers = new Set();
const observe = fn => queueObservers.add(fn)
const observable = obj => new Proxy(obj,{set})

function set(target, key , value, recevier) {
  const result = Reflect.set(target,key, value,recevier)
  queueObservers.forEach(observer => observer());
  return result;
}
function print() {
  console.log(`${person.name}, ${person.age}`);
}
observe(print)
const obj = {
  name:"张三",
  age:18
}
// const person = observable(obj)
// obj.name = 'arvin'
// console.log(obj);
// person.name = 'lisi'
// console.log(obj);
//函数去抖,防抖动技术就是把触发非常频繁的事件合并成一次执行。
//场景：浏览器的resize 、scroll
function debounce1(fn ,delay) {
  let timer;
  return function() {
      var context = this
      var args = arguments
      clearTimeout(timer)
      timer = setTimeout(function (){
        fn.apply(context, args); 
      },delay);
  }
}
// window.addEventListener('scroll',debounce1(resizeFn,1000))
function resizeFn(){
  console.log('scroll')
}

// window.addEventListener('scroll',resizeFn)


//函数节流
  function  throttler1(fn ,threshhold){
    var last,timer;
    threshhold = threshhold || 300
    return function(){
      var context = this;
      var args = arguments;
      var now = +new Date().getTime();
      if(last  && now < last + threshhold){
        clearTimeout(timer);
        timer = setTimeout(function(){
          last = now;
          fn.apply(context,args)
        },threshhold)
      }else {
        last = now
        fn.apply(context,args)
      }
    }
  }
})();

(function(){
function object(o){
  function F(){};
  F.prototype = o
  return new F()
}
function extend(parent,child) {
   var proto = object(parent.prototype);
   proto.constructor = child;
   child.prototype = proto;
}
function Person(name){
  this.name = name
}
function Student(name,score) {
  Person.call(this,name)
  this.socre = score
}
// var person = new Person('arn');
extend(Person,Student)
var student = new Student('arv',100)
console.log(student.name)
})();










function Person(name){
  console.log('person constructor')
  this.name = name
}
function Student(name,score){
  Person.call(this,name)
  console.log('student constructor')
  this.score = score
}
//创建子类的时候父类也会创建
// Student.prototype = new Person()
// Student.prototype.constructor = Student

// let st1 = new Student('arv',18)

// let st2 = new Student('arc',20);
// console.log(st1,st2);

// Student.prototype = Person.prototype
// Student.prototype.constructor = Student

function extend(parent,child){
  if(Object.create){
    var proto = Object.create(parent.prototype);
    proto.constructor = child;
    child.prototype = proto;
    return;
  }
  function F(){};
  F.prototype = parent.prototype
  var proto = new F()
  proto.constructor = child;
  child.prototype = proto
}

// extend(Person,Student)
// let st1 = new Student('arv',18)
// let st2 = new Student('arc',20);
// console.log(st1,st2);
// console.log( st1 instanceof Person)
// console.log(Object.getPrototypeOf( st1 ) )
// console.log(Person.prototype.isPrototypeOf( st2 ) )
// st1.name = "arv2";
// console.log(st2.name)


(function(){

let arr = [9,7,6,1,2,3,4,5]
let funcArr = [];

//最大元素
Math.max.apply(null,arr);
//arr.reduce(function(max,value) {return Math.max(max,value)},arr[0])
// //转化为function数组
  for(var i of arr){
    var func = (function(i){
      return function(){
        console.log(i)
      }
    })(i);
    funcArr.push(func);
  }

//Fibonacci数
function fibonacci(n){
  function fib(n ,c1 ,c2){
    arr.push(c1)
    if(n <= 1){
      return c2;
    } 
    return fib(n-1,c2 ,c1+c2);
  }
  let arr = [];
  fib(n,1,1);
   return arr;
}
// 实现如下语法的功能：var a = (5).plus(3).minus(6); //2
// console.log(fib(6));//1 1 2 3 5 8 
Object.prototype.plus = function (n){
  return (this + n)
}
Object.prototype.minus = function (n){
  return (this - n)
}
// console.log((5).plus(3).minus(6))
//实现如下语法的功能：var a = add(2)(3)(4); //9
var args = [];
function add(){
  args = args.concat(Array.prototype.slice.call(arguments,0));
  console.log(args)
  if(args.length < 3){
    return add;
  }else {
    return args.reduce((total,value)=> total+value,0)
  }
}
// console.log(add(2)(3)(4))
})()


var arr1 = [
'123456789012345678901234567890',
'123456789012345678901234567890',
'123456789012345678901234567890',
'1'
];
var arr = [];
for(let a of arr1){
   arr.push((a).toString().split('').reverse().map((value)=>{return parseInt(value);}));
}

// }
// bigAdd(arr);
function bigAdd(arr){
    let sum = [],maxLen =0;
    for(let subArr of arr ){
        maxLen = subArr.length>maxLen? subArr.length:maxLen;
    }
    var i = 0;
    var last = 0;
    while(i<maxLen){
        let temp=0;
        for(let sub of arr){
            if(sub.length <= i){
                continue;
            }else{
                temp +=sub[i]+last; 
                last = 0;
            }
        }
        if(temp >=10){
            sum.push(temp%10);
            last = Math.floor(temp/10);
        }else{
            sum.push(temp%10)
        }
        i++;
    }
    return sum.reverse().join('')
}



var arrP = [
'5021',
'502104 198803',
'5021041988033084',
'502104198803308324',
]
for(let item of arrP){

  var st = item.split().map((value)=>( value ===' '?'':value)).join()
  console.log(getPart(st));
}
function getPart(string){
   if (string.length <= 6) {
        return string;
  } else if (string.length > 6 && string.length <= 14) {
       return string.substring(0, 6) + ' ' + string.substring(6);
  } else if (string.length > 14) {
      return string.substring(0, 6) + ' ' + string.substring(6, 14) + ' ' + string.substring(14);
  }
}




















