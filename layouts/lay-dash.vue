<template>
  <div class="d-flex justify-content-center">
    <main class="section-all section-tablet section-desktop">
      <Nuxt />
    </main>
    <bottom-bar />
  </div>
</template>
<script>
import BottomBar from '~/components/BottomBar.vue'
export default {
  components: { BottomBar },
  layout: 'lay-bg',
}
</script>
