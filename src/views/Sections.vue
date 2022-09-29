<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="card col-md-6">
              <div class="card-header ui-sortable-handle" style="cursor: move;">
                <h3 class="card-title">
                  <i class="ion ion-clipboard mr-1"></i>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <ul v-for="section in sections" v-bind:key="section.id" class="todo-list ui-sortable" data-widget="todo-list">
                  <li>
                    <!-- todo text -->
                    <span class="text">{{section.name}}</span>
                    <!-- General tools such as edit or delete-->
                    <div class="tools">
                      <i @click="editSection(section.id)" class="fas fa-edit"></i>
                      <i @click="deleteSection(section.id)" class="fas fa-trash"></i>
                    </div>
                  </li>
                </ul>
                
              </div>
              <div v-if="nowLoading" class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <button type="button" class="btn btn-primary float-right"><i class="fas fa-plus"></i> Add Section</button>
              </div>
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
    name: 'Sections',
    data() {
      return {
        sections: '',
        nowLoading: true
      }
    },
    mounted() {
      // get the sections
      let formData = new FormData();
      formData.append('userId', localStorage.getItem('userId'));
      formData.append('token', localStorage.getItem('validatorToken'));
      axios.post(
        process.env.VUE_APP_ROOT_API + 'admin/get-sections.php',formData,
        {
        headers: {
        'Content-Type': 'multipart/form-data', 
        }
      }
      ).then((response) => {
      var result = response.data
      if (result.status === 'success') {
        this.sections = result.sections
        alert(JSON.stringify(this.sections))
      } else {
        this.sections = [];
      }
      this.nowLoading = false;
      }).catch((response) => {
        //handle error
        this.nowLoading = false;
        console.log(response)
      });
    },
    methods : {
      editSection(id) {
        alert(id)
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