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
          to: "/"
        },
        {
          title: "O nama",
          to: "/#"
        },
        {
          title: "Voda",
          to: "/#"
        },
        {
          title: "Kafa",
          to: "/#"
        },
        {
          title: "Dezinfekcija",
          to: "/#"
        },
        {
          title: "Pica",
          to: "/#"
        },
        {
          title: "Kontakt",
          to: "/#"
        }
      ],
      title: "Corto d.o.o"
    };
  }
};
</script>
