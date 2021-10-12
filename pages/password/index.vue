<template>
  <div id="section-pass" class="container">
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
        <img src="~assets/img/bg-fpass.jpg" alt="halo" />
      </div>
    </div>
    <div class="content text-center">
      <h2 class="title color-brown-100">Forget Password</h2>
      <p class="desc color-gray-80">
        Enter the email associated with your account and we’ll send an email
        with instructions to reset your password
      </p>

      <form class="form mt-3" @submit.prevent="userLogin()">
        <!-- alert -->
        <!-- <b-alert v-model="showDismissibleAlert" :variant="alertVariant" dismissible>
                      {{ this.messageStatus == "false" ? "errorMessage " : "successMessage" }}
                </b-alert> -->

        <!-- email -->
        <div class="input-group mt-4">
          <i class="icon-container uil uil-envelope"></i>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Enter your email address"
            required
          />
        </div>

        <!-- <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
              >Remember me</b-form-checkbox
            > -->
      </form>

      <NuxtLink to="/login">
        <!-- <button class="btn">Get Started</button> -->
        <b-button block @click="onClick" class="btn mt-4"
          >Send Verification Code</b-button
        >
      </NuxtLink>
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
