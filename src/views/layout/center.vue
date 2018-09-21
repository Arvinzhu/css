<template>
  <section>
    <div class="top-container">
      <h3>center</h3>
      <div class="v0"><span class="child-td">内联元素，不知道父元素高度，使用table布局
        display: table-cell;
  // width:100%;
  width:400px;//百分比失效
  text-align:center;
  height:100px;
  vertical-align: middle;
  border:1px solid lightgray;</span>
      </div>
      <div class="v1"><span class="child">内联元素，不知道父元素高度</span>
      </div>
      <div class="v1"><span class="child0">内联元素，知道父元素高度</span>
      
      </div>
      <div class="v1">
        <div class="child1">水平垂直居中（一）定位和需要定位的元素的margin减去宽高的一半
          <code>
          .parent 
              position:relative;
          
          .child 
            width:300px;
            height:100px;
            left:50%;
            top:50%;
            margin:-50px 0 0 -150px;
            position:absolute;
            border:1px solid lightgray;
          
          </code>
        </div>
      </div>
      <div class="v5">
        <div class="child0">水平垂直居中（二）定位和margin:auto;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam omnis odio, quidem aliquid beatae?</div>
      </div>
      <div class="v1">
        <div class="child2">水平垂直居中（三）绝对定位和transfrom
        <code>
        .parent 
            position:relative;
        
        .child 
          width:300px;
          left:50%;
          top:50%;
          transform: translate(-50%, -50%);
          position:absolute;
          margin:0 auto;
          border:1px solid lightgray;
        
        </code>
        </div>
      </div>
      <div class="v2">
        <div></div>
        <div class="children0">
            使用before，after伪元素(定高不定宽);
        </div>
      </div>
      <div class="v3">
        <div class="children1">
            若元素是行内块级元素, 基本思想是使用display: inline-block, vertical-align: middle和一个伪元素让内容块处于容器中央.
        </div>
      </div>
      <div class="v4">
        <div class="child0">水平垂直居中（四）diplay：table-cell
            可用 vertical-align 属性, 而vertical-align只有在父层为 td 或者 th 时, 才会生效, 对于其他块级元素, 例如 div、p 等, 默认情况是不支持的. 为了使用vertical-align, 我们需要设置父元素display:table, 子元素 display:table-cell;vertical-align:middle
        </div>
      </div>
      <div class="v6">
        <div class="child0">水平垂直居中（五）flexBox居中详见horizontally页面</div>
      </div>
      <div class="v7">
        <b class="child0"></b>
        <div class="child1">
        水平垂直居中（六）利用vertical-align:middle;
        Lorem ipsum dolor sit amet, adipisicing elit.<br>Laboriosam possimus, voluptatum tenetur iure minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quidem vero quibusdam pariatur voluptatibus, id aliquid eaque! Deleniti, provident, tempore.</div>
      </div>
    </div>
  </section>
</template>

<script>

export default {

  name: 'center',
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
  .el-alert-gray-info{
    background-color: rgb(249,249,249);
    color:black;
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
.v0 {
  display: table-cell;
  // width:100%;
  width:600px;//百分比失效
  text-align:center;
  height:100px;
  vertical-align: middle;
  border:1px solid lightgray;
}
.v1 {
  height:150px;
  position:relative;
  border:1px solid gray;
  text-align:center;
  
  .child {
    
  }
  .child0 {
    line-height:150px
  }
  .child1 {
    width:300px;
    height:100px;
    left:50%;
    top:50%;
    margin:-50px 0 0 -150px;
    position:absolute;
    border:1px solid lightgray;
  }
  .child2 {
    width:300px;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    position:absolute;
    margin:0 auto;
    border:1px solid lightgray;
  }
}
.v2 {
  border:1px solid lightgray;
  height:100px;
  .children0::before {
    content: '';
    display: block;
    vertical-align: middle;
    height: 50%;
  }
  .children0 {
    height: 33px;
    line-height: 33px;
    border:1px solid lightgray;
  }
  
}
.v3 {
    border:1px solid lightgray;
  height:100px;
}
.v3::after, .children1  {
    display:inline-block;
    vertical-align:middle;
}
.v3::after {
  content:'';
  height:100%;
}
.v4 {
  display:table;
  // width:500px;//百分比无效
  height:100px;
  border:1px solid lightgray;
  .child0 {
    display:table-cell;
    vertical-align:middle;
  }
}
.v5 {
  height:200px;
  border:1px solid lightgray;
  position:relative;
  .child0 {
    width:100px;
    height:100px;
    border:1px solid lightgray;
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right:0;
    margin:auto;
  }
}
.v7 {
  height:200px;
  border:1px solid lightgray;
  text-align:center;

  .child0 {
    display:inline-block;
    width:0;
    height:100%;
    vertical-align:middle;
  }
  .child1 {
    width:98%;
    display:inline-block;
    text-align:left;
    vertical-align:middle;
    font-size:16px;
    // margin-top:-100px;
    border:1px solid lightgray;
  }
}
</style>