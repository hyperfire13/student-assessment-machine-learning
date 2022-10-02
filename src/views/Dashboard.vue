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
            <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="false">Results Table</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " id="custom-tabs-one-profile-tab" data-toggle="pill" href="#custom-tabs-one-profile" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="true">Top 3 Factors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#custom-tabs-one-messages" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Attrition Rate</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content" id="custom-tabs-one-tabContent">
          <div class="tab-pane fade active show" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
            <!-- results table -->
            <section class="content">
              <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header">
                        <!-- <h3 class="card-title">Students' Profile</h3> -->
                        <h3 class="card-title"> 
                          List of incoming second year College Student’s Progression
                          <button type="button" class="btn btn-info">
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
                      <!-- /.card-header -->
                      <div class="card-body table-responsive p-0" style="height: 500px;">
                        <div class="text-center">
                          <h4 >College of Computer Studies</h4>
                          <h5 class="card-text">Bachelor of Science in Information Technology (BSIT-1D SY 2022-2023)</h5>
                        </div>
                        <table class="table table-hover table-head-fixed text-nowrap table-bordered text-center">
                          <thead>
                            <tr>
                              <th>STUDENT ID</th>
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
                              <!-- <th>Student</th> -->
                              <!-- <th>Competency</th>
                              <th colspan="5">Module 1 (Simple Tenses)</th>
                              <th colspan="5">Module 2(Punctation)</th>
                              <th colspan="5">Module 3(Vocabulary)</th> -->
                              <!-- <th colspan="5">Module 4(Grammar)</th>
                              <th colspan="5">Module 5(Writing)</th>
                              <th colspan="5">Module 6(Writing)</th>
                              <th colspan="5">Module 7(Writing)</th>
                              <th colspan="5">Module 8(Vocab...)</th>
                              <th colspan="5">Module 9(Vocab...)</th>
                              <th colspan="5">Module 10(Vocab...)</th> -->
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>21-01069</td>
                              <td>BSIT-1D</td>
                              <td>22</td>
                              <td>Male</td>
                              <td>PR</td>
                              <td>9,520.00 - 19,040.00</td>
                              <td>Private</td>
                              <td>Others</td>
                              <td>81 - 84</td>
                              <td>1.99  - 1.50</td>
                              <td>1.99  - 1.50</td>
                              <td>1.99  - 1.50</td>
                              <td>2.49 - 2.00</td>
                              <td>1.99  - 1.50</td>
                              <td>2.50 - 3.00</td>
                              <td>Yes</td>
                              <td class="bg-success">YES</td>
                            </tr>
                            <tr>
                              <td>21-01100</td>
                              <td>BSIT-1D</td>
                              <td>22</td>
                              <td>Male</td>
                              <td>PR</td>
                              <td>9,520.00 - 19,040.00</td>
                              <td>Public</td>
                              <td>Others</td>
                              <td>85 - 89</td>
                              <td>2.50 - 3.00</td>
                              <td>2.50 - 3.00</td>
                              <td>2.50 - 3.00</td>
                              <td>2.49 - 2.00</td>
                              <td>below 3.00</td>
                              <td>below 3.00</td>
                              <td>No</td>
                              <td class="bg-danger">NO</td>
                            </tr>
                            <tr>
                              <td>21-01095</td>
                              <td>BSIT-1D</td>
                              <td>22</td>
                              <td>Female</td>
                              <td>PR</td>
                              <td>9,520.00 - 19,040.00</td>
                              <td>Public</td>
                              <td>Others</td>
                              <td>85 - 89</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>2.50 - 3.00</td>
                              <td>1.99  - 1.50</td>
                              <td>2.50 - 3.00</td>
                              <td>Yes</td>
                              <td class="bg-success">Continue</td>
                            </tr>
                            <tr>
                              <td>21-00951</td>
                              <td>BSIT-1D</td>
                              <td>22</td>
                              <td>Male</td>
                              <td>PR</td>
                              <td>19,041.00 - 38,080.00</td>
                              <td>Public</td>
                              <td>Others</td>
                              <td>85 - 89</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>2.50 - 3.00</td>
                              <td>1.99  - 1.50</td>
                              <td>2.50 - 3.00</td>
                              <td>No</td>
                              <td class="bg-success">Continue</td>
                            </tr>
                            <tr>
                              <td>21-00943</td>
                              <td>BSIT-1D</td>
                              <td>22</td>
                              <td>Female</td>
                              <td>PR</td>
                              <td>9,520.00 - 19,040.00</td>
                              <td>Private</td>
                              <td>STEM</td>
                              <td>90 - 95</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>1.99  - 1.50</td>
                              <td>2.50 - 3.00</td>
                              <td>No</td>
                              <td class="bg-success">Continue</td>
                            </tr>
                            <tr>
                              <td>21-00922</td>
                              <td>BSIT-1D</td>
                              <td>22</td>
                              <td>Male</td>
                              <td>PR</td>
                              <td>below 9,520.00</td>
                              <td>Private</td>
                              <td>TVL</td>
                              <td>81 - 84</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>2.50 - 3.00</td>
                              <td>below 3.00</td>
                              <td>below 3.00</td>
                              <td>No</td>
                              <td class="bg-danger">Stop</td>
                            </tr>
                            <tr>
                              <td>21-00965</td>
                              <td>BSIT-1D</td>
                              <td>22</td>
                              <td>Female</td>
                              <td>PR</td>
                              <td>below 9,520.00</td>
                              <td>Public</td>
                              <td>Others</td>
                              <td>90 - 95</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>1.99  - 1.50</td>
                              <td>2.49 - 2.00</td>
                              <td>2.49 - 2.00</td>
                              <td>2.50 - 3.00</td>
                              <td>No</td>
                              <td class="bg-success">Continue</td>
                            </tr>
                            <tr>
                              <td>21-00661</td>
                              <td>BSIT-1A</td>
                              <td>19</td>
                              <td>Female</td>
                              <td>PR</td>
                              <td>9,520.00 - 19,040.00</td>
                              <td>Private</td>
                              <td>TVL</td>
                              <td>90 - 95</td>
                              <td>1.99  - 1.50</td>
                              <td>1.99  - 1.50</td>
                              <td>1.99  - 1.50</td>
                              <td>2.49 - 2.00</td>
                              <td>1.99  - 1.50</td>
                              <td>2.49 - 2.00</td>
                              <td>NO</td>
                              <td class="bg-success">YES</td>
                            </tr>
                            <tr>
                              <td>21-00693</td>
                              <td>BSIT-1A</td>
                              <td>19</td>
                              <td>Female</td>
                              <td>PR</td>
                              <td>9,520.00 - 19,040.00</td>
                              <td>Public</td>
                              <td>TVL</td>
                              <td>75 - 80</td>
                              <td>1.49 - 1.00</td>
                              <td>1.99  - 1.50</td>
                              <td>1.49 - 1.00</td>
                              <td>1.99  - 1.50</td>
                              <td>1.99  - 1.50</td>
                              <td>2.49 - 2.00</td>
                              <td>NO</td>
                              <td class="bg-success">YES</td>
                            </tr>
                            <tr>
                              <td>21-00185</td>
                              <td>BSIT-1A</td>
                              <td>19</td>
                              <td>Male</td>
                              <td>PR</td>
                              <td>9,520.00 - 19,040.00</td>
                              <td>Public</td>
                              <td>STEM</td>
                              <td>90 - 95</td>
                              <td>1.49 - 1.00</td>
                              <td>1.99  - 1.50</td>
                              <td>1.49 - 1.00</td>
                              <td>1.99  - 1.50</td>
                              <td>1.99  - 1.50</td>
                              <td>2.49 - 2.00</td>
                              <td>NO</td>
                              <td class="bg-success">YES</td>
                            </tr>
                            <tr>
                              <td>21-00421</td>
                              <td>BSIT-1A</td>
                              <td>19</td>
                              <td>Male</td>
                              <td>PR</td>
                              <td>9,520.00 - 19,040.00</td>
                              <td>Private</td>
                              <td>STEM</td>
                              <td>85 - 89</td>
                              <td>1.99  - 1.50</td>
                              <td>2.49 - 2.00</td>
                              <td>1.99  - 1.50</td>
                              <td>1.99  - 1.50</td>
                              <td>1.99  - 1.50</td>
                              <td>below 3.00</td>
                              <td>NO</td>
                              <td class="bg-success">YES</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                  </div>
              </div>
            </section>
          </div>
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
  export default {
    name: 'Dashboard',
    mounted() {
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
  }
    }
  }
</script>

<style>
  @import '~admin-lte/plugins/fontawesome-free/css/all.min.css';
  @import '~admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
  @import '~admin-lte/dist/css/adminlte.min.css';

  #interventionTable tbody tr:nth-child(-n+3) {
    /* background: lightgreen; */
  }
</style>