<template>
  <div class="page-login">
    <div class="login-box">
      <div class="login-title">
        <h3>博客后台</h3>
        <p>登录</p>
      </div>
      <div class="login-form">
        <el-form label-position="top" :model="loginForm" :rules="loginRule" ref="loginForm">
          <el-form-item prop="username">
            <el-input placeholder="用户名" type="text" v-model="loginForm.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" type="password" v-model="loginForm.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        loginRule: {
          username: [{
            required: true,
            message: '请填写用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          }, {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }]
        },
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      handleSubmit (formName) {
        this.$refs[formName].validate( (valid) => {
          if (valid) {
            console.log('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    background-color: #f7f7f7;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .page-login {
    padding-top: 100px;
  }
  .login-title {
    color: #2a323c;
    text-align: center;
    padding: 20px 0 0;
    h3 {
      border-bottom: 1px solid #eef1f6;
      padding: 0 0 10px 0;
    }
    p {
      font-weight: bold;
      color: #898989;
      margin: 0;
    }
  }
  .login-box {
    margin: 0 auto;
    max-width: 400px;
    border-radius: 5px;
    background-color: #fff;
  }
  .login-form {
    padding: 20px 30px;
    border: 0;
    button {
      display: block;
      width: 100%;
    }
  }
</style>
