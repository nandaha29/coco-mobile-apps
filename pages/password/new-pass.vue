<template>
  <div id="section-new-pass" class="container">
    <!-- <b-container fluid="sm"> -->
    <!-- back button -->
    <!-- <div class="p-2"> -->
    <div class="back-button">
      <NuxtLink to="/" class="button-active">
        <i class="uil uil-arrow-left"></i>
      </NuxtLink>
    </div>
    <!-- </div> -->

    <div class="bg-top">
      <div class="img-box">
        <img src="~assets/img/bg-npass.jpg" alt="halo" />
      </div>
    </div>
    <div class="content text-center">
      <h2 class="title color-brown-100">Create New Password</h2>
      <p class="desc color-gray-80">
        Your new password must be different from previous used password
      </p>

      <form class="form mt-3" @submit.prevent="userRegister()">
        <!-- alert -->
        <!-- <b-alert v-model="showDismissibleAlert" :variant="alertVariant" dismissible>
                      {{ this.messageStatus == "false" ? "errorMessage " : "successMessage" }}
                </b-alert> -->

        <!-- email -->
        <div class="input-group mt-3">
          <i class="icon-container uil uil-envelope"></i>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Enter your email address"
            required
          />
        </div>
        <!-- otp -->
        <div class="input-group mt-3">
          <i class="uil uil-envelope-shield icon-container"></i>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Enter the 6 digit OTP"
            required
          />
        </div>
        <!-- pass -->
        <div class="input-group mt-3">
          <i class="icon-container uil uil-lock"></i>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <p class="desc mt-1 color-gray-80">Must be at least 8 characters</p>
        <!-- pass -->
        <div class="input-group mt-3">
          <i class="icon-container uil uil-lock"></i>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <p class="desc mt-1 color-gray-80">Must be at least 8 characters</p>
      </form>

      <NuxtLink to="/login">
        <!-- <button class="btn">Get Started</button> -->
        <b-button block @click="onClick" class="btn mt-4"
          >Reset Password</b-button
        >
      </NuxtLink>
      <p class="pb-4 pt-3">
        Did not receive the OTP? Check your spam filter<br />
        or
        <NuxtLink to="/login" class="button-active">Resend OTP</NuxtLink>
        <!-- GO TO MAIL TRAP -->
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
