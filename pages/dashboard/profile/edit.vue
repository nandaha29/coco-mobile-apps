<template>
  <div id="section-edit-profile" class="container">
    <!-- <b-container fluid="sm"> -->
    <div class="bg-top">
      <div class="img-box">
        <img src="~assets/img/bg-mprofile.jpg" alt="halo" />
      </div>

      <div class="banner">
        <div class="back-button">
          <NuxtLink to="/" class="button-active">
            <i class="uil uil-arrow-left"></i>
          </NuxtLink>
        </div>
        <h1 class="title">Edit Profile</h1>
        <div class="banner-content">
          <b-avatar
            type="button"
            badge-variant="danger"
            src="~/assets/img/avatar/Mask Group (5).png"
            class="mr-3"
            size="6rem"
            badge
            badge-top
            badge-offset="-2px"
          >
            <template #badge>
              <NuxtLink to="/" class="color-white">
                <i class="uil uil-plus"></i
              ></NuxtLink>
            </template>
          </b-avatar>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="form-box">
        <!-- INI FORM -->
        <form class="form mb-4" @submit.prevent="userRegister()">
          <!-- full name -->
          <div class="input-group mt-3">
            <input
              class="form_input"
              type="text"
              id="name"
              autocomplete="off"
              placeholder="insert your name"
            />
            <label for="email" class="form_label">Full Name</label>
          </div>

          <!-- email -->
          <div class="input-group mt-4">
            <input
              class="form_input"
              type="text"
              id="email"
              autocomplete="off"
              placeholder="your email"
            />
            <label for="email" class="form_label">Email</label>
          </div>

          <!-- gender -->
          <div class="input-group mt-4">
            <input
              class="form_input"
              type="text"
              id="email"
              autocomplete="off"
              placeholder="P/L"
            />
            <label for="email" class="form_label">Gender</label>
          </div>

          <!-- DOB -->
          <div class="input-group mt-4">
            <input
              class="form_input"
              ref="calendar"
              type="date"
              locale="en"
              placeholder="dd/mm/yyyy"
              required
            />
            <label for="email" class="form_label">Date of Birth</label>
          </div>

          <!-- about me -->
          <div class="input-group mt-4">
            <input
              class="form_input"
              type="text"
              id="email"
              autocomplete="off"
              placeholder="hi, it's me"
            />
            <label for="email" class="form_label">About Me</label>
          </div>

          <!-- phone number -->
          <div class="input-group mt-4">
            <input
              class="form_input"
              type="number"
              id="email"
              autocomplete="off"
              placeholder="your phone number"
            />
            <label for="email" class="form_label">Phone Number</label>
          </div>
        </form>
      </div>

      <NuxtLink to="/" class="button-active">
        <b-button block variant="outline-primary" class="btn">Save</b-button>
      </NuxtLink>
    </div>

    <!-- </b-container> -->
  </div>
</template>

<script>
export default {
  layout: 'lay-dash',
  data() {
    return {
      // variabel default
      FormEmail: '',
      FormPassword: '',
    }
  },
  methods: {
    onClick() {
      alert('test2')
      this.userLogin()
    },
  },
}
</script>
