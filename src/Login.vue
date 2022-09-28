!<template>
  <body class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <h3 >Student Assessment </h3>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg"></p>

          <form action="../../index3.html" method="post">
          
            <div class="input-group mb-3">
              <input :class="{ 'is-invalid': loginInvalid }" v-model="username" type="email" class="form-control" placeholder="Email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input :class="{ 'is-invalid': loginInvalid }" v-model="password" type="password" class="form-control" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
          </form>

          <div class="social-auth-links text-center mb-3">
            <button v-on:click="login(username, password)" class="btn btn-block btn-primary">
              Login
            </button>
          </div>
          <p class="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p class="mb-0">
            <a href="register.html" class="text-center">Register a new membership</a>
          </p>
        </div>
        <!-- /.login-card-body -->
        <div v-if="nowLoading" class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>
      </div>
    </div>
  <!-- /.login-box -->
  </body>
</template>

<script>
import axios from 'axios';
export default {
  
    name: 'FileUploading',
    data() {
      return {
        username: "",
        password: "",
        loginInvalid: 0,
        nowLoading: false
      }
    },
    mounted() {

    },
    methods : {
      login(username, password) {
        this.loginInvalid = 1;
        this.nowLoading = true;
        let formData = new FormData();
          formData.append('username', username)
        axios({
            method: 'post',
            url: process.env.VUE_APP_ROOT_API + 'login.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then(function (response) {
            var posts = response.data
            alert(JSON.stringify(posts))
            // this.$router.push('/home')
          })
          .catch(function (response) {
            //handle error
            console.log(response)
          });
      },
      getUploadedFile(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

<style>
  @import '~admin-lte/plugins/fontawesome-free/css/all.min.css';
  @import '~admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
  @import '~admin-lte/dist/css/adminlte.min.css';
</style>