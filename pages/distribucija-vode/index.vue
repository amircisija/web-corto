<template>
  <div class="main__content subpage__1">
    <section class="page__section">
      <v-container class="ac__cont">
        <v-row>
          <v-col sm="5" class="my-auto">
            <img
              class="img-fluid"
              style="max-width: 100%"
              src="~/assets/images/img--2.jpg"
            />
          </v-col>
          <v-col class="padding-60 my-auto" sm="7">
            <span class="title-span__2">Prirodna izvorska voda</span>
            <h2 class="title-heading__2 mb-2">Aqua Bianca voda</h2>
            <p class="lead">
              Nudimo Vam <strong>besplatno korištenje</strong> water cooler
              aparata uz kupovinu 3 galona mjesečno.
            </p>
            <hr class="hr-style--1" />
            <p class="mb-40">
              Aqua Bianca je prirodna negazirana mineralna voda. Zahvaljujući
              optimalnom odnosu minerala, kalcijuma i magnezijuma i niskom
              sadržaju natrijuma, Aqua Bianca voda pogodna je za svakodnevnu
              upotrebu.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              dolores sunt deleniti consectetur tempore aperiam. Dolores quaerat
              nam, eaque magnam mollitia perferendis sunt ipsum rerum incidunt
              voluptatibus dicta expedita autem. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illo libero suscipit non quaerat
              tempora nobis eveniet, fugiat officia! Quia corrupti fugit rem
              amet modi. Minima doloribus at tenetur. Impedit, ipsam?
            </p>
            <br />
            <v-btn class="ma-2 ml-0 bt--1" tile>Kvalitet vode</v-btn>
            <v-btn class="ma-2 bt--2" outlined>Naruči</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="page__section section__quality">
      <v-container class="ac__cont">
        <v-row>
          <v-col class="padding-60 my-auto mx-auto text-center" sm="7">
            <span class="title-span__2">Analiza</span>
            <h2 class="title-heading__2 mb-2">
              Prirodna izvorska voda <br />Aqua Bianca
            </h2>
            <p class="lead">
              Sa niskim sadržajem rastovirih mineralnih materija i natriujma
            </p>
            <hr class="hr-style--1" />
          </v-col>
        </v-row>
        <v-row class="page__section">
          <v-col class="box__outer--1">
            <div class="box__wrapper">
              <div
                v-for="box in boxes"
                v-bind:key="box.id"
                :class="`box__inner ${box.class}`"
              >
                <div class="box__inner--text">
                  <h4>{{ box.title }}</h4>
                  <p>{{ box.subtext }}</p>
                </div>

                <div class="box__inner--image">
                  <img
                    class="img-fluid"
                    style="max-width: 100%"
                    :src="`${box.image}`"
                  />
                </div>
              </div>
            </div>
          </v-col>
          <v-col>
            <img
              class="img-fluid"
              style="max-width: 100%"
              src="~/assets/images/img--glass.png"
            />
          </v-col>
          <v-col class="box__outer--2">
            <div class="box__wrapper">
              <div
                v-for="box in boxes2"
                v-bind:key="box.id"
                :class="`box__inner ${box.class}`"
              >
                <div class="box__inner--text">
                  <h4>{{ box.title }}</h4>
                  <p>{{ box.subtext }}</p>
                </div>

                <div class="box__inner--image">
                  <img
                    class="img-fluid"
                    style="max-width: 100%"
                    :src="`${box.image}`"
                  />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  layout: "subPageLayout",
  data() {
    return {
      boxes: [
        {
          id: 1,
          title: "Hidrokarbonati",
          subtext: "122",
          class: "box__1",
          image: require("~/assets/images/quality/icon__1.png"),
        },
        {
          id: 2,
          title: "Kalcijum",
          subtext: "23,25",
          class: "box__2",
          image: require("~/assets/images/quality/icon__2.png"),
        },
        {
          id: 3,
          title: "Kalijum",
          subtext: "0,49",
          class: "box__3",
          image: require("~/assets/images/quality/icon__3.png"),
        },
      ],
      boxes2: [
        {
          id: 4,
          title: "Natrijum",
          subtext: "2,20",
          class: "box__1",
          image: require("~/assets/images/quality/icon__4.png"),
        },
        {
          id: 2,
          title: "Hloridi",
          subtext: "1,95",
          class: "box__2",
          image: require("~/assets/images/quality/icon__5.png"),
        },
        {
          id: 3,
          title: "Magnezijum",
          subtext: "2,78",
          class: "box__3",
          image: require("~/assets/images/quality/icon__6.png"),
        },
      ],
      title: "Distribucija vode",
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
          content: "Corto d.o.o. - Distribucija vode",
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
.subpage__1 {
  .section__quality {
    background: url("~assets/images/quality/bg.jpg") 50% 50% no-repeat;
    background-size: contain;
    .hr-style--1 {
      margin: 0 auto;
      text-align: center;
    }
  }
  .box__outer--1 {
    .box__wrapper {
      position: relative;
      top: 15%;
    }
    .box__1 {
      top: 0;
    }
    .box__2 {
      top: 160px;
      right: 60px;
    }
    .box__3 {
      top: 320px;
      right: 0;
    }
    .box__inner {
      position: absolute;
      width: 100%;
      text-align: right;
      p {
        margin-bottom: 0;
      }
      .box__inner--text {
        position: absolute;
        right: 120px;
        h4 {
          font-size: 1.6em;
          color: $main-dark;
        }
        p {
          font-weight: 700;
          color: #2b69bf;
          font-size: 1.6em;
        }
      }
      .box__inner--image {
        position: absolute;
        right: 0;
        top: -10px;
      }
    }
  }
  .box__outer--2 {
    .box__wrapper {
      position: relative;
      top: 15%;
    }
    .box__1 {
      top: 0;
    }
    .box__2 {
      top: 160px;
      left: 60px;
    }
    .box__3 {
      top: 320px;
      left: 0;
    }
    .box__inner {
      position: absolute;
      width: 100%;
      text-align: left;
      p {
        margin-bottom: 0;
      }
      .box__inner--text {
        position: absolute;
        left: 120px;
        h4 {
          font-size: 1.6em;
          color: $main-dark;
        }
        p {
          font-weight: 700;
          color: #2b69bf;
          font-size: 1.6em;
        }
      }
      .box__inner--image {
        position: absolute;
        left: 0;
        top: -10px;
      }
    }
  }
}
</style>
