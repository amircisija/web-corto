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
                                <v-toolbar-title>Asortiman dezinfekcionih sredstava i zaštitne
                                    opreme</v-toolbar-title>
                            </v-toolbar>
                            <v-tabs vertical>
                                <v-tab light v-for="(t, index) in tabsItems" :key="index" v-text="t"></v-tab>

                                <v-tab-item v-for="(tab, index) in tabs" :key="index">
                                    <v-card flat>
                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col>
                                                        <h3 class="title__3">
                                                            {{ tab.tabItem.main.info.title }}
                                                        </h3>
                                                        <hr class="hr-style--1 d-block" />
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
    layout: "subPageLayout",
    transition: "home",
    data() {
        return {
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
    font-size: 1.3em;
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
    .section__quality {
        background: url("~assets/images/quality/bg.jpg") 50% 50% no-repeat;
        background-size: contain;

        .hr-style--1 {
            margin: 0 auto;
            text-align: center;
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
</style>
