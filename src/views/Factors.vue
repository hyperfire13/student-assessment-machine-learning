<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="card card-primary col-md-8">
              <div class="card-header ui-sortable-handle" style="cursor: move;">
                <h3 class="card-title">
                  Sections
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <ul v-for="(factor, index) in factors" v-bind:key="factor.id" class="todo-list ui-sortable" data-widget="todo-list">
                  <li>
                    <!-- todo text -->
                    <span v-show="index !== selectedIndex" class="text"><b>{{factor.name}}</b></span>
                    <input :class="{ 'is-invalid': newFactorInvalid }" v-if="showEditText === true && index === selectedIndex" type="text" v-model="newFactorName" class="form-control" id="" placeholder="">
                    <br>
                    <ul v-for="(inv, child_index) in factor.interventions" v-bind:key="child_index">
                        <li>
                            <div v-show="index !== selectedIndex">{{inv.name}}</div>
                            <input :class="{ 'is-invalid': newInvInvalid }" v-if="showEditText === true && index === selectedIndex" type="text" v-model="inv.name" class="form-control" id="" placeholder="">
                        </li>
                    </ul>
                    <!-- General tools such as edit or delete-->
                    <div v-show="index !== selectedIndex" class="tools">
                      <i @click="editFactor(index, factor.id, factor.name)" class="fas fa-edit"></i>
                      <i @click="deleteFactor(factor.id)" class="fas fa-trash"></i>
                    </div>
                    <div v-if="showEditText === true && index === selectedIndex" class="tools">
                      <i @click="updateFactor(factor.id, newFactorName, factor.interventions)" class="fas fa-check text-success"></i>
                      <i @click="cancelEdit()" class="fas fa-window-close"></i>
                    </div>
                  </li>
                </ul>
                
              </div>
              <div v-if="nowLoading" class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <div class="form-group form-inline">
                <input  :class="{ 'is-invalid': newFactorInvalid }"  type="text" v-model="addFactorName" class="form-control col-md-6" id="" placeholder="">
                &nbsp;&nbsp;
                <button @click="addFactor(addFactorName)" type="button" class="btn btn-success float-right"><i class="fas fa-save"></i> Save Factor</button>
                &nbsp;&nbsp;&nbsp;
                <button @click="addIntervenstion()" type="button" class="btn btn-primary"><i class="fas fa-plus"></i> Add Intervention</button>
                </div>
                <div class="form-group form-inline">
                    <ul v-for="(inv, index) in interventions" v-bind:key="inv">
                        <li>
                            <input  :class="{ 'is-invalid': newInvInvalid }" v-model="inv.name"  type="text" class="form-control col-md-6" id="" placeholder="">
                            &nbsp;&nbsp;
                            <button @click="removeIntervention(index)" type="button" class="btn btn-sm btn-danger"><i class="fas fa-minus"></i> </button>
                        </li>
                    </ul>
                
                &nbsp;&nbsp;
                
                </div>
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
        factors: '',
        nowLoading: true,
        showEditText: false,
        newFactorName: '',
        selectedIndex: '',
        sectionInvalid: false,
        newFactorInvalid: false,
        factorInvalid: false,
        newInvInvalid: false,
        interventions: [],
        oldInterventions: ''
      }
    },
    mounted() {
      // get the sections
      let formData = new FormData();
      formData.append('userId', localStorage.getItem('userId'));
      formData.append('token', localStorage.getItem('validatorToken'));
      axios.post(
        process.env.VUE_APP_ROOT_API + 'admin/get-factors.php',formData,
        {
        headers: {
        'Content-Type': 'multipart/form-data', 
        }
      }
      ).then((response) => {
      var result = response.data
      if (result.status === 'success') {
        this.factors = result.factors
        for (let index = 0; index < this.factors.length; index++) {
          this.factors[index].interventions = JSON.parse(this.factors[index].interventions);
        }
        
      } else {
        this.factors = [];
      }
      this.nowLoading = false;
      }).catch((response) => {
        //handle error
        this.nowLoading = false;
        console.log(response)
      });
    },
    methods : {
      addFactor(name) {
        if (name === '') {
          this.newFactorInvalid = true;
        } else {
          let formData = new FormData();
          this.nowLoading = true;
          formData.append('userId', localStorage.getItem('userId'));
          formData.append('token', localStorage.getItem('validatorToken'));
          formData.append('factorName', name);
          formData.append('intervention', JSON.stringify(this.interventions));
          axios.post(
            process.env.VUE_APP_ROOT_API + 'admin/add-factor.php',formData,
            {
            headers: {
            'Content-Type': 'multipart/form-data', 
            }
          }
          ).then((response) => {
          var result = response.data
          if (result.status === 'success') {
            location.reload()
          }
          this.nowLoading = false;
          }).catch((response) => {
            //handle error
            this.nowLoading = false;
            console.log(response)
          });
        }
      },
      removeIntervention (index) {
        this.interventions.splice(index, 1);
      },
      addIntervenstion () {
        this.interventions.push({name:''});
      },
      editFactor(index, id, name) {
        this.selectedIndex = index;
        this.newFactorName = name;
        this.showEditText = true;
      },
      deleteFactor (id) {
        if (confirm('Are you sure you want to delete this factor?')) {
          let formData = new FormData();
          formData.append('userId', localStorage.getItem('userId'));
          formData.append('token', localStorage.getItem('validatorToken'));
          formData.append('factorId', id);
          axios.post(
            process.env.VUE_APP_ROOT_API + 'admin/delete-factor.php',formData,
            {
            headers: {
            'Content-Type': 'multipart/form-data', 
            }
          }
          ).then((response) => {
          var result = response.data
          if (result.status === 'success') {
            location.reload()
          }
          this.nowLoading = false;
          }).catch((response) => {
            //handle error
            this.nowLoading = false;
            console.log(response)
          });
        } else {
          // Do nothing!
          console.log('Thing was not saved to the database.');
        }
      },
      updateFactor (id, name, interventions) {
        if (name === '') {
          this.newFactorInvalid = true
        } else {
          this.nowLoading = true
          let formData = new FormData();
          formData.append('userId', localStorage.getItem('userId'));
          formData.append('token', localStorage.getItem('validatorToken'));
          formData.append('factorId', id);
          formData.append('factorName', name);
          formData.append('interventions', JSON.stringify(interventions));
          axios.post(
            process.env.VUE_APP_ROOT_API + 'admin/update-factor.php',formData,
            {
            headers: {
            'Content-Type': 'multipart/form-data', 
            }
          }
          ).then((response) => {
          var result = response.data
          if (result.status === 'success') {
            location.reload()
          }
          this.nowLoading = false;
          }).catch((response) => {
            //handle error
            this.nowLoading = false;
            console.log(response)
          });
        }
      },
      cancelEdit () {
        this.showEditText = false;
        this.selectedIndex = "";
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