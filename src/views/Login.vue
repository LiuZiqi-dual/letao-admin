<template>
     <div class="login">
    <div class="container">
      <img src="" alt="" class="avatar">
      <el-form :model="loginForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"  prefix-icon="myicon myicon-user" placeholder="请输入用户名"  ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="myicon myicon-key" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submitForm('ruleForm')">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="bjBox"></div>
  </div>
</template>

<script>
import { getLoginData } from '@/api/index.js'
export default {
  data () {
    return {
      loginForm: {
        username: 'root',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          // console.log(this.loginForm) 发送的密码和账号
          getLoginData(this.loginForm).then(res => {
            // console.log(res) 正确就返回success: true
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// 大盒子样式
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background:linear-gradient(to right top,rgb(174, 27, 204),#782bc0,rgb(31, 194, 194));
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 30px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    border-radius: 50px;
    z-index:1;
    //  图片样式
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 5px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    // 按钮样式
    .login-btn {
      width: 100%;
      border-radius: 30px;
    }
  }
  .bjBox{
    width: 600px;
    height: 600px;
    position: absolute;
    background:linear-gradient(to right,rgb(174, 27, 204),#782bc0,rgb(31, 194, 194));
    // background: #0a0;
   top:50%;
   left:50%;
    margin: -300px 0 0 -300px;
    border-radius: 100px;
    animation: bjBox infinite 3s;
  }
  @keyframes bjBox{
            0%{

            }
            50%{
              transform: rotate(360deg) scale(.8,.8);
              border-radius: 50%;
            }
            100%{
                transform: rotate(360deg);
            }
        }
}
</style>
