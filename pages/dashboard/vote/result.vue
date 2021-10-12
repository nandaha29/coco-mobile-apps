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

            <!-- <h2 class="title">siapa kamu</h2>
            <NuxtLink to="./profile/edit" class="button-active">
              <i class="uil uil-pen"></i>
            </NuxtLink> -->
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
        <!-- <NuxtLink to="./profile/group" class="button-active">
          <b-button variant="outline-primary" class="btn-create"
            >Create New Group</b-button
          >
        </NuxtLink> -->
        <!-- </div> -->
      </form>
      <b-list-group class="vote-desc">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/utensils/brown-60.jpg"
            class="mr-3"
            size="1.5rem"
          ></b-avatar>
          <p class="desc color-brown-80">
            Stickers that have been used gitfed named category<br />“Thank you”
          </p>
        </b-list-group-item>

        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/utensils/brown-80.jpg"
            class="mr-3"
            size="1.5rem"
          ></b-avatar>
          <p class="desc color-brown-80">
            Stickers that have been used gived named category “Inspiring”
          </p>
        </b-list-group-item>
      </b-list-group>
      <!-- LIST ANGGOTA -->
      <b-list-group class="mb-4">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/Mask Group (5).png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="w-100 justify-content-between">
            <h6 class="mb-1 mt-3 font-bold">Anindya Candrakanti</h6>
            <small>
              <p>
                Anindya Candrakanti has voted for 10 people today.
                <NuxtLink to="/register" class="button-active"
                  >See Details</NuxtLink
                >
              </p></small
            >
          </div>

          <div class="progress">
            <div
              class="progress-bar left"
              role="progressbar"
              style="width: 60%"
            >
              18
            </div>
            <div
              class="progress-bar right"
              role="progressbar"
              style="width: 50%"
            >
              17
            </div>
          </div>

          <!-- <progress id="file" value="32" max="100">32%</progress> -->
        </b-list-group-item>

        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang1.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="w-100 justify-content-between">
            <h6 class="mb-1 mt-3 font-bold">Berliana Jelita</h6>
            <small>
              <p>
                Berliana Jelita has voted for 10 people today.
                <NuxtLink to="/register" class="button-active"
                  >See Details</NuxtLink
                >
              </p></small
            >
          </div>
          <div class="progress">
            <div
              class="progress-bar left"
              role="progressbar"
              style="width: 60%"
            >
              18
            </div>
            <div
              class="progress-bar right"
              role="progressbar"
              style="width: 50%"
            >
              17
            </div>
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang2.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="w-100 justify-content-between">
            <h6 class="mb-1 mt-3 font-bold">Devian Julian</h6>
            <small>
              <p>
                Devian Julian has voted for 10 people today.
                <NuxtLink to="/register" class="button-active"
                  >See Details</NuxtLink
                >
              </p></small
            >
          </div>
          <div class="progress">
            <div
              class="progress-bar left"
              role="progressbar"
              style="width: 60%"
            >
              18
            </div>
            <div
              class="progress-bar right"
              role="progressbar"
              style="width: 50%"
            >
              17
            </div>
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang3.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="w-100 justify-content-between">
            <h6 class="mb-1 mt-3 font-bold">Alvin Addison</h6>
            <small>
              <p>
                Alvin Addison has voted for 10 people today.
                <NuxtLink to="/register" class="button-active"
                  >See Details</NuxtLink
                >
              </p></small
            >
          </div>
          <div class="progress">
            <div
              class="progress-bar left"
              role="progressbar"
              style="width: 60%"
            >
              18
            </div>
            <div
              class="progress-bar right"
              role="progressbar"
              style="width: 50%"
            >
              17
            </div>
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang4.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="w-100 justify-content-between">
            <h6 class="mb-1 mt-3 font-bold">Aditya Anderson</h6>
            <small>
              <p>
                Aditya Anderson has voted for 10 people today.
                <NuxtLink to="/register" class="button-active"
                  >See Details</NuxtLink
                >
              </p></small
            >
          </div>
          <div class="progress">
            <div
              class="progress-bar left"
              role="progressbar"
              style="width: 60%"
            >
              18
            </div>
            <div
              class="progress-bar right"
              role="progressbar"
              style="width: 50%"
            >
              17
            </div>
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="~/assets/img/avatar/orang5.png"
            class="mr-3"
            size="4rem"
          ></b-avatar>

          <div class="w-100 justify-content-between">
            <h6 class="mb-1 mt-3 font-bold">Steve Jobs</h6>
            <small>
              <p>
                Steve Jobs has voted for 10 people today.
                <NuxtLink to="/register" class="button-active"
                  >See Details</NuxtLink
                >
              </p></small
            >
          </div>
          <div class="progress">
            <div
              class="progress-bar left"
              role="progressbar"
              style="width: 60%"
            >
              18
            </div>
            <div
              class="progress-bar right"
              role="progressbar"
              style="width: 50%"
            >
              17
            </div>
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
