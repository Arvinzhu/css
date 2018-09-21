<template>
  <section>
    <div class="top-container">
      <h3>horizonrally</h3>
      <hr>
      <div class="v1">
        <span>单个内联元素:Lorem ipsum dolor sit amet.</span>
      </div>
      <div class="v2">
        <p class="center">单个块级元素</p>
      </div>
      <div class="v3">
        <ul class="center-ul">
          <li class="center-li">多个块级元素</li>
          <li class="center-li">块1</li>
          <li class="center-li">块2</li>
          <li class="center-li">块3</li>
        </ul>
      </div>
      <div class="v4">
        <ul class="flex-ul">
          <li class="flex-li ">Lorem ipsum dolor sit amet.</li>
          <li class="flex-li ">Autem sint dolore, est eligendi.</li>
          <li class="flex-li ">Facilis repellat distinctio, explicabo dicta?,Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </ul>
      </div>
      <div class="v5">
        <h3> 几个导航栏</h3>
        <ul class="flex-ul-b">
          <li class="flex-li"><i class="fa fa-behance fs-3x"></i></li>
          <li class="flex-li" >Bootstrap</li>
          <li class="flex-li" >Ipsum.</li>
          <li class="flex-li" >Lorem.</li>
          <li class="flex-li" >Visit</li>
        </ul>
        <ul class="flex-ul-a">
          <li class="flex-li"><i class="fa fa-buysellads fs-3x"></i></li>
          <li class="flex-li">Lorem.</li>
          <li class="flex-li">Help</li>
          <li class="flex-li">SignUp</li>
          <li class="flex-li">Login</li>
        </ul>
        <ul class="flex-ul-t">
          <li class="flex-li">Home</li>
          <li class="flex-li">Notification</li>
          <li class="flex-li">Message</li>
          <li class="flex-li"><i class="fa fa-twitter fs-3x"></i></li>
 
          <li class="flex-li"><input type="text"><button>Search</button</li>
          <li class="flex-li"><img src="./../../assets/timg.jpg" /></li>
           <li class="flex-li"><button>TwitterPC</button></li>
        </ul>
        </div>
      </div>
      <div class="v6">
        <div class="child0">
        若子元素包含 float 属性, 为了让子元素水平居中, 则可让父元素宽度设置为fit-content,并且配合margin
        </div>
      </div>
      <div class="v7">
        <div class="child0">
        使用transform使得子元素垂直居中
        <code>transform:translate(-50%,0)</code>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'horizonrally',
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

<style scope lang="scss">
.v1 {
    text-align: center; 
}
.v2 {
  .center {
    width:200px;
    border:1px solid lightgray;
    margin:0 auto;
  }
}
.v3 {
  .center-ul {
    width:50%;
    text-align:center;
    border:1px solid lightgreen;
    margin:0 auto;
    .center-li {
      display:inline-block;
      border-left:1px solid lightgray;
    }
    :first-child  {
      border-left: none;
    }
  }
}
.v4 {
  .flex-ul {
    display:flex;
    list-style:none;
    // flex: 0 1 auto;
    // flex: none;
    // justify-content: flex-start;
    // align-items: baseline;//stretch,flex-end,flex-start,baseline
    // flex-wrap: wrap;
    // align-content: flex-start;
    // flex-grow: 1;
    // flex-shrink: 1;
    .flex-li {
      margin: 5px;
      border:1px solid lightgray; 
      // flex-grow:0;
      // flex-shrink:1;
      flex: 0 0 auto;
    }
    li:nth-child(1) {
      margin-right: auto;
    }
    .flex1{
      flex:1;
    }
    .flex2{
      flex:2;
    }
    .flex3{
      flex:3;
    }
    .flex4{
      flex:4;
    }
  }
}
.v5 {
  .flex-ul-b {
    margin-top:20px;
    display: flex;
    list-style:none;
    .flex-li {
      flex:0 0 auto;
      border:1px solid lightgreen;
      padding:0 10px;
    }
    :first-child {
      margin-left:10px;
      margin-right:auto;
    }
  }
  .flex-ul-a {
    margin-top:20px;
    display: flex;
    list-style:none;
    .flex-li {
      flex:0 0 auto;
      border:1px solid lightgreen;
      padding:0 10px;
    }
    :first-child {
      margin-left:10px;
      margin-right:auto;
    }
  }
  .flex-ul-t {
    margin-top:20px;
    display: flex;
    align-items : baseline;
    list-style:none;
    .flex-li {
      flex:0 0 auto;
      border:1px solid lightgreen;
      padding:0 10px;
      line-height:40px;
      
      img {
        height:40px;
        width:40px;
        border-radius:50%;
        margin-bottom:-15px;
        padding:0;
      }
    }
    :nth-child(1) {
      // padding-left:100px;
    }
    :nth-child(4) {
      text-align:center;
      flex:3;
    }
    :nth-child(6) {
      margin:0 auto!important;
    }
  }
  
}
.v6 {
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width:fit-content;
    margin:0 auto;
    border:1px solid lightgray;
    overflow:hidden;
    .child0 {
      float:right;
    }
}
.v7 {
  position: relative;
  border:1px solid lightgray;
  // overflow:hidden;
  .child0 {
    position:absolute;
    left:50%;
    transform:translate(-50%,0);
  }
}
</style>