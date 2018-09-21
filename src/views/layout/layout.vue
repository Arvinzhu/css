<template>
  <section>
    <div class="top-container">
      <h3>圣杯布局:左右两边宽度为百分比</h3>
      <div class="layout1">
        <div class="l-header border"><h4>Header</h4></div>
        <div class="l-main">
          <div  class="child-left  bg-color-gray"><h4>Left</h4></div>
          <div class="child-center" ><h4>Center</h4></div>
          <div class="child-right  bg-color-gray"><h4>Right</h4></div>
        </div>
        <div class="l-footer border"><h4>Footer</h4></div>
      </div>
      <h3>另一种圣杯布局，左有两边宽度为固定值</h3>
      <p>tips：当浏览器宽度缩短到一定程度的时候，会使得中间子元素的宽度比左右子元素宽度小的时候，这时候布局就会出现问题。所以首先，这提示了我们在使用圣杯布局的时候一定要设置整个容器的最小宽度。当然，为了解决这个问题，就有了双飞翼布局</p>
      <div class="layout2">
          <div class="header border">header</div>
          <div class="wrapper clearfix">
              <div class="main col">main</div>
              <div class="left col bg-color-gray">left</div>
              <div class="right col bg-color-gray">right</div>
          </div>
          <div class="footer border">footer</div>
      </div>
      <h3>双飞翼布局</h3>
      <div class="layout3">
        <div class="header "><h4>Header</h4></div>
        <div class="container border">
            <div class="mainer ">
              <div class="center"><h4>Center测试卷搜狐四</h4>
              </div>
            </div>
            <div  class="left bg-color-gray"><h4>Left</h4></div>
            <div class="right bg-color-gray"><h4>Right</h4></div>
        </div>
        <div class=" footer border"><h4>Footer</h4></div>
      </div>
      <hr>
      <div class="layout4">
        <div class="header border"><h4>Header</h4></div>
        <div class="container">
            <div class="middle-container">
                <div class="middle">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
            </div>
            <div class="left">left</div>
            <div class="right">right</div>
        </div>
        <div class=" footer border"><h4>Footer</h4></div>
      </div>
    </div>
    <div class="layout5">
       <div class="header border"><h4>Header</h4></div>
       <div class="container">
          <div class="middle-container">
              <div class="middle">测试测试测试试测试测试test</div>
          </div>
          <div class="left">left</div>
          <div class="right">right</div>
      </div>
      <div class="footer border"><h4>Footer</h4></div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'layout',
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
.bg-color-gray {
  background-color: lightgray;
 }
.bg-color-blue {
  background-color: lightblue;
}
.border {
  border:1px solid green;
}
.top-container {
  padding:10px 0;
}
.layout1 {
  width:100%;
  height:400px;
  .l-header {
    height:60px;
    line-height:60px;
  }
  .l-main {
    height:200px;
    overflow:hidden;
    .child-left {
      width:15%;
    }
    .child-center {
      width: 70%;
      background-color: lightblue;
    }
    .child-right {
      width:15%;
    }
    .child-left, .child-center, .child-right {
      padding-bottom: 9999px;
      margin-bottom: -9999px;
      overflow:hidden;
      float:left;
    }
  }
  .l-footer {
    height:80px;
    width:100%;
    bottom:0;
  }
}
.layout2 {
  width:100%;
  margin:10px auto;
  .header,.footer {
    height:60px;
  }
  .wrapper {
    padding: 0 100px 0 100px;
    height:300px;
    overflow:hidden;
    .col {
      position: relative ;
      float:left;
    }
    .main{
      width:100%;
    }
    .left {
      width:100px;
      margin-left:-100%;
      left:-100px;
    }
    .right {
      width:100px;
      margin-left:-100px;
      right:-100px;
    }
    .main, .left ,.right {
      padding-bottom: 9999px;
      margin-bottom:-9999px;
    }
    .clearfix::after {
      content: ""; 
      display: block;
      clear: both;
      visibility: hidden;
      height: 0;
      overflow: hidden;
    }
  }
}
.layout3 {
  .header,.footer {
    height:60px;
  }
  .container {
    width:100%;
    height:400px;
    overflow: hidden;
    .mainer,.left ,.right {
      float:left;
      padding-bottom:9999px;
      margin-bottom:-9999px;
      overflow: hidden;
    }
    .mainer {
      width :100%;
      background: paleturquoise;
      .center {
        margin-left: 120px;
        margin-right: 120px;
      }
    }
    .left {
      width: 120px;
      margin-left:-100%;
    }
    .right {
      width: 120px;
      margin-left:-120px;
    }
  }
}
.layout4 {
  .header,.footer {
    height:60px;
  }
  .container {
    height:200px;
    overflow: hidden;
    .middle-container, .left ,.right {
      float:left;
      padding-bottom:9999px;
      margin-bottom:-9999px;
      overflow: hidden;
    }
    .middle-container{
      background: paleturquoise;
      width: 100%;
      .middle{
         
         margin-left: 120px;
          margin-right: 120px;
      }
    }
    .left{
      background: palevioletred;
      width: 120px;
      margin-left:-100%;
    }
    .right{
      width: 120px;
      margin-left:-120px;
      background: green;
    }
  }
}
.layout5 {
  .header,.footer {
    height:60px;
  }
  .container {
    min-width:400px;
    height:300px;
    overflow:hidden;
        .middle-container{
            width: 100%;
           .middle{
                margin-left: 120px;
                margin-right: 120px;
            }
        }

        .left{
            background: palevioletred;
            width: 120px;
            font-size: 40px;
            color: #fff;
            margin-left:-100%;
        }
        .right{
            width: 120px;
            background: purple;
            font-size: 40px;
            color: #fff;
            margin-left:-120px;

        }
        .middle-container, .left, .right {
            float: left;
            padding-bottom:9999px;
            margin-bottom:-9999px;
            overflow: hidden;
        }
  }

}
</style>