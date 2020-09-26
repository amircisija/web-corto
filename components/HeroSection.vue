<template>
  <section class="hero__section">
    <v-container fluid class="fill-height ac__cont hero__content">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="5" class="mx-auto text-left">
          <h2>
            Distribucija vode i kafe <br />za Vaš ured širom <br />Bosne i
            Hercegovine
          </h2>
          <p>
            Sa više od 10 godina iskustva u pružanju usluga biznis korisnicima,
            firma Corto je
            <span class="st--1">lider u oblasti dirstibucije vode</span>pomoću
            water cooler aparata u Bosni i Hercegovini.
          </p>
          <v-btn class="ma-2 bt--1" tile color="success" dark
            >Ponuda za vodu</v-btn
          >
          <v-btn class="ma-2 bt--2" tile>Ponuda za kafu</v-btn>
        </v-col>
        <v-col sm="7"> </v-col>
      </v-row>
      <v-row>
        <v-col> </v-col>
      </v-row>
    </v-container>
    <div class="img__holder">
      <img src="~/assets/images/cta__image__2.png" />
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
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
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
    }
  }
};
</script>
<style lang="scss">
.hero__content {
  z-index: 100;
  position: relative;
}

.hero__section {
  height: 100vh;
  position: relative;
  background: url("~assets/images/hero-image-1.jpg") 50% 50% no-repeat;
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
    }
  }
  h2 {
    color: #fff;
    font-size: 2.8em;
    line-height: 49px;
    margin-bottom: 30px;
    font-weight: 800;
  }
  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.6em;
    line-height: 30px;
    font-weight: 100;
    margin-bottom: 30px;
  }
}
.bt--1 {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.378);
  padding: 25px 40px !important;
}
.bt--2 {
  background: #fff;
  color: #8bc34a !important;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.378);
  padding: 25px 40px !important;
}
</style>
