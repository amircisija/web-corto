<template>
  <v-app light>
    <AppNavigation />
    <v-main class="py-0">
      <nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style lang="scss">
.container.ac__cont {
  max-width: 1400px !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
  font-family: "Poppins", sans-serif;
}
h2.title-heading__2 {
  font-weight: 700;
  line-height: 46px;
  font-size: 43px;
  color: #424242;
}
span.title-span__2 {
  font-size: 0.75rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.1666666667em !important;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase !important;
  color: #2a3b8b;
}
p {
  color: #717a85;
  font-family: SFUIText, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  font-size: 1.125rem;
  line-height: 1.5555555556;
}
p.lead {
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: "Poppins", sans-serif;
  color: #424242;
  font-size: 1.2222222222em;
}
.elevation-ac {
  border-radius: 8px !important;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15),
    0 8px 16px -8px rgba(0, 0, 0, 0.01), 0 -6px 16px -6px rgba(0, 0, 0, 0.03) !important;
}
.padding-50 {
  padding: 50px;
}
.padding-60 {
  padding: 0 60px;
}
.padding-100 {
  padding: 100px;
}
.padding-200 {
  padding: 200px;
}
.page__section {
  padding: 100px 0;
}
.hr-style--1 {
  border-top: 4px solid #365abd;
  width: 80px;
  margin-bottom: 40px;
  margin-top: 20px;
}
.v-btn {
  text-transform: none;
}
.v-list-item--dense .v-list-item__icon,
.v-list--dense .v-list-item .v-list-item__icon {
  height: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 5px;
}
.mb-40 {
  margin-bottom: 40px !important;
}
</style>
