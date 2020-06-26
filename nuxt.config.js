export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/var.colors.scss',
      '@/assets/scss/var.responsive.scss',
      '@/assets/scss/var.typo.scss',
      '@/assets/scss/mix.responsive.scss'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://192.168.10.74/llacan/public/api/'
  },
  auth: {
    redirect: { login: '/', logout: '/', home: '/restaurants' },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'http://192.168.10.74/llacan/public/api/login',
            method: 'post',
            propertyName: 'data.token'
          },
          user: {
            url: 'http://192.168.10.74/llacan/public/api/me',
            method: 'get',
            propertyName: 'data'
          }
        }
      }
    }
  },
  env: {
    baseApiUrl: 'http://192.168.10.74/llacan/public/api/'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
