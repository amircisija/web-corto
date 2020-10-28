<template>
<div>
    <AppPageTitle />
    <div class="main__content subpage__1">
        <section class="page__section coffee__section">
            <v-container class="ac__cont">
                <v-row>
                    <v-col class="my-auto pos__rel d-none d-md-block" cols="12" sm="12" md="5">
                        <v-row>
                            <v-col cols="12">
                                <img class="img-fluid elevation-ac img__b" style="max-width: 100%" src="~/assets/images/img__4.jpg" />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <img class="img-fluid elevation-ac img__b" style="max-width: 100%" src="~/assets/images/img__1.png" />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <img class="img-fluid elevation-ac img__b" style="max-width: 100%" src="~/assets/images/img__2.png" />
                            </v-col>
                        </v-row>

                    </v-col>
                    <v-col class="padding-60 my-auto" cols="12" sm="12" md="7">
                        <span class="title-span__2">Doživljaj za sva čula</span>
                        <h1 class="title-heading__2 mb-2">Kimbo kafa i aparati</h1>

                        <hr class="hr-style--1" />
                        <p>
                            Sve počinje pažljivom selekcijom najkvalitetnijiH zrna kafe
                            direktno sa plantaža. Majstorska kreacija ekskluzivnih mješavina
                            različitih zrna kafe i specijalan način prženja, tajne su
                            jedinistvene espresso kafe koja zadovoljava i najkritičnijeg
                            gurmana.
                        </p>
                        <p class="mb-40">
                            Užitak koji oživljava sva čula: puna zlatna krema, izbalansiran
                            okus, intenzivna aroma koja mjenja pauzu za kafu u moment užitka
                            za svaki dan.
                        </p>
                        <v-alert border="left" colored-border color="success accent-4" class="pl-4 elevation-ac">
                            <p class="lead pl-5">
                                Za Vaš ured nudimo Vam na korištenje uredski aparat za espresso kafu u kapsulama uz uvjet minimalne mjesečne potrošnje. Osigurana je <strong>besplatna dostava</strong> kafe na adresu, servis aparata, kao i zamjena u slučaju eventualnih kvarova.
                            </p>
                        </v-alert>
                        <br />
                        <v-btn class="ma-2 ml-0 bt--1" tile nuxt to="/kontakt">Naruči</v-btn>
                    </v-col>
                    <v-col class="d-flex d-sm-none" cols="12" sm="12" md="5">
                        <v-row>
                            <v-col cols="12">
                                <img class="img-fluid elevation-ac img__b" style="max-width: 100%" src="~/assets/images/img__4.jpg" />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <img class="img-fluid elevation-ac img__b" style="max-width: 100%" src="~/assets/images/img__1.png" />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <img class="img-fluid elevation-ac img__b" style="max-width: 100%" src="~/assets/images/img__2.png" />
                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</div>
</template>

<script>
export default {
    layout: "subPageLayout",
    transition: "home",
    data() {
        return {
            title: "Distribucija Kimbo kafe i aparata",
            subText: "Nam aliquet dolor mauris, tempor dapibus est luctus fringilla. Praesent pellentesque lacus sit amet sapien commodo tempus.",
            backgroundImage: require("~/assets/images/hero_sub.jpg")
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
                    content: "Corto d.o.o. - Distribucija Kimbo kafe i aparata"
                }
            ]
        };
    },
    created() {
        this.$store.commit("SET_PAGE_TITLE", this.title),
            this.$store.commit("SET_PAGE_SUBTEXT", this.subText);
        this.$store.commit("SET_BACKGROUND_IMAGE", this.backgroundImage);
    },
    computed: {
        pageTitle() {
            return this.$store.state.pageTitle;
        }
    }
};
</script>

<style lang="scss">
.pos__rel {
    position: relative;
}

.img__b {
    border: 1px solid #afbfe8;
}

.coffee__section {
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

@media only screen and (max-width: 1100px) {
    .coffee__section {
        .k__img--1 {
            display: none;
        }

        .k__img--2 {
            display: none;
        }
    }
}
</style>
