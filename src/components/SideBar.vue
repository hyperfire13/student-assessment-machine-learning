<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <router-link to="/" class="brand-link">
        <img
            src="../assets/logo.png"
            alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3"
            style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>

    <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img
                    
                    src="../assets/img/default-profile.png"
                    class="img-circle elevation-2"
                    alt="User Image"
                />
            </div>
            <div class="info">
                <a href="#">
                    Kenneth pogi hreehe
                </a>
            </div>
        </div>

        <nav class="mt-2">
            <ul
                class="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                <li class="nav-item">
                    <router-link
                        to="/"
                        class="nav-link"
                        exact
                        exact-active-class="active"
                    >
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        to="/file-uploading"
                        class="nav-link"
                        active-class="active"
                    >
                        <i class="nav-icon fas fa-file"></i>
                        <p>File Uploading</p>
                    </router-link>
                </li>
                <li class="nav-item">
                  
                </li>
            </ul>
        </nav>
    </div>
  </aside>
</template>

<script>
import 'admin-lte/plugins/jquery/jquery.min.js';
// npm install @types/jquery --save
import $ from 'jquery';
// import jQuery from 'jquery';

import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
 import 'admin-lte/dist/js/adminlte.js';
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<style>
  @import '~admin-lte/plugins/fontawesome-free/css/all.min.css';
  @import '~admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
  @import '~admin-lte/dist/css/adminlte.min.css';
</style>
