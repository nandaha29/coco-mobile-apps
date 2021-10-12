<template>
  <div id="section-profile" class="container">
    <!-- <b-container fluid="sm"> -->
    <div class="bg-top">
      <div class="img-box">
        <img src="~assets/img/bg-mprofile.jpg" alt="halo" />
      </div>
      <div class="banner">
        <div class="d-flex justify-content-center mb-4">
          <h1 class="title mt-1">Vote</h1>
          <!-- <b-dropdown
            text="Outline Danger"
            variant="outline-danger"
            class="m-2"
          >
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown> -->
          <div class="multi-select-dropdown">
            <multiselect
              v-model="value"
              :options="options"
              :searchable="false"
              :close-on-select="false"
              :show-labels="false"
              placeholder="Pick a value"
            ></multiselect>
            <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
          </div>
        </div>
        <div class="banner-content">
          <div class="text-content d-flex justify-content-center">
            <!-- ini buat  NAVBAR-->
            <nav-bar />
          </div>
        </div>
      </div>
    </div>
    <div class="content content-vote">
      <!-- <div class="d-flex justify-content-center"> -->
      <!-- INI FORM -->
      <form class="form mb-4" @submit.prevent="userRegister()">
        <!-- category -->
        <div class="input-group">
          <i class="icon-container uil uil-search"></i>
          <input
            v-model="FormName"
            type="name"
            class="form-control"
            placeholder="enter your categories"
            required
          />
        </div>
        <!-- </div> -->
      </form>

      <b-list-group class="mb-4">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/Mask Group (5).png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="justify-content-between" style="width: 75%">
            <h6 class="mb-1 mt-3">Today, 13.00</h6>
            <small>
              <p>
                You already vote “Thank You” to Anindya Candrakanti
                <NuxtLink to="/register" class="button-active"
                  >click here</NuxtLink
                >
                for unvote
              </p></small
            >
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang1.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="justify-content-between" style="width: 75%">
            <h6 class="mb-1 mt-3">Today, 13.00</h6>
            <small>
              <p>
                You already vote “Thank You” to Anindya Candrakanti
                <NuxtLink to="/register" class="button-active"
                  >click here</NuxtLink
                >
                for unvote
              </p></small
            >
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang2.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="justify-content-between" style="width: 75%">
            <h6 class="mb-1 mt-3">Today, 13.00</h6>
            <small>
              <p>
                You already vote “Thank You” to Anindya Candrakanti
                <NuxtLink to="/register" class="button-active"
                  >click here</NuxtLink
                >
                for unvote
              </p></small
            >
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang3.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="justify-content-between" style="width: 75%">
            <h6 class="mb-1 mt-3">Today, 13.00</h6>
            <small>
              <p>
                You already vote “Thank You” to Anindya Candrakanti
                <NuxtLink to="/register" class="button-active"
                  >click here</NuxtLink
                >
                for unvote
              </p></small
            >
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang4.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="justify-content-between" style="width: 75%">
            <h6 class="mb-1 mt-3">Today, 13.00</h6>
            <small>
              <p>
                You already vote “Thank You” to Anindya Candrakanti
                <NuxtLink to="/register" class="button-active"
                  >click here</NuxtLink
                >
                for unvote
              </p></small
            >
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang5.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="justify-content-between" style="width: 75%">
            <h6 class="mb-1 mt-3">Today, 13.00</h6>
            <small>
              <p>
                You already vote “Thank You” to Anindya Candrakanti
                <NuxtLink to="/register" class="button-active"
                  >click here</NuxtLink
                >
                for unvote
              </p></small
            >
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>

    <!-- </b-container> -->
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Multiselect from 'vue-multiselect'
export default {
  components: { NavBar, Multiselect },
  layout: 'lay-dash',
  data() {
    return {
      // variabel default
      FormEmail: '',
      FormPassword: '',
      value: '',
      options: ['Thunderlabs', 'Stay Chill', 'Telkom Indonesia'],
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
