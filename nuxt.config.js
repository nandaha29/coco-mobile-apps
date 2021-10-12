export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'coco-culture',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unicons.iconscout.com/release/v4.0.0/css/line.css',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Call CSS
    '@assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/spektrummedia/nuxt-vue-multiselect
    'nuxt-vue-multiselect',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://coco.thunderlab.id/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
