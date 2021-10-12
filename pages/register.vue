<template>
  <div id="section-regis" class="container">
    <!-- <b-container fluid="sm"> -->
    <div class="bg-top">
      <div class="img-box">
        <img src="~assets/img/bg-regis.png" alt="halo" />
      </div>
    </div>
    <div class="content text-center">
      <h2 class="title color-brown-100">Sign In</h2>

      <form class="form mt-3" @submit.prevent="userLogin()">
        <!-- alert -->
        <!-- <b-alert v-model="showDismissibleAlert" :variant="alertVariant" dismissible>
                      {{ this.messageStatus == "false" ? "errorMessage " : "successMessage" }}
                </b-alert> -->

          <!-- name -->
          <div class="input-group">
            <i class="icon-container uil uil-user"></i>
            <input
              v-model="FormName"
              type="name"
              class="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>

          <!-- email -->
          <div class="input-group mt-3">
            <i class="icon-container uil uil-envelope"></i>
            <input
              v-model="FormEmail"
              type="email"
              class="form-control"
              placeholder="Enter your email address"
              required
            />
          </div>

          <!-- pass -->
          <div class="input-group mt-3">
            <i class="icon-container uil uil-lock"></i>
            <input
              v-model="FormPassword"
              type="password"
              class="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

        <!-- <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
              >Remember me</b-form-checkbox
            > -->

        <!-- forgot pass -->
        <p class="text-right mt-3">
          <NuxtLink to="/forget-pass" class="button-active"
            >Forgot Password?</NuxtLink
          >
        </p>
      </form>

      <NuxtLink to="/login">
        <!-- <button class="btn">Get Started</button> -->
        <b-button block @click="onClick" class="btn">Sign In</b-button>
      </NuxtLink>
      <p class="pb-4 pt-3">
        Already have an account?
        <NuxtLink to="/register" class="button-active">Sign Up</NuxtLink>
      </p>
    </div>

    <!-- </b-container> -->
  </div>
</template>

<script>
export default {
  layout: 'lay-bg',
  data() {
    return {
      FormName: '',
      FormEmail: '',
      FormPassword: '',
    }
  },
  methods: {
    onClick() {
      alert('test2')
      this.userRegister()
    },
    async userRegister() {
      const formData = {
        name: this.FormName,
        email: this.FormEmail,
        password: this.FormPassword,
      }
      await this.$axios
        .$post('register', formData)
        .then((res) => {
          console.log(res)
          this.$router.push('/home')
        })
        .catch((err) => {
          this.errors = err.response.data.errors
        })
    },
  },
}
</script>
