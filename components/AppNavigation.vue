<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary app>
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
          <v-col class="py-0" cols="12" sm="9" md="9">
            <p class="d-inline-block pr-3">
              <v-icon class="top__bar--icon">mdi-google-maps</v-icon>
              {{ company.address }}
            </p>
            <p class="d-inline-block pr-3">
              <v-icon class="top__bar--icon">mdi-phone</v-icon>
              Kontaktirajte nas za besplatnu ponudu
              <a href="#" class="top__bar--link">
                <strong>{{ company.phone }}</strong>
              </a>
            </p>
            <p class="d-inline-block pr-3">
              <v-icon class="top__bar--icon">mdi-email-outline</v-icon>
              {{ company.email }}
            </p>
          </v-col>
          <v-col class="text-right py-0" cols="12" sm="3" md="3">
            <p class="d-inline-block">Preuzmite katalog</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-app-bar id="nav" :clipped-left="clipped" fixed app color="secondary">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-flex d-sm-none"
      />
      <v-container class="ac__cont d-sm-flex hidden-sm-and-down">
        <v-row>
          <v-col cols="12" md="3" sm="2">
            <img
              id="logo_image"
              class="logo__img"
              :src="logosrc"
              alt="Corto d.o.o."
            />
          </v-col>
          <v-col class=" text-right" cols="12" sm="10" md="9">
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
      address: "Zmaja od Bosne 14, 71000 Sarajevo",
      email: "info@corto.ba",
      clipped: true,
      drawer: false,
      fixed: true,
      logosrc: require("~/assets/images/logo-white.png"),
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

  computed: {
    company() {
      return this.$store.state.company;
    }
  },

  mounted() {
    this.logosrc = require("~/assets/images/logo-white.png");
    this.$nextTick(function() {
      window.addEventListener("scroll", function() {
        if (document.documentElement.scrollTop >= 20) {
          document.getElementById(
            "logo_image"
          ).src = require("~/assets/images/logo.png");
        } else {
          document.getElementById(
            "logo_image"
          ).src = require("~/assets/images/logo-white.png");
        }

        var navbar = document.getElementById("nav");
        var topbar = document.getElementById("topbar");
        var nav_classes = navbar.classList;
        var topbar_classes = topbar.classList;

        if (document.documentElement.scrollTop >= 20) {
          if (nav_classes.contains("shrink-bar") === false) {
            nav_classes.toggle("shrink-bar");
            topbar_classes.toggle("shrink-bar");
          }
        } else {
          if (nav_classes.contains("shrink-bar") === true) {
            nav_classes.toggle("shrink-bar");
            topbar_classes.toggle("shrink-bar");
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
  background: $main-dark;
  color: #fff;
  border-bottom: 1px solid #e2e2e2;
  .top__bar--link {
    color: #fff;
    text-decoration: none;
  }
  p {
    font-size: 12px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }
  .top__bar--icon {
    color: rgb(255, 255, 255);
    background: #365abd;
    border-radius: 50%;
    font-size: 20px;
    margin-right: 3px;
  }
}
#nav {
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
#nav.shrink-bar {
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
.top__bar {
  transition: all 0.2s ease-in-out;
}
.top__bar.shrink-bar {
  top: 0;
}
.logo__img {
  max-width: 100px;
  display: inline;
  position: absolute;
  top: 0;
}
@media only screen and (max-width: 1000px) {
  #topbar {
    display: none;
  }
  #nav.shrink-bar {
    background: white !important;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
    top: 0;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15),
      0 8px 16px -8px rgba(0, 0, 0, 0.01), 0 -6px 16px -6px rgba(0, 0, 0, 0.03) !important;
  }
}
</style>
