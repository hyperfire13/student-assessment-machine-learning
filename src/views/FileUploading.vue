<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-6">
          <div class="card card-primary">
              <div class="card-header">
                  <h3 class="card-title">Exam Details</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                  <div class="card-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Subject</label>
                        <select class="form-control" v-model="selectedSubject">
                          <option selected value="0">Choose Subject</option>
                          <option  v-bind:key="subject.id" v-for="subject in subjects" :value="subject.id">{{subject.name}}</option>
                          </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Module</label>
                        <select class="form-control">
                            <option>Module 1 (Simple Tenses)</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                            <option>option 5</option>
                          </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Section</label>
                        <select class="form-control">
                            <option>Section 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                            <option>option 5</option>
                          </select>
                    </div>
                    <div class="form-group">
                      <div class="form-group">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                      </div>
                    </div>
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer">
                  <button type="submit" v-on:click="startAssessment()" class="btn btn-primary float-right">Start assessment</button>
                  </div>
              </form>
          </div>
        <!-- /.card -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import $ from 'jquery';
  import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
  import axios from 'axios';
  import 'admin-lte/dist/js/adminlte.js';

  export default {
    name: 'FileUploading',
    data() {
      return {
        subjects: [
          {name: 'English', id: 1},
          {name: 'Math', id: 2},
          {name: 'Filipino', id: 3},
        ],
        modules: '',
        sections:'',
        selectedSubject: 0
      }
    },
    mounted() {
      console.log(process.env.NODE_ENV)
      axios.get(process.env.VUE_APP_ROOT_API + 'api/get-source-codes.php')
      .then(response => {
        // JSON responses are automatically parsed.
        var posts = response.data
        alert(JSON.stringify(posts))
      })
      .catch(e => {
        
      })

      // fetch('api/get-source-codes.php')
      //   .then(async response => {
      //     const data = await response.json();

         
      //   })
      //   .catch(error => {
      //     this.errorMessage = error;
      //     console.log("There was an error!", error);
      //   });
    },
    methods : {
      startAssessment() {
        alert(this.selectedSubject);
      }
    }
  }
</script>

<style>
  /* @import '~admin-lte/plugins/fontawesome-free/css/all.min.css';
  @import '~admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
  @import '~admin-lte/dist/css/adminlte.min.css'; */
</style>