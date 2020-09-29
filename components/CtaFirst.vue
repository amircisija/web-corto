<template>
  <section class="cta cta__1">
    <v-container class="ac__cont">
      <v-row>
        <v-col cols="8" class="padding-50 text-center mx-auto">
          <h3 class="title-heading__3">
            Nudimo Vam
            <span class="cta__span--1">besplatno korištenje</span> water cooler
            aparata i kafe aparata.
          </h3>
          <v-btn class="ma-2 bt--2" tile outlined>Ponuda za kafu</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.cta__1 {
  position: relative;
  background: url("~assets/images/cta__image.jpg") 50% 50% no-repeat;
  background-size: cover;
  .bt--2 {
    background: transparent !important;
    color: #fff !important;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.378);
    padding: 25px 40px !important;
  }
}
h3.title-heading__3 {
  font-weight: 100;
  line-height: 46px;
  font-size: 43px;
  color: #ffffff;
  margin-bottom: 40px;
}
.cta__span--1 {
  font-weight: 500;
}
</style>
