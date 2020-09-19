<template>
  <v-app dark>
    <AppNavigation />
    <v-main>
      <nuxt />
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: true
    };
  }
};
</script>
<style lang="scss">
.container.ac__cont {
  max-width: 1400px !important;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
}
</style>
