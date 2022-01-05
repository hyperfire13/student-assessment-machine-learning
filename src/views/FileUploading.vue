<template>
  <section class="content-header">
  <div class="container-fluid">
      <div class="row mb-2">
          <div class="col-sm-6">
              <h1>Students' Score Uploading</h1>
          </div>
          <div class="col-sm-6">
              <!-- <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                      <router-link to="/">Home</router-link>
                  </li>
                  <li class="breadcrumb-item active">User Profile</li>
              </ol> -->
          </div>
      </div>
  </div>
  <!-- /.container-fluid -->
</section>

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
                        <select class="form-control">
                            <option>English</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                            <option>option 5</option>
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
                    <label for="exampleInputFile">Student Examination Scores (must be in csv / xlsx format)</label>
                    <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                    </div>
                    </div>
                </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                <button type="submit" class="btn btn-primary float-right">Start assessment</button>
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
export default {

}
</script>

<style>

</style>