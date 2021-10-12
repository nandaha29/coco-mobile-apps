<template>
  <div id="section-get-started" class="container">
    <!-- <b-container fluid="sm"> -->
    <div class="bg-top">
      <div class="img-box">
        <img src="~assets/img/bg-get-started.png" alt="halo" />
      </div>
    </div>
    <div class="content text-center">
      <h1 class="title color-brown-100">Welcome to Coco Culture!</h1>
      <p class="desc color-brown-60">Rank Your Sticker Now!</p>
      <NuxtLink to="/login">
        <!-- <button class="btn">Get Started</button> -->
         <b-button block class="btn">Get Started</b-button>
      </NuxtLink>
    </div>

    <!-- </b-container> -->
  </div>
</template>

<script>
export default {
  layout: 'lay-bg',
  // mounted() {
  //   // const token = this.$store.getters.getToken
  //   // console.log('token',token)
  //   console.log(this.$store.getters.getToken)
  // },
}
</script>
