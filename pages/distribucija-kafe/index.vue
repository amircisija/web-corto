<template>
  <div>
    <AppPageTitle />
    <div class="main__content subpage__1">
      <section class="page__section">
        <v-container class="ac__cont">
          <v-row>
            <v-col sm="5" class="my-auto pos__rel">
              <img
                src="~/assets/images/k--1.jpg"
                class="elevation-ac k__img--1"
                alt=""
              />
              <img
                src="~/assets/images/k--2.jpg"
                class="elevation-ac k__img--2"
                alt=""
              />
              <img
                class="img-fluid elevation-ac"
                style="max-width: 100%"
                src="~/assets/images/k--3.jpg"
              />
            </v-col>
            <v-col class="padding-60 my-auto" sm="7">
              <span class="title-span__2">Doživljaj za sva čula</span>
              <h2 class="title-heading__2 mb-2">Kimbo kafa i aparati</h2>
              <p class="lead">
                Za Vaš ured nudimo Vam
                <strong>besplatan aparat na korištenje </strong> u minimalnu
                mjesečnu potrošnju.
              </p>
              <hr class="hr-style--1" />
              <p class="mb-40">
                Sve počinje pažljivom selekcijom najkvalitetnijiH zrna kafe
                direktno sa plantaža. Majstorska kreacija ekskluzivnih mješavina
                različitih zrna kafe i specijalan način prženja, tajne su
                jedinistvene espresso kafe koja zadovoljava i najkritičnijeg
                gurmana.
              </p>
              <p>
                Užitak koji oživljava sva čula: puna zlatna krema, izbalansiran
                okus, intenzivna aroma koja mjenja pauzu za kafu u moment užitka
                za svaki dan.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore accusantium quod consequuntur nobis assumenda illo magni
                labore iure aut officiis. Nobis nulla vel fuga? Aliquam
                repellendus sunt temporibus hic ullam.
              </p>
              <br />
              <v-btn class="ma-2 ml-0 bt--1" tile>Naruči</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  layout: "subPageLayout",
  transition: "home",
  data() {
    return {
      title: "Distribucija Kimbo kafe i aparata",
      subText:
        "Nam aliquet dolor mauris, tempor dapibus est luctus fringilla. Praesent pellentesque lacus sit amet sapien commodo tempus.",
      backgroundImage: require("~/assets/images/cta__image.jpg"),
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Corto d.o.o. - Distribucija Kimbo kafe i aparata",
        },
      ],
    };
  },
  created() {
    this.$store.commit("SET_PAGE_TITLE", this.title),
      this.$store.commit("SET_PAGE_SUBTEXT", this.subText);
    this.$store.commit("SET_BACKGROUND_IMAGE", this.backgroundImage);
  },
  computed: {
    pageTitle() {
      return this.$store.state.pageTitle;
    },
  },
};
</script>
<style lang="scss">
.pos__rel {
  position: relative;
}
.k__img--1 {
  position: absolute;
  max-width: 240px;
  top: -100px;
  left: -80px;
}
.k__img--2 {
  position: absolute;
  max-width: 200px;
  bottom: -100px;
  right: -10px;
}
.subpage__1 {
  .section__quality {
    background: url("~assets/images/quality/bg.jpg") 50% 50% no-repeat;
    background-size: contain;
    .hr-style--1 {
      margin: 0 auto;
      text-align: center;
    }
  }
}
</style>
