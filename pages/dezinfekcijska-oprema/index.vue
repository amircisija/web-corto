<template>
<div>
    <AppPageTitle />
    <div class="main__content subpage__1">
        <section class="page__section dezinfekcija">
            <v-container class="ac__cont">
                <v-row>
                    <v-col class="padding-60 my-auto" sm="12">
                        <v-card>
                            <v-toolbar flat color="primary" dark>
                                <v-toolbar-title>Asortiman dezinfekcionih sredstava i zaštitne
                                    opreme</v-toolbar-title>
                            </v-toolbar>
                            <v-tabs :vertical="!isMobile">
                                <v-tab light v-for="(t, index) in tabsItems" :key="index" v-text="t"></v-tab>

                                <v-tab-item v-for="(tab, index) in tabs" :key="index">
                                    <v-card flat>
                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="12" sm="9">
                                                        <v-row>
                                                            <v-col>
                                                                <h3 :class="`title__3 ${tab.tabItem.main.info.class}`">
                                                                    {{ tab.tabItem.main.info.title }}
                                                                </h3>
                                                                <hr :class="`hr-style--1 d-block ${tab.tabItem.main.info.class}`" />
                                                            </v-col>
                                                        </v-row>
                                                        <v-row v-if="tab.tabItem.main.info.text_1">
                                                            <v-col>
                                                                <h4>Djelovanje</h4>
                                                                <p>
                                                                    {{ tab.tabItem.main.info.text_1 }}
                                                                </p>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row v-if="tab.tabItem.main.info.text_2">
                                                            <v-col>
                                                                <h4>Namjena</h4>
                                                                <p>
                                                                    {{ tab.tabItem.main.info.text_2 }}
                                                                </p>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row v-if="tab.tabItem.main.info.text_3">
                                                            <v-col>
                                                                <h4>Specifikacije</h4>
                                                                <p>
                                                                    {{ tab.tabItem.main.info.text_3 }}
                                                                </p>
                                                            </v-col>
                                                        </v-row>
                                                    </v-col>
                                                    <v-col cols="12" sm="3">
                                                        <img class="img-fluid" style="max-width: 100%" :src="tab.tabItem.main.info.image" />
                                                    </v-col>
                                                </v-row>

                                                <v-row>
                                                    <v-col>
                                                        <v-data-table class="do-elevation" :headers="tab.tabItem.main.table.headers" :items="tab.tabItem.main.table.items" :hide-default-footer="true"></v-data-table>
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
import {
    Tabs
} from "@/api/tabs";
export default {
    layout: "subpage",
    transition: "home",
    data() {
        return {
            isMobile: false,
            tabsItems: [
                "Bakticid",
                "Aseptan",
                "Alkolos",
                "Benzal",
                "Konix",
                "Dezobarijere",
                "Zaštitne maske",
                "Zaštitni viziri",
            ],
            title: "Dezinfekcijska oprema",
            subText: "Nam aliquet dolor mauris, tempor dapibus est luctus fringilla. Praesent pellentesque lacus sit amet sapien commodo tempus.",
            backgroundImage: require("~/assets/images/img-6.jpg"),
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
    beforeDestroy() {
        if (typeof window === "undefined") return;

        window.removeEventListener("resize", this.onResize, {
            passive: true,
        });
    },
    mounted() {
        this.onResize();

        window.addEventListener("resize", this.onResize, {
            passive: true,
        });
    },
    created() {
        this.$store.commit("SET_PAGE_TITLE", this.title),
            this.$store.commit("SET_PAGE_SUBTEXT", this.subText);
        this.$store.commit("SET_BACKGROUND_IMAGE", this.backgroundImage);
    },
    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 600;
        },
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

<style lang="scss" scoped>
.pos__rel {
    position: relative;
}

tr {
    transition: all 0.3s ease-in-out;
}

h3.title__3 {
    display: block;
    width: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    line-height: 2rem;
    word-break: break-all;
    padding-bottom: 10px;
    color: #365abd;
}

h4 {
    display: block;
    width: 100%;
    font-weight: 600 !important;
    font-size: 1.1em;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.87);
}

.do-elevation {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.01),
        0px 6px 10px 0px rgba(0, 0, 0, 0.05), 0px 1px 18px 0px rgba(0, 0, 0, 0.02) !important;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15),
            0 8px 16px -8px rgba(0, 0, 0, 0.01), 0 -6px 16px -6px rgba(0, 0, 0, 0.03) !important;
    }
}

.subpage__1 {
    .dezinfekcija {
        .hr-style--1 {
            margin: 0 auto;
            text-align: center;
            margin: 0 !important;
        }
    }
}

.v-data-table-header {
    background: linear-gradient(67deg,
            rgba(29, 55, 166, 1) 0%,
            rgba(54, 90, 189, 1) 53%,
            rgba(61, 100, 209, 1) 100%);
}

.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th {
    color: rgb(255 255 255 / 90%);
    transition: all 0.2s ease-in-out;
}

.v-data-table>.v-data-table__wrapper>table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid #ccc;
}

.theme--light.v-data-table .v-data-table-header th.sortable:hover,
.theme--light.v-data-table .v-data-table-header th.sortable.active {
    color: rgb(255 255 255);
}

.v-slide-group__content {
    display: flex;
    flex: 1 0 auto;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    white-space: nowrap;
    border-right: 1px solid #e2e2e2;
}

@media only screen and (max-width: 600px) {
    .padding-60 {
        padding: 0;
    }
}

.d__1 {
    color: #46b974 !important;
    border-color: #46b974;
}

.d__2 {
    color: #475fa3 !important;
    border-color: #475fa3;
}

.d__3 {
    color: #3e36bd !important;
    border-color: #3e36bd;
}

.d__4 {
    color: #02afe3 !important;
    border-color: #02afe3;
}

.d__5 {
    color: #06acbe !important;
    border-color: #06acbe;
}

.d__6 {
    color: #e43a29 !important;
    border-color: #e43a29;
}

.d__7 {
    color: #ec4c3d !important;
    border-color: #f25041;
}

.d__8 {
    color: #f56c28 !important;
    border-color: #f56c28;
}
</style>
