<template>
  <section>
    <div class="top-container">
      <h3>水平居中</h3>
      <div class="v1">上</div>
      <div class="v2">
        <div class="inner">内部</div>
      </div>
      <div id="app">
          <h1>{{song}}</h1>
          <p>《{{album.name}}》是{{singer}}2005年11月发行的专辑</p>
          <p>主打歌为{{album.theme}}</p>
          <p>作词人为{{singer}}等人。</p>
          为你弹奏肖邦的{{album.theme}}
      </div>
    </div>
  </section>
</template>

<script>
// class Routers{
//   constructor(){
//     this.routes = {};
//     this.currentUrl = '';
//     this.refresh = this.refresh.bind(this);
//     window.addEventListener('load',this.refresh,false);
//     window.addEventListener('haschange',this.refresh,false);
//   }
//   route(path,callback){
//     this.routes[path] = callback || function(){console.log('--')};
//   }
//   refresh(){
//     this.currentUrl = location.hash.slice(1)||'/';
//     this.routes[this.currentUrl] &&this.routes[this.currentUrl]();
//   }
// }
// const context = document.getElementById('router');
// function changeBgColor(color) {
//   console.log(color)
//   context.style.backgroundColor = color;
// }
// window.Router = new Routers();
// Router.route('/',function(){changeBgColor('blue')});
// Router.route('/pink',function(){changeBgColor('pink')});
// Router.route('/green',function(){changeBgColor('green')});



// class Routers2 {
//   constructor(){
//     this.routes = {};
//     this._bindState();
//   }
//   init(path) {
//     history.replaceState({path:path},null,path)
//     this.routes[path] && this.routes[path]();
//   }
//   route(path ,callback){
//     this.routes[path] = callback || function(){}
//   }
//   go(path){
//     history.pushState({path:path},null,path);
//     this.routes[path] && this.routes[path]();
//   }
//   _bindPopState(){
//     window.addEventListener('popstate',e=>{
//       const path = e.state && e.state.path;
//       this.routes[path] && this.routes[path]();
//     })
//   }
// }
export default {

  name: 'vetically',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scope>
  .el-alert-gray-info{
    background-color: rgb(249,249,249);
    color:black;
  }
  #router {
    width:200px;
    height:200px;
    .lightblue {
      background-color: lightblue;
    }
   .lightpink {
      background-color: lightpink;
    }
    .lightgreen {
      background-color: lightgreen;
    }
  }
  .ele-float-right {
    float:right;
    margin-left: 10px;
  }
  .top-container {
    padding:10px 0;
  }
  .pagenation-block {
    padding: 10px 10px;
    overflow:hidden;
  }
  .v1 {
     margin:10px;
    padding:15px;
    width:100px;
    height:100px;
    background-color:lightgreen;
  }
  .v2 {
    margin:15px;
    width:100px;
    height:100px;
    background-color:lightblue;
    
  }
  .inner {
      margin:10px;
      width:40px;
      height:40px;
      background-color:lightgray;
  }
</style>