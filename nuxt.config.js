import colors from 'vuetify/es5/util/colors'

export default {
  router: {
    base: "/clients/corto/site",
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve();
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 400);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({
            top: el.offsetTop,
            behavior: "smooth"
          });
        } else {
          return window.scrollTo(150, el.offsetTop);
        }
      }

      return {
        x: 0,
        y: 0
      };
    }
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Corto d.o.o. Sarajevo | %s',
    title: 'Corto d.o.o. Sarajevo | Distribucija vode, kafe i dezinfekcijskih sredstava',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Sa više od 10 godina iskustva u pružanju usluga biznis korisnicima firma Corto d.o.o. je lideru oblasti dirstibucije vode pomoću water cooler aparata u Bosni i Hercegovini'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Amir Cisija'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      type: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
    }, {
      type: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
    }, {
      type: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap'
    }, {
      type: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600;700;800&display=swap'
    }, {
      type: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
    }],
    script: [{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.4/polyfill.min.js'
    }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/colors.scss',
    '~/assets/main.css'
  ],
  styleResources: {
    scss: ['@/assets/scss/*.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#2196f3',
          accent: '#03a9f4',
          error: '#f44336',
          warning: '#ffc107',
          info: '#8bc34a',
          success: '#8bc34a'
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
