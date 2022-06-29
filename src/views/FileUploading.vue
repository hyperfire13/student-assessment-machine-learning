<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-6">
          <div class="card card-primary">
              <div class="card-header">
                  <h3 class="card-title">Students' Profile</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                  <div class="card-body">
                    <!-- <div class="form-group">
                        <label>Subject</label>
                        <select class="form-control" v-model="selectedSubject">
                          <option selected value="0">Choose Subject</option>
                          <option  v-bind:key="subject.id" v-for= "subject in subjects" :value="subject.id">{{subject.name}}</option>
                          </select>
                    </div>
                    <div class="form-group">
                      <label>Module</label>
                      <select class="form-control" v-model="selectedModule">
                        <option selected value="0">Choose Module</option>
                        <option  v-bind:key="mod.id" v-for="mod in modules" :value="mod.id">{{mod.name}}</option>
                        </select>
                    </div> -->
                    <!-- <div class="form-group">
                        <label>Section</label>
                        <select class="form-control" v-model="selectedSection">
                            <option selected value="0">Choose Section</option>
                            <option  v-bind:key="section.id" v-for="section in sections" :value="section.id">{{section.name}}</option>
                          </select>
                    </div> -->
                    <div class="form-group">
                      <div class="form-group">
                        <input ref="file" v-on:change="getUploadedFile()" type="file" class="form-control-file" id="exampleFormControlFile1">
                      </div>
                    </div>
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer">
                  <button type="submit" v-on:click="startAssessment()" class="btn btn-primary float-right">Upload</button>
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
        modules: [
          {name: 'Module 1 (Vocabulary)', id: 1},
          {name: 'Module 2 (Simple Tenses)', id: 2},
          {name: 'Module 3 (Preposition)', id: 3},
        ],
        sections:[
          {name: 'Section 1', id: 1},
          {name: 'Section 2', id: 2},
          {name: 'Section 3', id: 3},
        ],
        file: '',
        selectedSubject: 0,
        selectedModule: 0,
        selectedSection: 0
      }
    },
    mounted() {
      // axios.get(process.env.VUE_APP_ROOT_API + 'api/get-source-codes.php')
      // .then(response => {
      //   // JSON responses are automatically parsed.
      //   var posts = response.data
      //   alert(JSON.stringify(posts))
      // })
      // .catch(e => {
        
      // })
      

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
        // check if subject, module and a section was selected
        if (this.selectedSubject === 0) {
          alert('Please select a subject')
        }
        else if (this.selectedModule === 0) {
          alert('Please select a module')
        }
        else if (this.selectedSection === 0) {
          alert('Please select a section')
        } else {
          let formData = new FormData();
          formData.append('file', this.file);
          formData.append('selectedSubject', this.selectedSubject);
          formData.append('selectedModule', this.selectedModule);
          formData.append('selectedSection', this.selectedSection)
          axios({
            method: 'post',
            url: process.env.VUE_APP_ROOT_API + 'save-assessment-result.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then(function (response) {
            var posts = response.data
            alert(JSON.stringify(posts))
            
          })
          .catch(function (response) {
            //handle error
            console.log(response)
          });
        }
      },
      getUploadedFile(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

<style>
  /* @import '~admin-lte/plugins/fontawesome-free/css/all.min.css';
  @import '~admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
  @import '~admin-lte/dist/css/adminlte.min.css'; */
</style>