<template>
<div class="login">
  <div class="alter">
    <div class="alterLeft">

      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container alterLeftContain">

        <el-form-item prop="account" class="ipt">
          <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="请输入账号" id="ipt1" style="border:none;"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="ipt">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入账号密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="ipt">
          <el-input type="text" v-model="ruleForm2.yzm" placeholder="验证码" class="yanzheng" auto-complete="off" /></el-input>
          <img :src="yzmCode" @click="reloadcode" class="btn1" />
          <div></div>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;" class="ipt">
          <el-button class="btn2" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
          <h2>还没有账号？<a href="#!/register/register">立即注册</a></h2>
        </el-form-item>
      </el-form>
      <div class="alterRight"></div>
    </div>
  </div>
</div>
</template>

<style>
.form {
  margin-top: 20px;
}
</style>

<script>
import {
  requestLogin,
  yzimage
} from '../../api/api';
import global from '../../assets/js/Math.uuid'
export default {
  data() {
    return {
      logining: false,
      yzmCode: "",
      ruleForm2: {
        account: '',
        checkPass: '',
        zym:'',
      },
      rules2: {
        account: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          },
          //{ validator: validaePass }
        ],
        checkPass: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  mounted() {
    this.reloadcode();
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    reloadcode() {
      let uuidcode = global.uuid(16);
      yzimage().then((res) => {
        // this.yzmCode ='http://dingzhi.diyuapp.com/freeweb/api/yzimage?uuid=NyM66J3xB5qGY7HQ&m=0.019600493055879742'
        this.yzmCode = 'http://dingzhi.diyuapp.com/freeweb/api/yzimage?uuid=' + uuidcode + "&m=" + Math.random();
      });
    },
    handleSubmit2(ev) {
      var _this = this;
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          this.logining = true;
          //NProgress.start();
          var loginParams = {
            username: this.ruleForm2.account,
            password: this.ruleForm2.checkPass,
            yzm: this.ruleForm2.yzm
          };
          requestLogin(loginParams).then(data => {
            this.logining = false;
            //NProgress.done();
            let {
              msg,
              code,
              user
            } = data;
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            } else {
              sessionStorage.setItem('user', JSON.stringify(user));
              this.$router.push({
                path: '/table'
              });
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.el-input__inner{
   border: none !important;
}
.el-checkbox {
    color: #1f2d3d;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    float: left;
}

body {
    background: rgb(236, 236, 236);
}
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(236, 236, 236);
    .alter {
        width: 928px;
        height: 566px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -mz-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        .alterLeft {
            width: 576px;
            float: left;
            .alterLeftContain {
                margin: 90px auto 0;
                width: 320px;
                .ipt,.el-form-item {
                    width: 320px;
                    margin-top: 54px;
                    position: relative;
                    input {
                        width: 100%;
                    }
                    .btn2 {
                        width: 140px;
                        height: 34px;
                        background: #064f97;
                        color: #fff;
                        border: none;
                        cursor: pointer;
                    }
                    .el-form-item__content #ipt1 .el-input__inner {
                        border: none !important;
                        height: 34px;
                        border-bottom: 1px solid gray !important;
                        width: 320px;
                        outline: none;
                    }
                    .yanzheng {
                        width: 228px;
                        height: 34px;
                        border: none;
                        border-bottom: 1px solid gray;
                        float: left;
                        outline: none;
                    }
                    .btn1 {
                        width: 83px;
                        height: 34px;
                        background: #064f97;
                        color: #fff;
                        border: none;
                        cursor: pointer;
                    }
                    .Validform_wrong {
                        color: #f25656;
                        background: url("../../assets/img/login/wrong.png") no-repeat left center;
                        padding-left: 20px;
                        position: absolute;
                        left: 0;
                        top: 40px;
                    }
                    .Validform_right {
                        color: #38a585;
                        padding-left: 20px;
                        background: url("../../assets/img/login/validfrom_right.png") no-repeat left center;
                        position: absolute;
                        left: 0;
                        top: 40px;
                    }
                }
                h1 {
                    position: relative;
                    margin-top: 30px;
                    color: #064f97;
                    clear: both;
                    width: 100%;
                    input {
                        cursor: pointer;
                        margin-right: 10px;
                        vertical-align: middle;
                        margin-top: -2px;
                    }
                    span {
                        position: absolute;
                        right: 0;
                    }
                    a {
                        color: #064f97;
                    }
                }
                h2 {
                    text-align: center;
                    margin-top: 10px;
                    a {
                        color: #064f97;
                    }
                }
            }
        }
        .alterRight {
            position: absolute;
            right: 0;
            top: 0;
            background: url("../../assets/img/login/45.png") no-repeat;
            width: 443px;
            height: 566px;
        }
    }
}
</style>
