<template>
  <section>
    <v-container class="ac__cont">
      <v-row>
        <v-col v-for="box in boxes" :key="box.id">
          <v-card class="elevation-ac intro__cards">
            <v-card-title>
              {{ box.title }}
            </v-card-title>
            <v-card-text>
              {{ box.text }}
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary">Saznaj više</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      boxes: [
        {
          id: 1,
          title: "Title 1",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet enim minima cupiditate reprehenderit dolore.",
        },
        {
          id: 2,
          title: "Title 2",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet enim minima cupiditate reprehenderit dolore.",
        },
        {
          id: 3,
          title: "Title 3",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet enim minima cupiditate reprehenderit dolore.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.intro__cards {
  padding: 40px;
}
</style>
