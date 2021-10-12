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
        <h1 class="title">Create New Group</h1>
        <div class="banner-content">
          <!-- src="~/assets/img/avatar/Mask Group (5).png" -->
          <b-avatar
            type="button"
            badge-variant="danger"
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
              placeholder="group name"
            />
            <label for="email" class="form_label">Name Group</label>
          </div>
          <!-- category -->
          <p class="desc mt-3 color-brown-80">Choose Your Group Category</p>
          <div class="input-group">
            <i class="icon-container uil uil-search"></i>
            <input
              v-model="FormName"
              type="name"
              class="form-control"
              placeholder="enter your categories"
              required
            />
            <!-- FIXING TAG -->
            <multiselect
              v-model="value"
              tag-placeholder="Add this as new tag"
              placeholder="Search or add a tag"
              label="name"
              track-by="code"
              :options="options"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
            ></multiselect>
          </div>
          <!-- quota -->
          <p class="desc mt-3 color-brown-80">Set Your Quota</p>
          <div class="input-group mt-3">
            <i class="icon-container uil uil-brightness-plus"></i>
            <input
              v-model="FormName"
              type="number"
              class="form-control"
              placeholder="your quota limit"
              required
            />
          </div>

          <!-- name -->
          <div class="input-group mt-3">
            <i class="icon-container uil uil-history"></i>
            <!-- <input
              v-model="FormName"
              type="name"
              class="form-control"
              placeholder="Enter your full name"
              required
            /> -->
            <b-dropdown right text="choose reset sticker">
              <b-dropdown-item>daily</b-dropdown-item>
              <b-dropdown-item>weekly</b-dropdown-item>
              <b-dropdown-item>monthly</b-dropdown-item>
            </b-dropdown>
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
            <label for="email" class="form_label">Expired Sticker</label>
          </div>
        </form>
        <p class="desc mt-3 color-brown-80">Invite Member</p>
        <p class="desc-2 color-gray-80">
          Copy this link to your friends and invite them to join this group
        </p>

        <!-- quota -->
        <div class="input-group mt-3 mb-3">
          <input
            v-model="FormName"
            type="name"
            class="form-control"
            placeholder="your link here"
            required
          />
          <NuxtLink to="/" class="button-active">
            <p class="desc">Copy Link</p>
          </NuxtLink>
        </div>
      </div>

      <NuxtLink to="/" class="button-active">
        <b-button block variant="outline-primary" class="btn">Save</b-button>
      </NuxtLink>
    </div>

    <!-- </b-container> -->
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  layout: 'lay-dash',
  components: {
    Multiselect,
  },
  data() {
    return {
      // variabel default
      FormEmail: '',
      FormPassword: '',
      value: [{ name: 'Javascript', code: 'js' }],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' },
      ],
    }
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.options.push(tag)
      this.value.push(tag)
    },
  },
}
</script>
