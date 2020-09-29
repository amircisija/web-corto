<template>
  <div>
    <v-btn
      class="nav__links px-5"
      v-for="item in items"
      :key="item.title"
      text
      to="/test"
      nuxt
      >{{ item.title }}</v-btn
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Početna",
          sm: 0,
          to: "/",
        },
        {
          title: "O nama",
          sm: 1,
          to: "/#",
        },
        {
          title: "Voda",
          sm: 0,
          to: "/#",
        },
        {
          title: "Kafa",

          sm: 0,
          to: "/#",
        },
        {
          title: "Dezinfekcija",
          sm: 0,
          to: "/#",
        },
        {
          title: "Pica",
          sm: 0,
          to: "/#",
        },
        {
          title: "Kontakt",
          sm: 0,
          to: "/#",
        },
      ],
      title: "Corto d.o.o",
    };
  },
};
</script>
