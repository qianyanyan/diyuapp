<template>
<div class="xuehe-header homemodel home">
  <header class="clearfix">
    <div class="w1000">
      <h1><a href="#!/home/home">企企科技</a></h1>
      <div class="header_right">
         <!--<a href="#!/login/login" class="login" id="index4">登录</a>-->
         <router-link :to="{ path:'/login' }" class="login" id="index4">登录</router-link>
        <router-link :to="{ path:'/register' }" class="login" id="index5">注册</router-link>
    					<!--<a href="#!/register/register" id="index5">注册</a> -->
      </div>
      <ul class="navList">
        <li>
          <a href="#!/home/home" class="current" id="index1">首页</a>
        </li>
        <li>
          <a href="#!/study/study" target="_blank" id="index2">学园</a>
        </li>
        <li>
          <a href="#!/team/team" target="_blank" id="index3">团队</a>
        </li>
      </ul>
    </div>
  </header>
  <footer>
    <div class="footer-main1">
      <ul>
        <li><a href="#!/aboutUs/aboutUs" target="_blank" id="index29">关于我们</a></li>
        <li><a href="#!/link/link" target="_blank" id="index30">联系我们</a></li>
        <li><a href="#!/study/study" target="_blank" id="index31">使用教程</a></li>
      </ul>
      <p>企企科技 diyuapp.com 沪ICP备15056324号</p>
    </div>
  </footer>
 <div id="wrap">
   <div id="main">
     <section class="section-wrap" >
       <div class="section section-1" >
         <div style="height:100%">
           <div class="w1000">
             <div class="first_mengban">
               <p class="single">
                 <img src="../assets/img/head/app_1.png" id="_img1">
               </p>
               <p class="think">
                 <img src="../assets/img/head/app1_1.png" id="_img2">
               </p>
               <div class="free current">
                 <a href="#!/page1/page1" id="index6">免费创建</a>
               </div>
             </div>
           </div>
           <div class="mengban"></div>
           <div class="home1">
             <img src="../assets/img/head/bg_1.png" id="homeMainImg">
           </div>
           <div class="circle current"></div>
         </div>
       </div>
       <div class="section section-2" >
         <div class="title1">
           <div class="w1000">
             <div class="two_slogan" id="_img3"></div>
             <div class="two_para">
               <p id="index7">
                 专业团队技术过硬，从用户视角出发
               </p>
               <p id="index8">
                 情景模拟+用户行为研究，建立需求模型+设计探讨，潜在性研究+创新模式探索
               </p>
             </div>
             <div class="two_img">
               <div class="two_img1"></div>
               <div class="two_img2"></div>
               <div class="two_img3"></div>
               <div class="two_img4"></div>
             </div>
           </div>
         </div>
       </div>
       <div class="section section-3">
         <div class="title1">
           <div class="w1000">
             <div class="three_slogan" id="_img4"></div>
             <div class="three_para">
               <p id="index9">
                 无需编程、无需服务器，全程图形化操作
               </p>
               <p id="index10">
                 接入第三方内容数据，创意配置内容模型
               </p>
             </div>
             <div class="three_img clearfix">
               <div class="middle">
                 <div class="three_img1"></div>
                 <div class="three_img2"></div>
                 <div class="box_img3">
                   <div class="light"></div>
                   <div class="three_img3"></div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div class="section section-4" >
         <div class="title1">
           <div class="w1000">
             <div class="four_slogan" id="_img5"></div>
             <div class="three_para">
               <p id="index11">
                 专享平台资源，从应用创建到运营分析，从贴心指导到独立管理
               </p>
               <p id="index12">
                 帮助医疗机构搭建专属商业生态圈，一手掌握用户生态
               </p>
             </div>
             <div class="four_img clearfix">
               <div class="four_img1">
                 <div class="four_img2"></div>
               </div>
               <div class="four_img3">
                 <div class="four_img4"></div>
               </div>
               <div class="imgArrow"></div>
             </div>
           </div>
         </div>
       </div>
       <div class="section section-5" >
         <div class="w1000">
           <ul class="list">
             <li>
               <div class="bg_img">
                 <div class="five_img five_img1"></div>
               </div>
               <p class="title" id="index13">
                 免费专属定制
               </p>
               <p class="content" id="index14">
                 不花钱且创意无限
                 <br> 移动医疗梦想，触手可及
               </p>
             </li>
             <li>
               <div class="bg_img">
                 <div class="five_img five_img2"></div>
               </div>
               <p class="title" id="index15">
                 个性化体验
               </p>
               <p class="content" id="index16">
                 海量模板随心选，创意内容自定义
                 <br> 独一无二的APP，你值得拥有
               </p>
             </li>
             <li>
               <div class="bg_img">
                 <div class="five_img five_img3"></div>
               </div>
               <p class="title" id="index17">
                 开放平台资源
               </p>
               <p class="content" id="index18">
                 专享平台资源库、接入第三方数据
                 <br> 获取更多商业机会
               </p>
             </li>
             <li>
               <div class="bg_img">
                 <div class="five_img five_img4"></div>
               </div>
               <p class="title" id="index19">
                 洞悉市场需求
               </p>
               <p class="content" id="index20">
                 直击医疗市场痛点，快速解决问题
                 <br> 搭建健康商业生态圈
               </p>
             </li>
             <li>
               <div class="bg_img">
                 <div class="five_img five_img5"></div>
               </div>
               <p class="title" id="index21">
                 运营数据分析
               </p>
               <p class="content" id="index22">
                 独立后台，数据极速统计、分析
                 <br> 合理资源调配，全面运营监控
               </p>
             </li>
             <li>
               <div class="bg_img">
                 <div class="five_img five_img6"></div>
               </div>
               <p class="title" id="index23">
                 专业服务指导
               </p>
               <p class="content" id="index24">
                 贴心客服专员，专业技术团队
                 <br> 有任何问题，随呼随应
               </p>
             </li>
             <li>
               <div class="bg_img">
                 <div class="five_img five_img7"></div>
               </div>
               <p class="title" id="index25">
                 创新应用科技
               </p>
               <p class="content" id="index26">
                 掌握市场风向，创新制作科技
                 <br> APP当然也要与时俱进
               </p>
             </li>
             <li>
               <div class="bg_img">
                 <div class="five_img five_img8"></div>
               </div>
               <p class="title" id="index27">
                 后期智能升级服务
               </p>
               <p class="content" id="index28">
                 为特需医疗机构量身定制智能升级服务
               </p>
             </li>
           </ul>
         </div>
       </div>
     </section>
     <!--<div class="arrow"></div>-->
   </div>
     <div class="arrow"></div>
 </div>

