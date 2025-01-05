<template>
  <div class="d-flex justify-content-center align-items-center h-100 login-general-container">
    <form class="bg-white p-5 d-flex flex-column gap-4 login-form-container">
      <img alt="kymatio logo" id="kymatioLogo" class="m-auto" src="https://kymatio.com/img/kymatio170.png" />
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="check">
        <label class="form-check-label" for="check">Check me out</label>
      </div>
      <router-link to="/home" id="loginButton" class="btn text-white" aria-current="page">Submit</router-link>
    </form>
  </div>
</template>

<style>
.login-general-container {
  background-color: var(--primary-color);
}

.login-form-container {
  width: 400px;
}

#kymatioLogo {
  height: 40px;
}

#loginButton {
  background-color: var(--primary-color);
}
</style>

<script setup lang="ts">

</script>
