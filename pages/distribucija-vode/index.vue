<template>
<div>
    <AppPageTitle />
    <div class="main__content subpage__1">
        <section class="page__section">
            <v-container class="ac__cont">
                <v-row class="water__section">
                    <v-col class="pos__rel d-none d-md-block" cols="12" sm="12" md="5">
                        <img class="k__img--3" style="max-width: 100%" src="~/assets/images/img__5.png" />
                        <img src="~/assets/images/cta__image__4.png" class="k__img--2" alt="" />
                    </v-col>
                    <v-col cols="12" sm="12" md="7" class="padding-60 my-auto">
                        <span class="title-span__2">Prirodna izvorska voda</span>
                        <h1 class="title-heading__2 mb-2">Aqua Bianca</h1>
                        <hr class="hr-style--1" />
                        <p>
                            Aqua Bianca je prirodna negazirana mineralna voda. Zahvaljujući optimalnom odnosu minerala, kalcijuma i magnezijuma Aqua Bianca voda pogodna je za svakodnevnu upotrebu. Voda Aqua Bianca dolazi sa planine Perun na lokalitetu općine Vareš.
                        </p>
                        <p class="mb-40">
                            Ukupna mineralizacija vode je mg/l 263,33 što je vrijednosni sinonim za vrhunski kvalitet.
                        </p>
                        <v-alert border="left" colored-border color="success accent-4" class="pl-4 elevation-ac">
                            <p class="lead pl-5">
                                Nudimo Vam na <strong>besplatno korištenje</strong> aparata za vodu uz kupovinu samo tri galona vode mjesečno.
                            </p>
                        </v-alert>
                        <br />
                        <v-btn class="ma-2 ml-0 bt--1" tile nuxt to="/kontakt">Naruči</v-btn>
                        <v-btn class="ma-2 bt--2" outlined @click="$vuetify.goTo('#znacaj-vode')">Značaj vode</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="section_wi page__section" id="znacaj-vode">
            <WaterImportance />
        </section>
        <section class="page__section section__quality pb-0" id="kvalitet-vode">
            <v-container class="ac__cont">
                <v-row>
                    <v-col class="padding-60 my-auto mx-auto text-center" sm="7">
                        <span class="title-span__2">Analiza</span>
                        <h2 class="title-heading__2 mb-2">
                            Prirodna izvorska voda <br />Aqua Bianca
                        </h2>
                        <p class="lead">
                            Sa niskim sadržajem rastovirih mineralnih materija i natriujma
                        </p>
                        <hr class="hr-style--1" />
                    </v-col>
                </v-row>
                <v-row class="page__section quality__section--sm">
                    <v-col class="box__outer--1" cols="12" sm="4">
                        <div class="box__wrapper">
                            <div v-for="box in boxes" v-bind:key="box.id" :class="`box__inner ${box.class}`">
                                <div class="box__inner--text">
                                    <h4>{{ box.title }}</h4>
                                    <p>{{ box.subtext }}</p>
                                </div>

                                <div class="box__inner--image">
                                    <img class="img-fluid" style="max-width: 100%" :src="`${box.image}`" />
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <img class="img-fluid" style="max-width: 100%" src="~/assets/images/img--glass.png" />
                    </v-col>
                    <v-col class="box__outer--2" cols="12" sm="4">
                        <div class="box__wrapper">
                            <div v-for="box in boxes2" v-bind:key="box.id" :class="`box__inner ${box.class}`">
                                <div class="box__inner--text">
                                    <h4>{{ box.title }}</h4>
                                    <p>{{ box.subtext }}</p>
                                </div>

                                <div class="box__inner--image">
                                    <img class="img-fluid" style="max-width: 100%" :src="`${box.image}`" />
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="page__section quality__section--xs">
                    <v-col class="box__outer--1 text-left my-auto" cols="12" sm="6">
                        <div class="box__wrapper" v-for="box in boxes" v-bind:key="box.id">
                            <div class="box__inner--text d-flex justify-start align-start">
                                <img :src="`${box.image}`" class="d-inline-block" alt="" />
                                <h4 class="d-inline-block pt-5">{{ box.title }}</h4>
                                <p class="d-inline-block">{{ box.subtext }}</p>
                            </div>
                        </div>
                        <div class="box__wrapper" v-for="box in boxes2" v-bind:key="box.id">
                            <div class="box__inner--text d-flex justify-start align-start">
                                <img :src="`${box.image}`" class="d-inline-block" alt="" />
                                <h4 class="d-inline-block pt-5">{{ box.title }}</h4>
                                <p class="d-inline-block">{{ box.subtext }}</p>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" class="text-center my-auto">
                        <img class="img-fluid mx-auto text-center" style="max-width: 100%" src="~/assets/images/img--glass.png" />
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</div>
</template>

