<template>
  <!-- Content Header (Page header) -->
  <!-- <div class="content-header">
      <div class="container-fluid">
          <div class="row mb-2">
              <div class="col-sm-6">
                  <h1>Module 1 - Future Tense</h1>
              </div>
          </div>
      </div>
  </div> -->
  <!-- /.content-header -->

  <!-- Main content -->
  <section class="content">
    <div class="card card-primary card-tabs">
      <div class="card-header p-0 pt-1">
        <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
          <li class="nav-item">
            <a v-on:click="switchTab(1)" class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="false">Results Table</a>
          </li>
          <li class="nav-item">
            <a v-on:click="switchTab(2)" class="nav-link " id="custom-tabs-one-profile-tab" data-toggle="pill" href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="true">Top 3 Factors</a>
          </li>
          <li v-on:click="switchTab(3)" class="nav-item">
            <a class="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Attrition Rate</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
          <!-- results tab  -->
          <div class="tab-pane fade active show" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
            <!-- results table -->
            <section class="content">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <div class="row">
                        <div class="col-md-12">
                          <!-- <h3 class="card-title">Students' Profile</h3> -->
                          <h3 class="card-title"> 
                            List of incoming second year College Student’s Progression
                            <button :disabled="finalResults.length === 0"  @click="downloadReport(selectedYear, selectedSection)" type="button" class="btn btn-info">
                              <i class="fas fa-download"></i>
                            </button>
                          </h3>
                          <div class="form-inline float-right">
                            <div class="form-group mb-2">
                              <label class="" for="autoSizingCheck">
                                  SY: &nbsp;
                                </label>
                                <select v-on:change="showFinalResults()" v-model="selectedYear"  class="form-control">
                                  <option value="">choose a year</option>
                                  <option v-for="(sy, index) in schoolYear" :key="index" v-bind:value="sy.id"> {{sy.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mx-sm-3 mb-2">
                              <select :disabled="finalResults.length === 0" v-model="selectedSection"  class="form-control">
                                  <option value="">All sections</option>
                                  <option v-for="(section, index) in sections" :key="index" v-bind:value="section.name"> {{section.name}}</option>
                                </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0" style="height: 800px;">
                      <div v-if="finalResults.length === 0" class="text-center">
                        <h5>No records to show</h5>
                        <h7>(Please choose school year and section)</h7>
                      </div>
                      <div v-if="finalResults.length > 0" class="text-center">
                        <h4>College of Computer Studies</h4>
                        <h5 class="card-text">Bachelor of Science in Information Technology (BSIT-1D SY 2022-2023)</h5>
                      </div>
                        <table v-if="finalResults.length > 0" class="table table-hover table-head-fixed  text-nowrap table-bordered text-center">
                          <thead>
                            <tr>
                              <th class="sticky-header">STUDENT ID</th>
                              <th>SECTION</th>
                              <th>AGE</th>
                              <th>GENDER</th>
                              <th>RESIDENCY CATEGORY</th>
                              <th>PARENT'S MONTHLY INCOME</th>
                              <th>LAST SCHOOL ATTENDED(High School)</th>
                              <th>TRACK</th>
                              <th>GWA Grade 11 and 12 </th>
                              <th>MATHEMATICS IN THE MODERN WORLD</th>
                              <th>INTRODUCTION TO COMPUTING</th>
                              <th>FUNDAMENTALS OF PROGRAMMING (C++)</th>
                              <th>PURPOSIVE COMMUNICATION</th>
                              <th>INTERMEDIATE PROGRAMMING(Java)</th>
                              <th>DISCRETE MATHEMATICS</th>
                              <th>MEMBER OF ANY SCHOOl ORGANIZATION</th>
                              <th>WILL CONTINUE?</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(result, index) in filteredResults" :key="index">
                              <td>{{result[0]}}</td>
                              <td>{{result[1]}}</td>
                              <td>{{result[2]}}</td>
                              <td>{{result[3]}}</td>
                              <td>{{result[4]}}</td>
                              <td>{{result[5]}}</td>
                              <td>{{result[6]}}</td>
                              <td>{{result[7]}}</td>
                              <td>{{result[8]}}</td>
                              <td>{{result[9]}}</td>
                              <td>{{result[10]}}</td>
                              <td>{{result[11]}}</td>
                              <td>{{result[12]}}</td>
                              <td>{{result[13]}}</td>
                              <td>{{result[14]}}</td>
                              <td>{{result[5]}}</td>
                              <td :class="{ 'bg-success': result[16] === 'Continue', 'bg-danger': result[16] === 'Stop'}" >{{result[16]}}</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div v-if="nowLoading" class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
              </div>
            </section>
          </div>
          <!-- factors tab -->
          <div class="tab-pane fade " id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
              <!-- factors -->
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Factors Affecting Attrition Rate and Interventions (Top 3)</h3>
                    <div class="card-tools">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-inline" >
                                <label class="" for="autoSizingCheck">
                                  SY: &nbsp;
                                </label>
                                <select class="form-control">
                                    <option>2022-2023</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                    <option>option 4</option>
                                    <option>option 5</option>
                                  </select>
                                
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-inline" >
                                <select class="form-control" style="width: 190px;">
                                  <option>BSIT-1D</option>
                                  <option>BSIT-1A</option>
                                  <option>option 2</option>
                                  <option>option 3</option>
                                  <option>option 4</option>
                                  <option>option 5</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  <div class="card-body table-responsive p-0">
                    <table id="interventionTable"  class="table table-bordered table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th>Factor</th>
                          <th>Possible Intervention</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Intermediate Programming (Java)</td>
                          <td>Student Teacher Coaching</td>
                        </tr>
                        <tr>
                          <td>Purposive Communication</td>
                          <td>Student Teacher Coaching</td>
                        </tr>
                        <tr>
                          <td>Fundamentals of Programming (C++)</td>
                          <td>Student Teacher Coaching</td>
                        </tr>
                        <tr>
                          <td>175</td>
                          <td>Mike Doe</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="custom-tabs-one-messages" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
            <section class="content">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  Possible Attrition Rate
                  <button type="button" class="btn btn-info btn-sm">
                    <i class="fas fa-download"></i>
                  </button>
                </h3>
                <div class="card-tools">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-inline" >
                        <label class="" for="autoSizingCheck">
                          SY: &nbsp;
                        </label>
                        <select class="form-control">
                            <option>2022-2023</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                            <option>option 5</option>
                          </select>
                        
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-inline" >
                        <select class="form-control" style="width: 190px;">
                          <option>BSIT-1D</option>
                          <option>BSIT-1A</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="chart-responsive">
                      <canvas id="pieChart" height="150"></canvas>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <ul class="chart-legend clearfix">
                      <li><i class="far fa-circle text-warning"></i> Total Number of Students :160</li>
                      <li><i class="far fa-circle text-success"></i> Students who will continue : 92.5% (148 students)</li>
                      <li><i class="far fa-circle text-danger"></i> Students who will stop :  7.5% (12 students)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /.content -->
  <div class="modal fade" id="modal-default">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Adams Bob</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-header border-0">
              <div class="d-flex justify-content-between">
                <h3 class="card-title">Competency Chart</h3>
                <!-- <a href="javascript:void(0);">View Report</a> -->
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex">
                
              </div>
              <!-- /.d-flex -->
        
              <div class="position-relative mb-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                <canvas id="competency-chart" height="200" style="display: block; width: 487px; height: 200px;" width="487" class="chartjs-render-monitor"></canvas>
              </div>
        
              <div class="d-flex flex-row justify-content-end">
                <span class="mr-2">
                  <i class="fas fa-square text-success"></i> Good
                </span>
        
                <span class="mr-2">
                  <i class="fas fa-square text-danger"></i> Needs Improvement
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->

</template>

<script>
  import $ from 'jquery';
  import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
  import 'admin-lte/dist/js/adminlte.js';
  import 'admin-lte/plugins/chart.js/Chart.min.js';
  import axios from 'axios';
  export default {
    name: 'Dashboard',
     data() {
      return {
        selectedYear:"",
        selectedSection:'',
        sections: [],
        schoolYear: [],
        finalResults: [],
        nowLoading: false,
      }
    },
    mounted() {
      this.getSchoolYear();
      this.getSections();
      //-------------
      // - PIE CHART -
      //-------------
      // Get context with jQuery - using jQuery's .get() method.
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const canvas =document.getElementById('pieChart');
      const pieChartCanvas = canvas.getContext('2d');
      const pieData = {
        labels: ['Will Continue', 'Will Stop'],
        datasets: [
          {
            data: [148, 12],
            backgroundColor: ['#00a65a', '#f56954']
          }
        ]
      };
      const pieOptions = {
        legend: {
          display: false
        }
      };
      // Create pie or douhnut chart
      // You can switch between pie and douhnut using the method below.
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const pieChart = new Chart(pieChartCanvas, {
        type: 'doughnut',
        data: pieData,
        options: pieOptions
      });

      //-----------------
      // - END PIE CHART -
      //-----------------y
    },
    methods: {
      showCompetency() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        $('#modal-default').modal('show')
        setTimeout(function () {
          $(function () {
            'use strict';
            const ticksStyle = {
              fontColor: '#495057',
              fontStyle: 'bold'
            };

            const mode = 'index';
            const intersect = true;

            const $competencyChart = $('#competency-chart');
            // eslint-disable-next-line no-unused-vars
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const competencyChart = new Chart($competencyChart, {
              type: 'bar',
              data: {
                labels: ['Module 1 (Simple Tenses) 47%', 'Module 2 (Punctation) 88%', 'Module 3 (Vocabulary) 67%'],
                datasets: [
                  {
                    label: 'Average Percentage',
                    backgroundColor: ['#DC3545', '#28A745', '#28A745'],
                    borderColor: '#007bff',
                    data: [47, 88, 67]
                  }
                ]
              },
              options: {
                maintainAspectRatio: false,
                tooltips: {
                  mode: mode,
                  intersect: intersect
                },
                hover: {
                  mode: mode,
                  intersect: intersect
                },
                legend: {
                  display: false
                },
                scales: {
                  yAxes: [
                    {
                      // display: false,
                      gridLines: {
                        display: true,
                        lineWidth: '4px',
                        color: 'rgba(0, 0, 0, .2)',
                        zeroLineColor: 'transparent'
                      },
                      ticks: $.extend(
                        {
                          beginAtZero: true,
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore
                          callback: function (value) {
                            return value + '%';
                          }
                        },
                        ticksStyle
                      )
                    }
                  ],
                  xAxes: [
                    {
                      display: true,
                      gridLines: {
                        display: false
                      },
                      ticks: ticksStyle
                    }
                  ]
                }
              }
            });
          });
        }, 2000);
      },
      switchTab(tab) {
        this.getSchoolYear();
        alert(tab)
      },
      getResults() {
        
      },
      getSchoolYear() {
        // get the sections
        let formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('token', localStorage.getItem('validatorToken'));
        axios.post(
          process.env.VUE_APP_ROOT_API + 'admin/get-year-for-dashboard.php',formData,
          {
          headers: {
          'Content-Type': 'multipart/form-data', 
          }
        }
        ).then((response) => {
        var result = response.data
        if (result.status === 'success') {
          this.schoolYear = result.sections
        } else {
          this.schoolYear = [];
        }
        this.nowLoading = false;
        }).catch((response) => {
          //handle error
          this.nowLoading = false;
          console.log(response)
        });
      },
      getSections() {
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
      showFinalResults() {
        this.nowLoading = true;
        // get the sections
        let formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('token', localStorage.getItem('validatorToken'));
        formData.append('selectedYear', this.selectedYear);
        axios.post(
          process.env.VUE_APP_ROOT_API + 'admin/get-final-results.php',formData,
          {
          headers: {
          'Content-Type': 'multipart/form-data', 
          }
        }
        ).then((response) => {
          var result = response.data
          if (result.status === 'success') {
            this.finalResults = result.results
            console.log(JSON.stringify(this.finalResults))
          } else {
            this.finalResults = [];
          }
          this.nowLoading = false;
        }).catch((response) => {
          //handle error
          this.nowLoading = false;
          console.log(response)
        });
      },
      downloadReport(selectedYear, selectedSection) {
        // get the sections
        this.nowLoading = true;
        let formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('token', localStorage.getItem('validatorToken'));
        formData.append('selectedYear', selectedYear);
        formData.append('selectedSection', selectedSection);
        axios.post(
          process.env.VUE_APP_ROOT_API + 'admin/download-report.php',formData,
          {
          headers: {
          'Content-Type': 'multipart/form-data', 
          }
        }
        ).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'report.csv');
          document.body.appendChild(link);
          link.click();
          this.nowLoading = false;
        }).catch((response) => {
          //handle error
          this.nowLoading = false;
          console.log(response)
        });
      },
    },
    computed: {
      filteredResults: function () {
        let filterSection = this.selectedSection
        return this.finalResults.filter(function(item) {
          let filtered = true
          if(filterSection && filterSection.length > 0){
            filtered = item[1] == filterSection
          }
          return filtered
        })
      }
    }
  }
</script>

<style>
  @import '~admin-lte/plugins/fontawesome-free/css/all.min.css';
  @import '~admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
  @import '~admin-lte/dist/css/adminlte.min.css';

  table td:first-child {
    position: sticky;
    left: 0;
    background-color: #1f67c5;
    color: #ffffff;
  }
  .sticky-header {
    z-index: 9 !important;
    position: sticky !important;
    left: 0;
    background-color: #ffffff;
    color: #373737;
  }
  /* table td:last-child {
    position: sticky;
    right: 0;
    background-color: #ffffff;
    color: #373737;
  } */
  table th:first-child {
    position: sticky;
    left: 0 !important;
    background-color: #ffffff !important;
    color: #373737 !important;
  }
</style>