<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      temporary
      absolute
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="secondary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-sm-none" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <AppMenu />
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      title: "Corto d.o.o"
    };
  }
};
</script>
