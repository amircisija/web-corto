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
}
span.title-span__2 {
  margin-bottom: 40px;
  font-size: 13px;
  font-family: Poppins, serif;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}
p {
  font-size: 17px;
  line-height: 1.72;
  color: #5e709d;
  margin-bottom: 0 !important;
}
.elevation-ac {
  border-radius: 8px !important;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15),
    0 8px 16px -8px rgba(0, 0, 0, 0.01), 0 -6px 16px -6px rgba(0, 0, 0, 0.03) !important;
}
.padding-50 {
  padding: 50px;
}
</style>