<script>
export default {
    layout: "subpage",
    transition: "home",
    data() {
        return {
            boxes: [{
                    id: 1,
                    title: "Hidrokarbonati",
                    subtext: "122",
                    class: "box__1",
                    image: require("~/assets/images/quality/icon__1.png"),
                },
                {
                    id: 2,
                    title: "Kalcijum",
                    subtext: "23,25",
                    class: "box__2",
                    image: require("~/assets/images/quality/icon__2.png"),
                },
                {
                    id: 3,
                    title: "Kalijum",
                    subtext: "0,49",
                    class: "box__3",
                    image: require("~/assets/images/quality/icon__3.png"),
                },
            ],
            boxes2: [{
                    id: 4,
                    title: "Natrijum",
                    subtext: "2,20",
                    class: "box__1",
                    image: require("~/assets/images/quality/icon__4.png"),
                },
                {
                    id: 5,
                    title: "Hloridi",
                    subtext: "1,95",
                    class: "box__2",
                    image: require("~/assets/images/quality/icon__5.png"),
                },
                {
                    id: 6,
                    title: "Magnezijum",
                    subtext: "2,78",
                    class: "box__3",
                    image: require("~/assets/images/quality/icon__6.png"),
                },
            ],
            title: "Distribucija Aqua Bianca vode",
            subText: "Nam aliquet dolor mauris, tempor dapibus est luctus fringilla. Praesent pellentesque lacus sit amet sapien commodo tempus.",
            backgroundImage: require("~/assets/images/hero_sub.jpg"),
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
                    content: "Corto d.o.o. - Corto d.o.o. se bavi punjenjem i isporukom Aqua Bianca vode u galonima pomoću water cooler aparata kao i distribucijom kafe Kimbo porijeklom iz Italije",
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
        pageTitle() {
            return this.$store.state.pageTitle;
        },
    },
};
</script>

<style lang="scss">
.water__section {
    .k__img--1 {
        position: absolute;
        max-width: 240px;
        top: -100px;
        left: -80px;
    }

    .k__img--2 {
        position: absolute;
        bottom: 0;
        left: -10px;
        max-width: 567px;
        bottom: -80px;
    }

    .k__img--3 {
        position: absolute;
        top: 0;
        right: -10px;
        max-width: 400px !important;
    }
}

.section_wi {
    background: #fafafa;
}

.subpage__1 {
    .section__quality {
        background: url("~assets/images/quality/bg.jpg") 50% 50% no-repeat;
        background-size: contain;
        position: relative;
        overflow: hidden;

        .hr-style--1 {
            margin: 0 auto;
            text-align: center;
        }
    }

    .box__outer--1 {
        .box__wrapper {
            position: relative;
            top: 15%;
        }

        .box__1 {
            top: 0;
        }

        .box__2 {
            top: 160px;
            right: 60px;
        }

        .box__3 {
            top: 320px;
            right: 0;
        }

        .box__inner {
            position: absolute;
            width: 100%;
            text-align: right;

            p {
                margin-bottom: 0;
            }

            .box__inner--text {
                position: absolute;
                right: 120px;

                h4 {
                    font-size: 1.6em;
                    color: $main-dark;
                }

                p {
                    font-weight: 700;
                    color: #2b69bf;
                    font-size: 1.6em;
                }
            }

            .box__inner--image {
                position: absolute;
                right: 0;
                top: -10px;
            }
        }
    }

    .box__outer--2 {
        .box__wrapper {
            position: relative;
            top: 15%;
        }

        .box__1 {
            top: 0;
        }

        .box__2 {
            top: 160px;
            left: 60px;
        }

        .box__3 {
            top: 320px;
            left: 0;
        }

        .box__inner {
            position: absolute;
            width: 100%;
            text-align: left;

            p {
                margin-bottom: 0;
            }

            .box__inner--text {
                position: absolute;
                left: 120px;

                h4 {
                    font-size: 1.6em;
                    color: $main-dark;
                }

                p {
                    font-weight: 700;
                    color: #2b69bf;
                    font-size: 1.6em;
                }
            }

            .box__inner--image {
                position: absolute;
                left: 0;
                top: -10px;
            }
        }
    }
}

.quality__section--sm {
    position: relative;
    margin: 0 auto;
}

.quality__section--xs {
    display: none;
}

@media only screen and (max-width: 1020px) {
    .quality__section--sm {
        display: none;
    }

    .quality__section--xs {
        display: flex;
        position: relative;

        img {
            width: 90px;
        }

        .box__inner--text h4 {
            font-size: 1.6em;
            color: #365abd;
        }

        .box__inner--text p {
            font-weight: 700;
            color: #2b69bf;
            font-size: 1.2em;
            padding-top: 25px;
            margin-left: 20px;
        }
    }
}
</style>
