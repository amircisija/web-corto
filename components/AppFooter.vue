<template>
  <v-footer absolute app class="app__footer">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <span>&copy; {{ new Date().getFullYear() }} Corto d.o.o</span>
          <p>Design and development - Amir Cisija</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: true,
    };
  },
};
</script>
<style lang="scss">
.app__footer {
  background: #2a3b8b !important;
  span {
    color: #fff;
  }
  p {
    color: #fff;
  }
}
</style>
