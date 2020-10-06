<template>
  <section class="hero__section">
    <v-container fluid class="fill-height ac__cont hero__content">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="7" class="mx-auto text-left">
          <h2>Besplatna dostava u roku od 24 h</h2>
          <h1>
            Distribucija vode i kafe za Vaš ured širom Bosne i Hercegovine
          </h1>
          <p class="hero__section--p">
            Sa više od 10 godina iskustva u pružanju usluga biznis korisnicima,
            firma Corto je
            <span class="cta__span--1">lider u oblasti dirstibucije vode</span
            >pomoću water cooler aparata u Bosni i Hercegovini.
          </p>
          <v-btn class="ma-2 ml-0 bt--1" tile>Ponuda za vodu</v-btn>
          <v-btn class="ma-2 bt--2" tile outlined>Ponuda za kafu</v-btn>
        </v-col>
        <v-col sm="5"></v-col>
      </v-row>
      <v-row>
        <v-col> </v-col>
      </v-row>
    </v-container>
    <IntroSection />
    <div class="img__holder">
      <img
        class="img__holder--img img__holder--image--1"
        src="~/assets/images/cta__image__2.png"
      />
      <img
        class="img__holder--img img__holder--image--2"
        src="~/assets/images/cta__image__2-badge.png"
      />
    </div>
    <div class="shape__wrapper">
      <img src="~/assets/images/shape__hero.png" />
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style lang="scss">
.hero__content {
  z-index: 100;
  position: relative;
}
.cta__span--1 {
  font-weight: 500;
}
.hero__section {
  height: 100vh;
  margin-bottom: 100px;
  position: relative;
  background: url("~assets/images/hero-image-2.jpg") 50% 50% no-repeat;
  background-size: cover;
  .shape__wrapper {
    position: absolute;
    bottom: -7px;
    left: 0;
    right: 0;
    margin: 0 auto;
    overflow: hidden;
    z-index: 50;
  }
  .img__holder {
    position: absolute;
    right: 100px;
    bottom: 60px;
    z-index: 10;

    img {
      width: 900px;
      position: absolute;
      right: -170px;
      bottom: 0;
    }
  }
  h1 {
    color: #fff;
    font-size: 60px;
    line-height: 68px;
    margin-bottom: 30px;
    font-weight: 600;
  }
  h2 {
    color: #fff;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 10px;
    font-weight: 300;
  }
  p.hero__section--p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 22px;
    line-height: 30px;
    font-weight: 300;
    margin-bottom: 30px !important;
  }
}
.bt--1 {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.378);
  padding: 25px 40px !important;
  background: $main-success !important;
  color: #fff !important;
  border-radius: 4px;
  box-shadow: 0 15px 30px 0 rgb(115 119 110 / 32%);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 20px 0 rgb(115 119 110 / 20%);
  }
}
.bt--2 {
  background: #fff !important;
  color: #212121 !important;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.378);
  padding: 25px 40px !important;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 20px 0 rgb(115 119 110 / 20%);
  }
}
</style>
