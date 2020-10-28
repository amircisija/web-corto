<template>
<div>
    <AppPageTitle />
    <div class="main__content subpage__1">
        <section class="page__section coffee__section">
            <v-container class="ac__cont">
                <v-row>
                    <v-col class="my-auto pos__rel" cols="12" sm="12" md="5">

                        <img class="img-fluid elevation-ac" style="max-width: 100%" src="~/assets/images/team.jpg" />
                    </v-col>
                    <v-col class="padding-60 my-auto" cols="12" sm="12" md="7">
                        <span class="title-span__2">Kvalitet i povjerenje</span>
                        <h1 class="title-heading__2 mb-2">Corto d.o.o. Sarajevo</h1>
                        <hr class="hr-style--1" />
                        <p>
                            Firma Corto d.o.o. Sarajevo je proizvodno uslužnog oblika sa sjedištem u Sarajevu a sa radom je započela 2012 godine. Corto d.o.o. se bavi punjenjem i isporukom vode u galonima pomoću water cooler aparata kao i distribucijom kafe Kimbo porijeklom iz Italije. <strong>Isporuka naših proizvoda se vrši i u drugim dijelovima Bosne i Hercegovine.</strong>
                        </p>
                        <p>
                            Ciljevi u koje smo uložili velike napore tokom godina su da postanemo dostupni na području čitave BiH kao firma koja opslužuje druge firme vode,kafom i drugim osvježavajućim pićima.
                        </p>
                        <p class="mb-40">
                            Povjerenje kupaca u uslužnoj industriji veoma je važno jer je riječ o proizvodima za koji se kupci posebno vežu. Svjesni odgovornosti koju imamo marljivo radimo kako bismo pridobili povjerenje klijenata.
                        </p>

                        <v-alert border="left" colored-border color="success accent-4" class="pl-4 elevation-ac">
                            <p class="lead pl-5">
                                Vjerujemo da se povjerenje u uslugu održava kroz efikasnost, korektnost i fleksibilnost, i naš fokus je upravo na ovim vrijednostima.
                            </p>
                        </v-alert>
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
            title: "O nama",
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
                    content: "Corto d.o.o. - Corto d.o.o. se bavi punjenjem i isporukom vode u galonima pomoću water cooler aparata kao i distribucijom kafe Kimbo porijeklom iz Italije"
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
