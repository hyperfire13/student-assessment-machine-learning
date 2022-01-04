<template>
   <!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <!-- <h1>Module 1 - Future Tense</h1> -->
            </div>
           
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Learning Outcomes</h3>

              <div class="card-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                  <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                  <div class="input-group-append">
                    <button type="submit" class="btn btn-default">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body table-responsive p-0" style="height: 500px;">
              <table class="table table-head-fixed text-nowrap table-bordered text-center">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Competency</th>
                    <th colspan="5">Module 1 (Simple Tenses)</th>
                    <th colspan="5">Module 2(Punctation)</th>
                    <th colspan="5">Module 3(Vocabulary)</th>
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
                    <td></td>
                    <td></td>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th>
                    <!-- <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Average</th>
                    <th>Result</th> -->
                  </tr>
                  <tr>
                    <td>Adams Bob</td>
                    <td><button v-on:click="showCompetency()" type="button" class="btn btn-sm  btn-primary"><i class="fas fa-chart-bar "></i></button></td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>100%</td>
                    <td class="bg-success">Good</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>100%</td>
                    <td class="bg-success">Good</td>
                   
                  </tr>
                  <tr>
                    <td>Bell Jim</td>
                    <td><button type="button" class="btn btn-sm  btn-primary"><i class="fas fa-chart-bar "></i></button></td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>70%</td>
                    <td class="bg-success">Good</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                  </tr>
                  <tr>
                    <td>Carter John</td>
                    <td><button type="button" class="btn btn-sm  btn-primary"><i class="fas fa-chart-bar "></i></button></td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td>14.3%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                  </tr>
                  <tr>
                    <td>Doe Michael</td>
                    <td><button type="button" class="btn btn-sm  btn-primary"><i class="fas fa-chart-bar "></i></button></td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>100%</td>
                    <td class="bg-success">Good</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>100%</td>
                    <td class="bg-success">Good</td>
                  </tr>
                  <tr>
                    <td>Ellis Mike</td>
                    <td><button type="button" class="btn btn-sm  btn-primary"><i class="fas fa-chart-bar "></i></button></td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td>14.3%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                  </tr>
                  <tr>
                    <td>Fay Rocky</td>
                    <td><button type="button" class="btn btn-sm  btn-primary"><i class="fas fa-chart-bar "></i></button></td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>70%</td>
                    <td class="bg-success">Good</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                  </tr>
                  <tr>
                    <td>Garen Victoria</td>
                    <td><button type="button" class="btn btn-sm  btn-primary"><i class="fas fa-chart-bar "></i></button></td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>70%</td>
                    <td class="bg-success">Good</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                  </tr>
                  <tr>
                    <td> <div class="image">
                    </div>Harrison Alexander</td>
                    <td><button type="button" class="btn btn-sm  btn-primary"><i class="fas fa-chart-bar "></i></button></td>
                    <td>7</td>
                    <td>7</td>
                    <td>7</td>
                    <td>70%</td>
                    <td class="bg-success">Good</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                    <td>7</td>
                    <td>5</td>
                    <td>2</td>
                    <td>47%</td>
                    <td class="bg-danger">N.I.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
      <!-- /.row -->
    <!-- /.container-fluid -->
</section>
<!-- /.content -->

<section class="content">
  <div class="card">
    <div class="card-header border-0">
      <div class="d-flex justify-content-between">
        <h3 class="card-title">Sales</h3>
        <a href="javascript:void(0);">View Report</a>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex">
        <p class="d-flex flex-column">
          <span class="text-bold text-lg">$18,230.00</span>
          <span>Sales Over Time</span>
        </p>
        <p class="ml-auto d-flex flex-column text-right">
          <span class="text-success">
            <i class="fas fa-arrow-up"></i> 33.1%
          </span>
          <span class="text-muted">Since last month</span>
        </p>
      </div>
      <!-- /.d-flex -->

      <div class="position-relative mb-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <canvas id="sales-chart" height="200" style="display: block; width: 487px; height: 200px;" width="487" class="chartjs-render-monitor"></canvas>
      </div>

      <div class="d-flex flex-row justify-content-end">
        <span class="mr-2">
          <i class="fas fa-square text-primary"></i> This year
        </span>

        <span>
          <i class="fas fa-square text-gray"></i> Last year
        </span>
      </div>
    </div>
  </div>
</section>
<!-- /.content -->

<section class="content">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Learning Distribution</h3>
      
      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-card-widget="collapse">
          <i class="fas fa-minus"></i>
        </button>
        <button type="button" class="btn btn-tool" data-card-widget="remove">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label>Section:</label>
            <select class="form-control">
              <option>Section 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
          <div class="form-group">
            <label>Module:</label>
            <select class="form-control">
              <option>Simple Tenses</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="chart-responsive">
            <canvas id="pieChart" height="150"></canvas>
          </div>
          <!-- ./chart-responsive -->
        </div>
        <!-- /.col -->
        <div class="col-md-3">
          <ul class="chart-legend clearfix">
            <li><i class="far fa-circle text-danger"></i> Needs Improvement : 30%</li>
            <li><i class="far fa-circle text-success"></i> Good : 70%</li>
          </ul>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.card-body -->

    <!-- /.footer -->
  </div>
</section>

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
import jQuery from 'jquery';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
// import 'admin-lte/dist/js/adminlte.js';
import 'admin-lte/plugins/chart.js/Chart.min.js';
  export default {
    name: 'SideBar',
    mounted() {
      //-------------
      // - PIE CHART -
      //-------------
      // Get context with jQuery - using jQuery's .get() method.
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const canvas =document.getElementById('pieChart');
      const pieChartCanvas = canvas.getContext('2d');
      const pieData = {
        labels: ['Needs Improvement', 'Good'],
        datasets: [
          {
            data: [30, 70],
            backgroundColor: ['#f56954', '#00a65a']
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

      $(function () {
        'use strict';

        const ticksStyle = {
          fontColor: '#495057',
          fontStyle: 'bold'
        };

        const mode = 'index';
        const intersect = true;

        const $salesChart = $('#sales-chart');
        // eslint-disable-next-line no-unused-vars
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const salesChart = new Chart($salesChart, {
          type: 'bar',
          data: {
            labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [
              {
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
              },
              {
                backgroundColor: '#ced4da',
                borderColor: '#ced4da',
                data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
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

                      // Include a dollar sign in the ticks
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      callback: function (value) {
                        if (value >= 1000) {
                          value /= 1000;
                          value += 'k';
                        }

                        return '$' + value;
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
    },
    methods: {
      showCompetency() {
      alert('haha')
      }
    }
  }
</script>

<style>
  @import '~admin-lte/plugins/fontawesome-free/css/all.min.css';
  @import '~admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
  @import '~admin-lte/dist/css/adminlte.min.css';
</style>