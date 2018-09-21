<template>
<div>
     <p class="page-container">404 page not found</p>
</div>
    
   
</template>
<script>
function isIterator(obj){
    return typeof obj[Symbol.iterator] === "function";
}

let collection = {
    items: [],
    *[Symbol.iterator]() {
        for(let item of this.items){
            yield item;
        }
    }
}
export default {
    data () {
        return {
            todos:[{
                id: 1,
                text: 'zhangsan'
            },{
                id: 2,
                text: 'lisi'
            },{
                id: 3,
                text: 'wangwut1'
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
    .page-container {
        font-size: 20px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
</style>
