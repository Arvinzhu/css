<template>
  <section>
    <div class="container ">
    <h3>等高</h3>
    <div class="layout9 border">
      <div class="left border">Left Lorem ipsum dolor sit amet.</div>
      <div class="right border">Right Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni deserunt velit, sint voluptas architecto in!</div>
    </div>
    <hr>
    <h3>等分</h3>
    <div class="layout8">
      <div class="column bg-color-gray">Lorem ipsum dolor sit amet.</div>
      <div class="column">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div class="column bg-color-blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quo, voluptate doloremque?</div>
    </div>
    <hr>
    <h3>多列不定宽，一列自适应</h3>
    <div class="layout7">
      <div class="left bg-color-gray"><p>Left Lorem ipsum dolor.</p></div>
      <div class="center"><p>Left Lorem ipsum dolor sit.</p></div>
      <div class="right bg-color-blue">Right Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sapiente ea voluptatum deleniti magni suscipit quae molestiae libero quis. Nulla!</div>
    </div>
    <hr>
    <h3>一列不定宽，一列自适应</h3>
    <div class="layout6">
      <div class="left bg-color-gray"><p>Left Lorem ipsum dolor.</p></div>
     
      <div class="right bg-color-blue">Right Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sapiente ea voluptatum deleniti magni suscipit quae molestiae libero quis. Nulla!</div>
    </div>
    <hr>
    <h3>多列定宽，一列自适应</h3>
    <div class="layout4">
      <div class="left bg-color-gray">Left Lorem ipsum dolor.</div>
      <div class="center">Left Lorem ipsum dolor sit.</div>
      <div class="right bg-color-blue">Right Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sapiente ea voluptatum deleniti magni suscipit quae molestiae libero quis. Nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil aperiam maxime velit officiis dolore harum, consequatur sequi quae dolor adipisci hic nemo ex, minima assumenda unde laborum reprehenderit commodi tenetur!</div>
    </div>
    <div class="layout5">
      <div class="left bg-color-gray">Left Lorem ipsum dolor.</div>
      <div class="center">Left Lorem ipsum dolor sit.</div>
      <div class="right bg-color-blue">Right Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sapiente ea voluptatum deleniti magni suscipit quae molestiae libero quis. Nulla!</div>
    </div>
    <hr>
      <h3>两列布局</h3>
      <div class="layout1">
        <div class="child1 bg-color-gray">left</div>
        <div class="child2 bg-color-blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatem aut error ipsum ad libero itaque numquam eveniet ut, tempora!</div>
      </div>
      <div class="layout2">
        <div class="child1 bg-color-gray">left</div>
        <div class="child2 bg-color-blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatem aut error ipsum ad libero itaque numquam eveniet ut, tempora!</div>
      </div>
      <div class="layout3">
        <div class="child1 bg-color-gray">left,两列等高布局</div>
        <div class="child2 bg-color-blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptatem aut error ipsum ad libero itaque numquam eveniet ut, tempora!</div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
 name: 'MultiColumn',
  data () {
    return {
    }
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
.container {
  padding:10px 0;
}
.layout1 {
  border:1px solid green;
  .child1 {
    float:left;
    width:100px;
  }
  .child2 {
    margin-left:120px;
  }
}
.layout2 {
  border:1px solid green;
  .child1 {
    float:left;
    width:100px;
    margin-right:20px;
  }
  .child2 {
    overflow:hidden;
  }
}
.layout3 {
  display: flex;
  min-height:100px;
  border:1px solid green;
  .child1 {
    flex: 1;
    margin-right:0.5rem;
  }
  .child2 {
    flex:5;
    margin-left:0.5rem;
  }
}
.layout4 {
  // display: flex;
  min-height:100px;
  border:1px solid green;
  .left,.center {
    float: left;
    width: 100px;
    margin-right: 20px;
  }
  .right {
    overflow: hidden;
  }
}
.layout5 {
  display: table; 
  width: 100%;
  .left,.center,.right {
     display: table-cell;
     border:1px solid yellow;
  }
  .right {
    width: 120px;
    padding:0 10px;
  }
}
.layout6 {
  height:80px;
  .left {
    float: left;
    margin-right: 20px;
  }
  .right {
      overflow: hidden;
  }
  .left p {
    width:13rem;
  }
}
.layout7 {
  height:8rem;
  .left,.center{
      float: left;
      margin-right: 20px;
  }
  .right{
      overflow: hidden;
  }
  .left p,.center p{
      width: 100px;
  }
}
.layout8 {
  margin-left:1rem;
  overflow:hidden;
  border:1px solid green;
  .column {
    float:left;
    width: 20%;
    padding-left:1rem;
  }
}
.layout9 {
  overflow:hidden;
  height:300px;
  .left, .right {
    padding-bottom: 9999px;
    margin-bottom: -9999px;
  }
  .left {
    float:left;
    width:120px;

  }
  .right {
    // overflow:hidden;
    margin-left: 140px;
  }
}
</style>