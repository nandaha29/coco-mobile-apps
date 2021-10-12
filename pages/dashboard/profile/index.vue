<template>
  <div id="section-profile" class="container">
    <!-- <b-container fluid="sm"> -->
    <div class="bg-top">
      <div class="img-box">
        <img src="~assets/img/bg-mprofile.jpg" alt="halo" />
      </div>
      <div class="banner">
        <h1 class="title">My Profile</h1>
        <div class="banner-content">
          <div class="img-box d-flex justify-content-center">
            <img src="~/assets/img/avatar/Mask Group (5).png" alt="halo" />
          </div>
          <div class="text-content d-flex justify-content-center">
            <h2 class="title">Amanda Lika</h2>
            <NuxtLink to="./profile/edit" class="button-active">
              <i class="uil uil-pen"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="d-flex justify-content-center">
        <h2 class="title color-brown-100">My Group</h2>
        <NuxtLink to="./profile/group" class="button-active">
          <b-button class="btn-create">Create New Group</b-button>
        </NuxtLink>
      </div>

      <b-list-group class="mt-4 mb-4">
        <b-list-group-item class="d-flex align-items-center mb-3">
          <b-avatar
            variant="secondary"
            src="~/assets/img/company/thunderlabs.png"
            class="mr-3"
            size="6rem"
          ></b-avatar>

          <div class="w-100 justify-content-between">
            <h5 class="mb-1">Thunderlabs</h5>
            <small> <i class="uil uil-user-circle mr-1"></i>22 members</small>
            <small> <i class="uil uil-user-circle mr-1"></i>3 categories</small>
          </div>

          <NuxtLink to="./profile/group/edit" class="button-active">
            <b-badge class="btn-create"><i class="uil uil-pen"></i></b-badge>
          </NuxtLink>
        </b-list-group-item>

        <b-list-group-item class="d-flex align-items-center mb-3">
          <b-avatar
            variant="secondary"
            src="~/assets/img/company/telkom_indonesia.png"
            class="mr-3"
            size="6rem"
          ></b-avatar>

          <div class="w-100 justify-content-between">
            <h5 class="mb-1">Telkom Indonesia</h5>
            <small> <i class="uil uil-user-circle mr-1"></i>22 members</small>
            <small> <i class="uil uil-user-circle mr-1"></i>2 categories</small>
          </div>

          <NuxtLink to="/" class="button-active">
            <b-badge class="btn-create"><i class="uil uil-pen"></i></b-badge>
          </NuxtLink>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center mb-3">
          <b-avatar
            variant="secondary"
            src="~/assets/img/company/chill.png"
            class="mr-3"
            size="6rem"
          ></b-avatar>

          <div class="w-100 justify-content-between">
            <h5 class="mb-1">Stay Chill</h5>
            <small> <i class="uil uil-user-circle mr-1"></i>22 members</small>
            <small> <i class="uil uil-user-circle mr-1"></i>6 categories</small>
          </div>

          <NuxtLink to="/" class="button-active">
            <b-badge class="btn-create"><i class="uil uil-pen"></i></b-badge>
          </NuxtLink>
        </b-list-group-item>
      </b-list-group>

      <NuxtLink to="/" class="button-active">
        <b-button block variant="outline-primary" class="btn">Log Out</b-button>
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
