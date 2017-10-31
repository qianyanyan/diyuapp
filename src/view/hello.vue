<template>
     <div>
       <!-- <img class="index"  src="../assets/images/index.png"/> -->
       <span>33333</span>
         <div class="iconfont icon-top">&#xe611;</div>
     </div>
</template>
<script>
    export default{
        mounted() {
         setTimeout(() => {
         	console.log(111)
           this.$router.push({
              name:'index'

           });
         },2000);
        }
    };
</script>
<style lang="scss" scoped>
    .index{
      width:100%;
      background-color: #fff;
      margin-top: 40%;
    }
</style>
