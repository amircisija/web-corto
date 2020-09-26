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
    <div class="top__bar" id="topbar">
      <v-container class="py-2 ac__cont">
        <v-row class="py-0">
          <v-col class="py-0">
            <p class="d-inline-block pr-4">
              Kontaktirajte nas za besplatnu ponudu
              <a href="#" class="top__bar--link">
                <strong>{{ phone }}</strong>
              </a>
            </p>
          </v-col>
          <v-col class="text-right py-0">
            <p class="d-inline-block pr-4">
              {{ address }}
            </p>
            <p class="d-inline-block">
              {{ email }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-app-bar id="nav" :clipped-left="clipped" fixed app color="secondary">
      <v-container class="ac__cont">
        <v-row>
          <v-col cols="3">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              class="d-sm-none"
            />
            <v-toolbar-title v-text="title" />
          </v-col>
          <v-col class="text-right" cols="9">
            <AppMenu />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "092827323",
      address: "Test",
      email: "test-email",
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
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", function() {
        var navbar = document.getElementById("nav");
        var topbar = document.getElementById("topbar");
        var nav_classes = navbar.classList;
        var topbar_classes = topbar.classList;

        if (document.documentElement.scrollTop >= 20) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
            topbar_classes.toggle("shrink");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
            topbar_classes.toggle("shrink");
          }
        }
      });
    });
  }
};
</script>
<style lang="scss">
.top__bar {
  top: -40px;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  height: 40px;
  z-index: 900;
  background: #fafafa;
  color: #fff;
  border-bottom: 1px solid #e2e2e2;
  p {
    font-size: 12px;
    color: #2d2d2d;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }
}
.v-app-bar.v-app-bar--fixed {
  position: fixed;
  top: 0;
  z-index: 5;
  transition: all 0.2s ease-in-out;
}
#nav {
  background: rgba(0, 0, 0, 0) !important;
  box-shadow: none;
  z-index: 250;
  .nav__links {
    color: #fff;
    font-family: Montserrat, serif;
    font-weight: 400 !important;
    text-transform: none;
  }
}
#nav.shrink {
  background: rgb(255, 255, 255) !important;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  top: 40px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15),
    0 8px 16px -8px rgba(0, 0, 0, 0.01), 0 -6px 16px -6px rgba(0, 0, 0, 0.03) !important;
  .nav__links {
    color: rgb(56, 56, 56);
    font-family: Montserrat, serif;
    font-weight: 400 !important;
    text-transform: none;
  }
}
.top__bar,
.top__bar.shrink {
  transition: all 0.2s ease-in-out;
}
.top__bar.shrink {
  top: 0;
}
</style>
