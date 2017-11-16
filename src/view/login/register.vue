<template>
<div class="register">
  <div class="alter">
    <div class="alterLeft">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container alterLeftContain">
        <el-form-item prop="account" class="ipt">
          <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="请输入账号" class="ipt1" ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="ipt">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" class="ipt1" placeholder="请输入账号密码"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="ipt">
          <el-input type="text" v-model="ruleForm.code" placeholder="验证码" class="yanzheng" verification="yzm6" vok="通过信息验证" vno="验证码长度为6位"></el-input>
		  <button type="button" class="sendBtn" value="发送验证码" @click="settime(this)">获取验证码</button>
          <div></div>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;" class="ipt">
           <el-button class="btn" @click.native.prevent="handleSubmit" :loading="logining">注册</el-button>
		  <h2 class="login">已有账号？ <router-link :to="{ path:'/login' }">立即登录</router-link></h2>
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
      countdown: 60,
      ruleForm: {
        account: '',
        checkPass: '',
        zym:'',
      },
      rules: {
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
        ],
        code:[{
             required: true,
            message: '请输入密码',
            trigger: 'blur'
        }]
      },
      checked: true
    };
  },
  mounted() {
   
  },
  methods: {
    handleSubmit(ev) {
      var _this = this;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          //NProgress.start();
          var loginParams = {
            username: this.ruleForm.account,
            password: this.ruleForm.checkPass,
            yzm: this.ruleForm.code
          };
        //   requestLogin(loginParams).then(data => {
        //     this.logining = false;
        //     //NProgress.done();
        //     let {
        //       msg,
        //       code,
        //       user
        //     } = data;
        //     if (code !== 200) {
        //       this.$message({
        //         message: msg,
        //         type: 'error'
        //       });
        //     } else {
        //       sessionStorage.setItem('user', JSON.stringify(user));
        //       this.$router.push({
        //         path: '/table'
        //       });
        //     }
        //   });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //发送验证码
    settime(obj){
            var tel = this.username; //获取手机号
			if(this.countdown == 0) {
				obj.removeAttribute("disabled");
				obj.innerHTML = "发送验证码"
				this.countdown = 60;
				return;
			} else {
				this.countdown--;
			}
			setTimeout(function() {
				this.settime(obj)
			}, 1000)
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
.register {
        background: #ececec;
        width: 100%;
        height: 100%;
        position: absolute;
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
                .login {
                    margin-top: 10px;
                    padding-left: 1em;
                    a {
                        color: #064f97;
                    }
                }
                .ipt {
                    width: 320px;
                    margin-top: 42px;
                    position: relative;
                    .ipt1 {
                        border: none;
                        height: 34px;
                        border-bottom: 1px solid gray;
                        width: 320px;
                        outline: none;
                    }
                    .yanzheng {
                        width: 210px;
                        height: 34px;
                        border: none;
                        border-bottom: 1px solid gray;
                        float: left;
                        outline: none;
                    }
                    .sendBtn {
                        width: 90px;
                        height: 35px;
                        background: #064f97;
                        color: #fff;
                        border: none;
                        float: left;
                        cursor: pointer;
                    }
                    .Validform_wrong {
                        color: #f25656;
                        /*background: url("img/wrong.png") no-repeat left center;*/
                        padding-left: 20px;
                        position: absolute;
                        left: 0;
                        top: 40px;
                        font-size: 12px;
                    }
                    .Validform_right {
                        color: #38a585;
                        padding-left: 20px;
                        /*background: url("img/validfrom_right.png") no-repeat left center;*/
                        position: absolute;
                        left: 0;
                        top: 40px;
                        font-size: 12px;
                    }
                }
                .box {
                    margin-top: 30px;
                    input {
                        float: left;
                        width: 20px;
                        height: 20px;
                    }
                    p {
                        margin-left: 15px;
                        float: left;
                    }
                    a {
                        cursor: pointer;
                    }
                    .Validform_wrong {
                        top: 30px;
                    }
                    .Validform_right {
                        top: 30px;
                    }
                }
                .btn {
                    width: 140px;
                    height: 34px;
                    background: #064f97;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    margin-top: 51px;
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
