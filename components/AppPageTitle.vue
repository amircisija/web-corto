<template>
  <section
    class="app__page--title"
    :style="{ backgroundImage: `url(${pageBackgroundImage})` }"
  >
    <v-container class="ac__cont">
      <v-row>
        <v-col>
          <h3 class="title-heading__3">
            {{ pageTitle }}
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: ["backgroundImage"],
  computed: {
    pageTitle() {
      return this.$store.state.pageTitle;
    },
    pageSubText() {
      return this.$store.state.pageSubText;
    },
    pageBackgroundImage() {
      return this.$store.getters.getPageBackgroundImage;
    },
  },
};
</script>

<style lang="scss" scoped>
.app__page--title {
  height: 300px;
  position: relative;
  padding-top: 120px;
  background-size: cover;
}

h3.title-heading__3 {
  font-weight: 600;
  line-height: 46px;
  font-size: 43px;
  color: #ffffff;
  margin-bottom: 20px;
}

@media only screen and (max-width: 1020px) {
  .app__page--title {
    height: 200px;
    position: relative;
    padding-top: 58px;
    background-size: cover;
  }

  h3.title-heading__3 {
    font-weight: 600;
    line-height: 46px;
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 20px;
  }
}
</style>
