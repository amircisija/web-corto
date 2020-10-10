<template>
  <v-footer class="app__footer">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <span>&copy; {{ new Date().getFullYear() }} Corto d.o.o</span>
          <p>
            <a href="https://amircisija.com" target="_blank" class="dev__link"
              >Design and development - Amir Cisija</a
            >
          </p>
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
  background: #2a3b8b;
  background: #365abd !important;

  span {
    color: #fff;
  }

  p {
    color: #fff;
  }

  a.dev__link {
    color: rgb(255 255 255 / 58%);
    text-decoration: none;
    font-size: 13px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: rgb(255 255 255 / 70%);
    }
  }
}
</style>
