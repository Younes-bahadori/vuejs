<template>
  <div class="d-flex  container mt-5 pt-5  align-items-center flex-column flex-lg-row justify-content-lg-center">
    <div class="" v-if="loginMode">
      <div class="mb-3">
        <label for="loginEmail" class="form-label"
        >Email address</label
        >
        <input
            type="email"
            class="form-control"
            id="loginEmail"
            placeholder="name@example.com"
            v-model="form.email"
        />
      </div>
      <div class="mb-3">
        <label for="loginPassword" class="form-label"
        >Password</label
        >
        <input
            type="password"
            class="form-control"
            id="loginPassword"
            v-model="form.password"

        />
      </div>
      <div class="">
        <button class="btn btn-primary w-100" @click="login">Login</button>
      </div>
      <div class="mt-3">
        <p @click="loginMode = false">Register form</p>
      </div>
    </div>
    <div class="login__content" v-else>
      <div class="mb-3">
        <label for="userName" class="form-label w-100">User Name</label>
        <input
            type="text"
            class="form-control"
            id="userName"
            v-model="form.username"

        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
        >Email address</label
        >
        <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            v-model="form.email"

        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label"
        >Password</label
        >
        <input
            type="password"
            class="form-control"
            id="password"
            v-model="form.password"

        />
      </div>
      <div class="">
        <button class="btn btn-primary w-100" @click="signup">Signup</button>
      </div>
      <div class="mt-3">
        <p @click="loginMode = true">Login</p>
      </div>
    </div>
    <div class="login__image  d-none d-lg-block">
      <img src="@/assets/images/login.png"/>
    </div>
  </div>
</template>
<script src="./account.js">

</script>
<style lang="scss" scoped src="./account.scss"></style>