</div>
</template>

<script>
export default {
  name: 'xuehe-header',
  data() {
    return {
      startTime:0,
      endTime:0,
      now:0

    }
  },
  methods: {
    isScroll() {
      let wrap = document.getElementById("wrap");
      let main = document.getElementById("main");
      var hei = document.documentElement.clientHeight;
      wrap.style.height = hei + "px";
    //   let obj = main.getElementsByTagName("div");
     let obj = document.getElementsByClassName("section");
      for (var i = 0; i < obj.length; i++) {
        // if (obj[i].className && obj[i].className == 'section') {
          obj[i].style.height = hei + "px";
        // }
      }
      //如果不加时间控制，滚动会过度灵敏，一次翻好几屏

      //浏览器兼容
      if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
        document.addEventListener("DOMMouseScroll",this.scrollFun, true);
      } else if (document.addEventListener) {
        document.addEventListener("mousewheel",this.scrollFun, true);
      } else if (document.attachEvent) {
        document.attachEvent("onmousewheel",this.scrollFune);
      } else {
        document.onmousewheel = this.scrollFun;
      }
    },
    //滚动事件处理函数
    scrollFun(event) {
     this.startTime = new Date().getTime();
     var hei = document.documentElement.clientHeight;
      var delta = event.detail || (-event.wheelDelta);
      //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
      //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
      if ((this.endTime - this.startTime) < -1000) {
        if (delta > 0 && parseInt(main.offsetTop) > -(hei * 3)) {
          //向下滚动

          this.now = this.now - hei;
          this.toPage(this.now);

        }
        if (delta < 0 && parseInt(main.offsetTop) < 0) {
          //向上滚动
          this.now = this.now + hei;
          this.toPage(this.now);
        }
      this.endTime = new Date().getTime();
      } else {
        event.preventDefault();
      }
    },
    toPage(now) {
      // $("#main").animate({
      //   top: (now + 'px')
      // }, 1000); //jquery实现动画效果
      let main = document.getElementById("main");
      console.log(this.now);

      $('.section').find('.circle').removeClass('current');
        $('.three_img1').removeClass('current');
        $('.three_img3').removeClass('current');
        $('.light').removeClass('current');
        $('.four_img2').removeClass('current');
        $('.four_img4').removeClass('current');
        $('.imgArrow').removeClass('current');
        $('.free').removeClass('current');
        $('.two_img1,.two_img2,.two_img3,.two_img4').css('display', 'none');
        $('.wai').css('top', '-1000px');
        $('.inner').css('left', '9000px');
        $('footer').css('display', 'none');
        $('.arrow').show();

      main.style.top = this.now + 'px';
      
      console.log(this.now/document.documentElement.clientHeight);
      let i =this.now/document.documentElement.clientHeight;
      switch(this.now/document.documentElement.clientHeight) {
            case 0:
                $('footer').css('display', 'none');
                $('.section').find('.circle').addClass('current');
                $('.free').addClass('current');
                break;
            case -1:
                $('.two_slogan').addClass('current');
                $('.two_img1').fadeIn('300', function() {
                    $('.two_img2').fadeIn('300', function() {
                        $('.two_img3').fadeIn('300', function() {
                            $('.two_img4').fadeIn('300');
                        });
                    });
                });
                break;
            case -2:
                $('.three_img1').addClass('current');
                $('.three_img3').addClass('current');
                $('.light').addClass('current');
                break;
            case -3:
                $('.four_img2').addClass('current');
                $('.four_img4').addClass('current');
                $('.imgArrow').addClass('current');
                break;
            
        }

    }

  },

  mounted() {;

    this.isScroll()

  },
  components: {
    // xueheAlert
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/index2";
html,body{
    height:100%;
}
body,ul,li,a,p,div{padding:0px; margin:0px; font-size:14px;}
#wrap{
    overflow: hidden;
    width:100%;
}
#main{
    height:4449px;
    top:0;
    position: relative;
}
.page{
    width:100%;
    margin:0;
}
#page1{
    background:#E4E6CE;
}
#page2{
    background:#6CE26C;
}
#page3{
    background:#BF4938;
}
#page4{
    background:#2932E1;
}
.home {
    height: 100%;
    width: 100%;
    .homecount,
    .section-wrap {
        height: 100%;
        width: 100%;
    }

    .header_right a,
    .navList li a {
        text-decoration: none;
        outline: 0;
        color: #fff;
    }

    .homemodel {
        height: 100%;
    }

    .homecount {
        overflow: hidden;
    }

    .section-wrap {
        overflow: visible;
        transition: transform 1s cubic-bezier(.86, 0, .03, 1);
        -webkit-transition: -webkit-transform 1s cubic-bezier(.86, 0, .03, 1);
    }

    .section-wrap .section {
        position: relative;
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        z-index: 10;
    }

    .section-wrap .section .title1 {
        width: 100%;
        position: absolute;
        color: #fff;
        font-size: 2.4em;
        text-align: center;
    }

    .section-wrap .section .title1 p {
        padding: 0 4%;
        opacity: 1;
    }

    .section-clearfix .section .title1.active .tit {
        opacity: 1;
        transform: translateY(-25px);
        -webkit-transform: translateY(-25px);
        transition: all 2s cubic-bezier(.86, 0, .8, 1);
        -webkit-transition: all 2s cubic-bezier(.86, 0, .8, 1);
    }

    .section-wrap .section-1 {
        background-color: #337ab7;
    }

    .section-wrap .section-2 {
        background-color: #009ff5;
    }

    .section-wrap .section-3 {
        background-color: #52da7e;
    }

    .section-wrap .section-4 {
        background-color: #f0c100;
    }

    .section-wrap .section-5 {
        background-color: #6d9be3;
    }

    .put-section-0 {
        transform: translateY(0);
        -webkit-transform: translateY(0);
    }

    .put-section-1 {
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }
    .put-section-2 {
        transform: translateY(-200%);
        -webkit-transform: translateY(-200%);
    }

    .put-section-3 {
        transform: translateY(-300%);
        -webkit-transform: translateY(-300%);
    }

    .put-section-4 {
        transform: translateY(-400%);
        -webkit-transform: translateY(-400%);
    }

    .section-btn {
        width: 14px;
        position: fixed;
        left: 4%;
        top: 50%;
        z-index: 9000000000000;
    }

    .section-btn li {
        width: 16px;
        height: 16px;
        border: 1px solid #fff;
        cursor: pointer;
        text-indent: -9999px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        margin-bottom: 12px;
        background: 0 0;
        text-align: center;
        color: #fff;
        onsor: pointer;
    }

    .section-btn li.on {
        background: #fff;
    }

    .arrow {
        opacity: 1;
        animation: arrow 3s cubic-bezier(.5, 0, .1, 1) infinite;
        -webkit-animation: arrow 3s cubic-bezier(.5, 0, .1, 1) infinite;
        position: absolute;
        bottom: 10px;
        left: 50%;
        margin-left: -30px;
        width: 55px;
        height: 55px;
        background-image: url("../assets/img/head/jiantou_hover.png");
        cursor: pointer;
        overflow: hidden;
        z-index: 10000;
    }

    .home1,
    .mengban {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .arrow:hover {
        animation-play-state: paused;
        -webkit-animation-play-state: paused;
    }
    @keyframes arrow {
        %0,
        %100 {
            bottom: 10px;
            opacity: 1;
        }
        50% {
            bottom: 50px;
            opacity: 0.5;
        }
    }
    @-webkit-keyframes arrow {
        %0,
        %100 {
            bottom: 10px;
            opacity: 1;
        }
        50% {
            bottom: 50px;
            opacity: 0.5;
        }
    }

    .mengban {
        height: 100%;
        background: rgba(61, 76, 102, .9);
        z-index: 9;
    }

    .home1 {
        height: 100vh;
        z-index: 7;
        overflow: hidden;
    }

    .circle,
    .first_mengban {
        position: absolute;
        left: 50%;
        top: 50%;
    }

    .home1 img {
        width: 105%;
        height: 100%;
        -moz-animation-iteration-count: infinite;
        -moz-animation-name: bg_scale;
        -moz-animation-duration: 5s;
        -moz-transition: all 10s;
        -moz-animation-delay: 1.5s;
        -moz-animation-timing-function: linear;
        -ms-animation-iteration-count: infinite;
        -ms-animation-name: bg_scale;
        -ms-animation-duration: 5s;
        -ms-transition: all 1s;
        -ms-animation-delay: 1.5s;
        -ms-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: bg_scale;
        -webkit-animation-duration: 5s;
        -webkit-transition: all 1s;
        -webkit-animation-delay: 1.5s;
        -webkit-animation-timing-function: linear;
    }
    @-moz-keyframes bg_scale {
        0%,
        100% {
            transform: scale(1);
            -ms-transform: scale(1);
            -webkit-transform: scale(1);
            opacity: 0.5;
        }
        50% {
            transform: scale(1.05);
            -ms-transform: scale(1.05);
            -webkit-transform: scale(1.05);
            opacity: 1;
        }
    }
    @-ms-keyframes bg_scale {
        .home 0% {
            transform: scale(1);
            -ms-transform: scale(1);
            -webkit-transform: scale(1);
            opacity: 0.5;
        }
        .home 50% {
            transform: scale(1.05);
            -ms-transform: scale(1.05);
            -webkit-transform: scale(1.05);
            opacity: 1;
        }
        .home 100% {
            transform: scale(1);
            opacity: 0.5;
        }
    }
    @-webkit-keyframes bg_scale {
        0%,
        100% {
            transform: scale(1);
            -ms-transform: scale(1);
            -webkit-transform: scale(1);
            opacity: 0.5;
        }
        50% {
            transform: scale(1.05);
            -ms-transform: scale(1.05);
            -webkit-transform: scale(1.05);
            opacity: 1;
        }
    }

    .first_mengban {
        width: 100%;
        height: 40%;
        font-size: 40px;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        z-index: 99;
    }

    .first_mengban p.single {
        width: 80%;
        margin: 0 auto 1%;
    }

    .first_mengban p.single img {
        max-width: 958px;
        max-height: 81px;
        display: inline-block;
    }

    .first_mengban p.think img {
        max-width: 495px;
        max-height: 27px;
        display: inline-block;
    }

    .first_mengban p.think {
        width: 60%;
        margin: 0 auto;
    }

    .free {
        width: 262px;
        height: 72px;
        margin: 6% auto 0;
        opacity: 0;
    }

    .first_mengban a {
        color: #fff;
        display: block;
        margin: 0 auto;
        height: 70px;
        border-radius: 70px;
        width: 260px;
        font-size: 24px;
        line-height: 70px;
        text-align: center;
        border: 1px solid #fff;
        text-decoration: none;
    }
    .first_mengban a:hover {
        text-decoration: none;
        color: #fff;
    }
    @-moz-keyframes bounceIn {
        0%,
        100%,
        20%,
        40%,
        60%,
        80% {
            -moz-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        }
        0% {
            opacity: 0;
            -moz-transform: scale3d(.3, .3, .3);
        }
        20% {
            -moz-transform: scale3d(1.1, 1.1, 1.1);
        }
        40% {
            -moz-transform: scale3d(.9, .9, .9);
        }
        60% {
            opacity: 1;
            -moz-transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
            -moz-transform: scale3d(.97, .97, .97);
        }
        100% {
            opacity: 1;
            -moz-transform: scale3d(1, 1, 1);
        }
    }
    @-ms-keyframes bounceIn {
        .home 0%,
        .home 100%,
        .home 20%,
        .home 40%,
        .home 60%,
        .home 80% {
            -ms-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        }
        .home 0% {
            opacity: 0;
            -ms-transform: scale3d(.3, .3, .3);
        }
        .home 20% {
            -ms-transform: scale3d(1.1, 1.1, 1.1);
        }
        .home 40% {
            -ms-transform: scale3d(.9, .9, .9);
        }
        .home 60% {
            opacity: 1;
            -ms-transform: scale3d(1.03, 1.03, 1.03);
        }
        .home 80% {
            -ms-transform: scale3d(.97, .97, .97);
        }
        .home 100% {
            opacity: 1;
            -ms-transform: scale3d(1, 1, 1);
        }
    }
    @-webkit-keyframes bounceIn {
        0%,
        100%,
        20%,
        40%,
        60%,
        80% {
            -webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        }
        0% {
            opacity: 0;
            -webkit-transform: scale3d(.3, .3, .3);
        }
        20% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1);
        }
        40% {
            -webkit-transform: scale3d(.9, .9, .9);
        }
        60% {
            opacity: 1;
            -webkit-transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
            -webkit-transform: scale3d(.97, .97, .97);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale3d(1, 1, 1);
        }
    }
    @-o-keyframes bounceIn {
        0%,
        100%,
        20%,
        40%,
        60%,
        80% {
            -o-animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        }
        0% {
            opacity: 0;
            -o-transform: scale3d(.3, .3, .3);
        }
        20% {
            -o-transform: scale3d(1.1, 1.1, 1.1);
        }
        40% {
            -o-transform: scale3d(.9, .9, .9);
        }
        60% {
            opacity: 1;
            -o-transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
            -o-transform: scale3d(.97, .97, .97);
        }
        100% {
            opacity: 1;
            -o-transform: scale3d(1, 1, 1);
        }
    }
    @keyframes bounceIn {
        0%,
        100%,
        20%,
        40%,
        60%,
        80% {
            animation-timing-function: cubic-bezier(.215, .61, .355, 1);
        }
        0% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }
        20% {
            transform: scale3d(1.1, 1.1, 1.1);
        }
        40% {
            transform: scale3d(.9, .9, .9);
        }
        60% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
            transform: scale3d(.97, .97, .97);
        }
        100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
        }
    }

    .free.current {
        -moz-animation: bounceIn 1s 1.5s both;
        animation: bounceIn 1s 1.5s both;
        -ms-animation: bounceIn 1s 1.5s both;
        -webkit-animation: bounceIn 1s 1.5s both;
        -o-animation: bounceIn 1s 1.5s both;
    }

    .circle {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        z-index: 11;
        opacity: 0;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
    }

    .circle.current {
        animation: circle 1s;
        -moz-animation: circle 1s;
        -ms-animation: circle 1s;
        -webkit-animation: circle 1s;
    }
    @-moz-keyframes circle {
        0% {
            -moz-transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
        100% {
            -moz-transform: translate(-50%, -50%) scale(12);
            opacity: 1;
        }
    }
    @-webkit-keyframes circle {
        0% {
            -webkit-transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
        100% {
            opacity: 1;
            -webkit-transform: translate(-50%, -50%) scale(12);
        }
    }
    @-ms-keyframes circle {
        .home 0% {
            -ms-transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
        .home 100% {
            opacity: 1;
            -ms-transform: translate(-50%, -50%) scale(12);
        }
    }

    .two_slogan {
        width: 350px;
        height: 121px;
        background-image: url("../assets/img/head//slogan1.png");
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        margin: 10% auto 0;
        transition: all 1s;
    }

    .two_para {
        font-size: 14px;
        text-align: center;
        margin-top: 3%;
        margin-bottom: 3%;
    }

    .two_para p {
        width: 680px;
        height: 20px;
        margin: 0 auto 10px;
    }

    .two_img {
        margin: 0 auto;
        background-image: url("../assets/img/head/change_area.png");
        width: 255px;
        height: 435px;
        padding-top: 90px;
        box-sizing: border-box;
    }

    .two_img1,
    .two_img2,
    .two_img3,
    .two_img4 {
        width: 186px;
        display: none;
    }

    .two_img1 {
        background-image: url("../assets/img/head/phone_1.png");
        height: 36px;
        margin: 0 auto 20px;
    }

    .two_img2 {
        background-image: url("../assets/img/head/phone_2.png");
        height: 74px;
        margin: 0 auto 20px;
    }

    .home .two_img3 {
        background-image: url("../assets/img/head/phone_3.png");
        height: 36px;
        margin: 0 auto 20px;
    }

    .two_img4 {
        background-image: url("../assets/img/head/phone_4.png");
        height: 76px;
        margin: 0 auto;
    }

    .three_slogan {
        background-image: url("../assets/img/head/slogan.png");
        width: 350px;
        height: 121px;
        margin: 10% auto 0;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .three_para {
        font-size: 14px;
        text-align: center;
        margin: 3% auto;
    }
    .three_para p {
        width: 680px;
        height: 20px;
        margin: 0 auto 10px;
    }
    .middle {
        width: 740px;
        height: 334px;
        margin: 0 auto;
        position: relative;
    }
    .three_img1 {
        background-image: url("../assets/img/head/juhe_l.png");
        width: 172px;
        height: 192px;
        position: absolute;
        left: -500px;
        top: 20px;
        opacity: 0;
        transition: all 1s;
        -moz-transition: all 1s;
        -ms-transition: all 1s;
        -webkit-transition: all 1s;
    }
    .three_img1.current {
        animation: leftImg 1s;
        -moz-animation: leftImg 1s;
        -webkit-animation: leftImg 1s;
        -ms-animation: leftImg 1s;
        animation-fill-mode: both;
        -moz-animation-fill-mode: both;
        -ms-animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
    }
    @-moz-keyframes leftImg {
        0% {
            left: -500px;
            opacity: 0;
        }
        100% {
            left: 0;
            opacity: 1;
        }
    }
    @-ms-keyframes leftImg {
        0% {
            left: -500px;
            opacity: 0;
        }
        100% {
            left: 0;
            opacity: 1;
        }
    }
    @-webkit-keyframes leftImg {
        0% {
            left: -500px;
            opacity: 0;
        }
        100% {
            left: 0;
            opacity: 1;
        }
    }
    @keyframes leftImg {
        0% {
            left: -500px;
            opacity: 0;
        }
        100% {
            left: 0;
            opacity: 1;
        }
    }
    .three_img2 {
        background-image: url("../assets/img/head/imac.png");
        width: 400px;
        height: 334px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
    }
    .box_img3 {
        width: 167px;
        height: 334px;
        float: right;
        position: relative;
    }
    .three_img3 {
        background-image: url("../assets/img/head/juhe_r.png");
        width: 167px;
        height: 236px;
        position: absolute;
        bottom: 30px;
        right: -500px;
        opacity: 0;
    }
    .three_img3.current {
        animation: rightImg 1s;
        -moz-animation: rightImg 1s;
        -ms-animation: rightImg 1s;
        -webkit-animation: rightImg 1s;
        animation-fill-mode: both;
        -moz-animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
        -ms-animation-fill-mode: both;
    }
    @-moz-keyframes rightImg {
        from {
            right: -500px;
            opacity: 0;
        }
        to {
            right: 0;
            opacity: 1;
        }
    }
    @-ms-keyframes rightImg {
        from {
            right: -500px;
            opacity: 0;
        }
        to {
            right: 0;
            opacity: 1;
        }
    }
    @-webkit-keyframes rightImg {
        from {
            right: -500px;
            opacity: 0;
        }
        to {
            right: 0;
            opacity: 1;
        }
    }
    @keyframes rightImg {
        from {
            right: -500px;
            opacity: 0;
        }
        to {
            right: 0;
            opacity: 1;
        }
    }
    .light {
        background-image: url("../assets/img/head/light.png");
        width: 65px;
        height: 68px;
        position: absolute;
        right: 21px;
        top: 0;
        opacity: 0;
    }
    .light.current {
        animation: rotateImg 1s;
        -moz-animation: rotateImg 1s;
        -ms-animation: rotateImg 1s;
        -webkit-animation: rotateImg 1s;
        animation-fill-mode: both;
        -ms-animation-fill-mode: both;
        -moz-animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
        animation-delay: 1.5s;
        -moz-animation-delay: 1.5s;
        -ms-animation-delay: 1.5s;
        -webkit-animation-delay: 1.5s;
    }
    @-moz-keyframes rotateImg {
        from {
            transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            opacity: 0;
        }
        to {
            transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            opacity: 1;
        }
    }
    @-ms-keyframes rotateImg {
        from {
            transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            opacity: 0;
        }
        to {
            transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            opacity: 1;
        }
    }
    @-webkit-keyframes rotateImg {
        from {
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            opacity: 0;
        }
        to {
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            opacity: 1;
        }
    }
    @keyframes rotateImg {
        from {
            transform: rotate(90deg);
            transform: rotate(90deg);
            opacity: 0;
        }
        to {
            transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
    }

    .four_slogan {
        background-image: url("../assets/img/head/slogan2.png");
        width: 350px;
        height: 121px;
        margin: 10% auto 0;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .four_img {
        width: 740px;
        height: 437px;
        margin: 0 auto;
        position: relative;
        /* background: red; */
    }
    .four_img1 {
        position: absolute;
        background-image: url("../assets/img/head/4phone.png");
        width: 255px;
        height: 437px;
        top: 0;
        left: 0;
    }
    .four_img2 {
        position: absolute;
        background-image: url("../assets/img/head/4phone_t.png");
        width: 178px;
        height: 309px;
        top: -90px;
        opacity: 0;
        left: 50%;
        transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
    }
    .four_img2.current {
        animation: firstImg 1s both;
        -moz-animation: firstImg 1s both;
        -ms-animation: firstImg 1s both;
        -webkit-animation: firstImg 1s both;
    }
    @-moz-keyframes firstImg {
        from {
            top: -90px;
            opacity: 0;
        }
        to {
            top: 90px;
            opacity: 1;
        }
    }
    @-ms-keyframes firstImg {
        from {
            top: -90px;
            opacity: 0;
        }
        to {
            top: 90px;
            opacity: 1;
        }
    }
    @-webkit-keyframes firstImg {
        from {
            top: -90px;
            opacity: 0;
        }
        to {
            top: 90px;
            opacity: 1;
        }
    }
    @keyframes firstImg {
        from {
            top: -90px;
            opacity: 0;
        }
        to {
            top: 90px;
            opacity: 1;
        }
    }
    .four_img3 {
        position: absolute;
        background-image: url("../assets/img/head/mac_bg.png");
        width: 429px;
        height: 275px;
        right: 0;
        top: 50px;
    }
    .four_img4 {
        position: absolute;
        background-image: url("../assets/img/head/mac_t.png");
        width: 291px;
        height: 165px;
        top: -90px;
        left: 74px;
        opacity: 0;
        /* transform: translateX(-50%);
   -moz-transform: translateX(-50%);
   -ms-transform: translateX(-50%);
   -webkit-transform: translateX(-50%); */
    }
    .four_img4.current {
        animation: secondImg 1s 1.5s both;
        -moz-animation: secondImg 1s 1.5s both;
        -ms-animation: secondImg 1s 1.5s both;
        -webkit-animation: secondImg 1s 1.5s both;
    }
    @-moz-keyframes secondImg {
        from {
            top: -90px;
            opacity: 0;
        }
        to {
            top: 40px;
            opacity: 1;
        }
    }
    @-webkit-keyframes secondImg {
        from {
            top: -90px;
            opacity: 0;
        }
        to {
            top: 40px;
            opacity: 1;
        }
    }
    @-ms-keyframes secondImg {
        from {
            top: -90px;
            opacity: 0;
        }
        to {
            top: 40px;
            opacity: 1;
        }
    }
    @keyframes secondImg {
        from {
            top: -90px;
            opacity: 0;
        }
        to {
            top: 40px;
            opacity: 1;
        }
    }
    .imgArrow {
        position: absolute;
        background-image: url("../assets/img/head/feiji.png");
        width: 90px;
        height: 70px;
        /*top: 25px;*/
        left: 255px;
        opacity: 0;
    }
    .imgArrow.current {
        animation: arrowImg 1s 2.5s both;
        -moz-animation: arrowImg 1s 2.5s both;
        -ms-animation: arrowImg 1s 2.5s both;
        -webkit-animation: arrowImg 1s 2.5s both;
    }
    @-moz-keyframes arrowImg {
        from {
            transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            opacity: 0;
        }
        to {
            transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            opacity: 1;
        }
    }
    @-ms-keyframes arrowImg {
        from {
            transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            opacity: 0;
        }
        to {
            transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            opacity: 1;
        }
    }
    @-webkit-keyframes arrowImg {
        from {
            transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            opacity: 0;
        }
        to {
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            opacity: 1;
        }
    }
    @keyframes arrowImg {
        from {
            transform: rotate(-90deg);
            transform: rotate(-90deg);
            transform: rotate(-90deg);
            transform: rotate(-90deg);
            opacity: 0;
        }
        to {
            transform: rotate(0deg);
            transform: rotate(0deg);
            transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }
    }

    .list {
        margin: 8% auto 0;
        width: 100%;
        height: 80%;
    }
    .bg_img {
        background: url("../assets/img/head/icon_bg.png") center center no-repeat;
        -webkit-background-size: 123px 143px;
        background-size: 123px 143px;
        width: 133px;
        height: 153px;
        position: relative;
        margin: 0 auto;
        transition: all 0.4s linear;
        -moz-transition: all 0.4s linear;
        -webkit-transition: all 0.4s linear;
        -ms-transition: all 0.4s linear;

    }
    .list li:hover .bg_img {
        background: url("../assets/img/head/icon_bg_hover.png") center center no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .list li:hover .content,
    .list li:hover .title {
        opacity: 1;
    }
    .list li {
        width: 25%;
        float: left;
        margin-bottom: 10px;
        color: #fff;
    }
    .list li .five_img {
        width: 70px;
        height: 70px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
    }
    .list li .five_img1 {
        background-image: url("../assets/img/head/template.png");
    }
    .list li .five_img2 {
        background-image: url("../assets/img/head/model.png");
    }
    .list li .five_img3 {
        background-image: url("../assets/img/head/component.png");
    }
    .list li .five_img4 {
        background-image: url("../assets/img/head/analysis.png");
    }
    .list li .five_img5 {
        background-image: url("../assets/img/head/freecharge.png");
    }
    .list li .five_img6 {
        background-image: url("../assets/img/head/guide.png");
    }
    .list li .five_img7 {
        background-image: url("../assets/img/head/market.png");
    }
    .list li .five_img8 {
        background-image: url("../assets/img/head/resource.png");
    }
    .title {
        text-align: center;
        font-size: 22px;
        margin: 0 auto 10px;
        opacity: 0.6;
    }
    .content {
        text-align: center;
        font-size: 12px;
        margin: 0 auto;
        line-height: 20px;
        opacity: 0.6;
    }
    .w1000 {
        position: relative;
        overflow: hidden;
        width: 80%;
        margin: 0 auto;
        height: 100%;
        z-index: 10;
    }

    header {
        width: 100%;
        position: fixed;
        top: 1%;
        left: 0;
        height: 100px;
        z-index: 100;
    }

    .navList {
        width: auto;
        height: 68px;
        margin-top: 14px;
        float: right;
        min-width: 320px;
    }

    .navList li {
        float: left;
        margin-right: 14%;
        height: 40px;
        line-height: 40px;
    }

    .navList li a {
        font-size: 20px;
        display: block;
        opacity: 0.6;
        resize: none;
    }
    .navList li a.current,
    .navList li a:hover {
        opacity: 1;
    }

    header h1 {
        float: left;
        height: 100px;
        width: 100px;
    }

    header h1 a {
        display: block;
        height: 100px;
        width: 100px;
        background: url("../assets/img/head/logo.png") no-repeat;
        -webkit-background-size: 80px 80px;
        background-size: 80px 80px;
        text-indent: -9999px;
    }

    .header_right {
        float: right;
        height: 68px;
        width: 350px;
        padding-top: 18px;
        box-sizing: border-box;
    }

    .header_right a {
        display: inline-block;
        text-align: center;
        font-size: 12px;
        border: 1px solid #fff;
        height: 30px;
        line-height: 30px;
        width: 60px;
        border-radius: 15px;
    }

    .header_right a.login {
        margin-right: 20px;
    }

    footer {
        width: 100%;
        height: 8%;
        display: none;
        z-index: 1000;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    footer .footer-main1 {
        width: 1000px;
        height: 100%;
        margin: 0 auto;
    }
    .footer-main1 ul {
        width: 470px;
        height: 30%;
        margin: 0 auto;
    }
    .footer-main1 ul li {
        width: 145px;
        height: 80%;
        float: left;
        text-align: center;
        color: #fff;
        font-size: 12px;
    }
    .footer-main1 ul li a {
        display: block;
        height: 100%;
        width: 100%;
        color: #fff;
        resize: none;
        outline: none;
        text-align: center;
        border-right: #fff solid 1px;
    }
    .footer-main1 p {
        display: block;
        width: 340px;
        margin: 0 auto;
        color: #fff;
        font-size: 12px;
        text-align: center;
        margin-top: 8px;

    }
}
</style>
