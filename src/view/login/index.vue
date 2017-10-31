<template>
    <div class="form">
      
        <!--<el-form ref="form" :model="UserForm" :rules="this.$store.state.userinfo.CheckRules" label-position="left" label-width="180px">
            <el-form-item label="真实姓名" prop="truename">
                <el-input v-model="UserForm.truename"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model="UserForm.age"></el-input>
            </el-form-item>
            <el-form-item label="出生年月">
                <el-date-picker type="date" placeholder="选择日期"
                                v-model="UserForm.birthday">

                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitInfo">提交</el-button>
            </el-form-item>
        </el-form>-->
        <div  class="login">
        <div class="alter">
            <div class="alterLeft">
                <div class="alterLeftContain">
                    <div class="ipt">
                        <input type="text" ms-duplex="username" placeholder="请输入手机号"  />
                        <div></div>
                    </div>
                    <div class="ipt">
                        <input type="password" ms-duplex="password" placeholder="密码"  id="password"/>
                        <div></div>
                    </div>
                    <div class="ipt">
                        <input type="text" ms-duplex="yzm" placeholder="验证码" class="yanzheng"   id="passwd"/>
                        <!--<img ms-src="{{yzmCode}}" @click="reloadcode" class="btn1" />-->
                        <div></div>
                    </div>
                    <h1>
                        <!--<input type="checkbox" verification="checkbox" vok="45644" vno="1234">记住密码<span><a href="#!/forget/forget">忘记密码</a></span>-->
                        <input type="checkbox" name="remember" id="loginRem"/>记住密码<span><a href="#!/forget/forget">忘记密码</a></span>
                        <div></div>
                    </h1>
                    <div class="ipt" style="text-align: center;">
                        <button class="btn2" ms-click="login">登陆</button>
                    </div>
                    <h2>还没有账号？<a href="#!/register/register">立即注册</a></h2>
                </div>
            </div>
            <div class="alterRight"></div>
        </div>
    </div>
    </div>

</template>

<style>
    .form{margin-top: 20px;}
</style>

<script>
    export default {
        created(){
            // this.UserForm = this.$store.state.userinfo.UserForm;
        },

        beforeDestory(){
            // this.$store.state.userinfo.UserForm=this.UserForm;
        },

        data() {
            return {
                UserForm: {
                    truename: '',
                    age: '',
                    birthday: ''
                }
            };
        },

        methods:{
            submitInfo(){
                // 表单验证方法
                this.$refs.form.validate(function (result) {
                    if(result){
                        // 验证通过,调用module里的setUserInfo方法
                        this.$store.dispatch("setUserInfo");
                    }else{
                        alert("表达验证不合法")
                    }
                }.bind(this));
            }
        },
    }
</script>
<style lang="scss" scoped>
body{
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
                        .ipt {
                            width: 320px;
                            margin-top: 54px;
                            position: relative;
                            input{
                                width:100%;
                            }
                            .btn2 {
                                width: 140px;
                                height: 34px;
                                background: #064f97;
                                color: #fff;
                                border: none;
                                cursor: pointer;
                            }
                            .ipt1 {
                                border: none;
                                height: 34px;
                                border-bottom: 1px solid gray;
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