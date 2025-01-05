<template>
  <nav class="navbar navbar-expand-lg menu-general-container">
    <div class="container-fluid">
      <img alt="kymatio logo" class="navbar-brand" src="https://kymatio.com/img/kymatio170.png" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link" active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link" active-class="active">Profile</router-link>
          </li>
        </ul>

        <router-link to="/login" class="btn btn-lg menu-logout-button" aria-current="page">
          <i class="bi bi-box-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style>
.menu-general-container {
  border-bottom: 2px solid var(--primary-color);
}

.navbar-brand {
  height: 36px;
}

.navbar-toggler {
  color: #ffffff;
  background-color: var(--primary-color);
  font-size: 30px;
}

.menu-logout-button {
  color: #ffffff !important;
  background-color: var(--primary-color) !important;
}

</style>
<script setup lang="ts">
</script>
