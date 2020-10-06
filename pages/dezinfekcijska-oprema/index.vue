<template>
  <div>
    <AppPageTitle />
    <div class="main__content subpage__1">
      <section class="page__section">
        <v-container class="ac__cont">
          <v-row>
            <v-col class="padding-60 my-auto" sm="12">
              <v-card>
                <v-toolbar flat color="primary" dark>
                  <v-toolbar-title
                    >Asortiman dezinfekcionih sredstava i zaštitne
                    opreme</v-toolbar-title
                  >
                </v-toolbar>
                <v-tabs vertical>
                  <v-tab> Bakticid </v-tab>
                  <v-tab> Aseptan </v-tab>
                  <v-tab-item v-for="(tab, index) in tabs" :key="index">
                    <v-card flat>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col>
                              <h2 class="title-heading__2">
                                {{ tab.tabItem.main.info.title }}
                              </h2>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <h3>Djelovanje</h3>
                              <p>
                                {{ tab.tabItem.main.info.text_1 }}
                              </p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <h3>Namjena</h3>
                              <p>
                                {{ tab.tabItem.main.info.text_2 }}
                              </p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <v-data-table
                                :headers="tab.tabItem.main.table.headers"
                                :items="tab.tabItem.main.table.items"
                                :hide-default-footer="true"
                              ></v-data-table>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </div>
</template>
<script>
import { Tabs } from "@/api/tabs";
export default {
  layout: "subPageLayout",
  transition: "home",
  data() {
    return {
      title: "Dezinfekcijska oprema",
      subText:
        "Nam aliquet dolor mauris, tempor dapibus est luctus fringilla. Praesent pellentesque lacus sit amet sapien commodo tempus.",
      backgroundImage: require("~/assets/images/cta__image.jpg"),
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Corto d.o.o. - Distribucija Kimbo kafe i aparata",
        },
      ],
    };
  },
  created() {
    this.$store.commit("SET_PAGE_TITLE", this.title),
      this.$store.commit("SET_PAGE_SUBTEXT", this.subText);
    this.$store.commit("SET_BACKGROUND_IMAGE", this.backgroundImage);
  },
  computed: {
    tabs() {
      return Tabs;
    },
    pageTitle() {
      return this.$store.state.pageTitle;
    },
  },
};
</script>
<style lang="scss">
.pos__rel {
  position: relative;
}
.k__img--1 {
  position: absolute;
  max-width: 240px;
  top: -100px;
  left: -80px;
}
.k__img--2 {
  position: absolute;
  max-width: 200px;
  bottom: -100px;
  right: -10px;
}
.subpage__1 {
  .section__quality {
    background: url("~assets/images/quality/bg.jpg") 50% 50% no-repeat;
    background-size: contain;
    .hr-style--1 {
      margin: 0 auto;
      text-align: center;
    }
  }
}
</style>
