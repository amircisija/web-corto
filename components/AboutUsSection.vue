<template>
<div>
    <section class="about__us--section mb-40">
        <v-container class="ac__cont">
            <v-row>
                <v-col cols="12" sm="12" md="5" class="my-auto">
                    <img class="img-fluid" style="max-width: 100%" src="~/assets/images/img--2.jpg" />
                </v-col>
                <v-col cols="12" sm="12" md="7" class="padding-60 my-auto">
                    <span class="title-span__2">Kvalitet i povjerenje</span>
                    <h2 class="title-heading__2 mb-2">
                        Kvalitetna voda i kafa za Vaš ured širom Bosne i Hercegovine
                    </h2>
                    <p class="lead">
                        Vjerujemo da se povjerenje u uslugu održava kroz efikasnost,
                        korektnost i fleksibilnost, i naš fokus je upravo na ovim
                        vrijednostima.
                    </p>
                    <hr class="hr-style--1" />
                    <p class="mb-40">
                        Sjedište firme Corto d.o.o. je u Sarajevu, a
                        <strong>isporuka se vrši i u drugim dijelovima Bosne i
                            Hercegovine</strong>. Povjerenje kupaca u uslužnoj industriji veoma je važno jer je
                        riječ o proizvodima za koji se kupci posebno vežu. Svjesni
                        odgovornosti koju imamo marljivo radimo kako bismo pridobili
                        povjerenje klijenata.
                    </p>

                    <v-card class="do-elevation contact__information mb-40" max-width="444">
                        <v-card-text>
                            <v-list dense flat>
                                <v-list-item-group color="primary">
                                    <v-list-item v-for="(item, i) in items" :key="i" class="pl-0">
                                        <v-list-item-icon class="mr-4">
                                            <img src="~/assets/images/tick.svg" width="40" alt="" />
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title class="list__inner">
                                                <p>{{ item.text }}</p>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card-text>
                    </v-card>

                    <br />
                    <v-btn class="ma-2 ml-0 bt--1 mt-1" tile>Saznaj više</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
    <v-container class="ac__cont mb-40">
        <v-row>
            <v-col cols="12" sm="12" md="8" class="mx-auto">
                <v-alert prominent type="success" class="elevation-ac alert-cta elevation-20">
                    <v-row align="center">
                        <v-col class="grow">
                            <h2 class="text-h4 pl-5 mb-3">
                                Novo u ponudi Corto d.o.o. <br />
                                <strong>Dezinfekcijska sredstva</strong>
                            </h2>
                            <p class="pl-5 white--text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
                                a pariatur consectetur officia necessitatibus aperiam veniam.
                            </p>
                        </v-col>
                        <v-col class="shrink">
                            <v-btn class="bt--2 mt-5" outlined nuxt to="/dezinfekcijska-oprema">Pogledaj</v-btn>
                        </v-col>
                    </v-row>
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
    <section class="about__us--section--add">
        <v-container class="ac__cont">
            <v-row>
                <v-col class="padding-60 my-auto pos__rel" cols="12" sm="8" md="7">
                    <span class="title-span__2">Lorem ipsum</span>
                    <h2 class="title-heading__2 mb-2">Placeholder Title</h2>
                    <hr class="hr-style--1" />
                    <p>
                        Trudimo se da naši proizvodi i usluge odgovore potrebama klijenata
                        po pitanju kvalitete. Od 2016. godine ponuda naše firme je
                        proširena, tako da pored vode Aqua Bianca uključuje kafu. Izborom
                        Corto usluga, klijenti pokazuju da brinu za svoje zaposlene, a mi
                        brinemo o svakom korisniku naših proizvoda i usluga. U našoj
                        ponudi nalaze se i <strong>aparati za vodu</strong>, kao i
                        <strong>aparati za kafu</strong>, što nam omogućava da izađemo
                        ususret različitim potrebama korisnika koji žele da na svom radnom
                        mjestu imaju kvalitetn uvodu, kafu i čaj.
                    </p>
                    <p class="mb-40">
                        Dugoročna poslovna saradnja izuzetno je značajna za uspješno
                        poslovanje, zato svoja dugogodišnja partnerstva sa klijentima
                        smatramo privilegijom.
                    </p>

                    <v-btn class="ma-2 ml-0 bt--1 mt-5" tile nuxt to="/distribucija-vode">Ponuda za vodu</v-btn>
                    <v-btn class="ma-2 bt--2 mt-5" outlined nuxt to="/distribucija-kafe">Ponuda za kafu</v-btn>
                </v-col>

                <v-col cols="12" sm="4" md="5" class="my-auto pos__rel">
                    <img src="~/assets/images/k--1.jpg" class="elevation-ac k__img--1" alt="" />
                    <img src="~/assets/images/k--2.jpg" class="elevation-ac k__img--2" alt="" />
                    <img class="img-fluid elevation-ac" style="max-width: 100%" src="~/assets/images/k--3.jpg" />
                </v-col>
            </v-row>
        </v-container>
    </section>
</div>
</template>

<script>
export default {
    data: () => ({
        item: 1,
        items: [{
                text: "Dostava u 24h",
                icon: "mdi-clock",
            },
            {
                text: "Zagarantovan kvalitet",
                icon: "mdi-account",
            },
            {
                text: "Vrhunska podrška",
                icon: "mdi-flag",
            },
        ],
    }),
};
</script>

<style lang="scss">
.cols__r--bg--1 {
    position: absolute;
    width: 800px;
    bottom: 15%;
    right: -240px;
}

.pos__rel {
    position: relative;
    z-index: 100;
}

.alert-cta {
    background: url("~assets/images/cta-2.jpg") 50% 80% no-repeat;
    background-size: cover;
}

.about__us--section {
    padding-top: 160px;
}

.about__us--section--add {
    position: relative;
    background: #fff;
    padding-bottom: 160px;
    overflow: hidden;

    .k__img--1 {
        position: absolute;
        max-width: 240px;
        top: -100px;
        right: -80px;
    }

    .k__img--2 {
        position: absolute;
        max-width: 200px;
        bottom: -100px;
        left: -10px;
    }
}

.list__inner {
    p {
        margin-bottom: 0;
    }
}

@media only screen and (max-width: 1100px) {
    .about__us--section {
        padding-top: 0;
    }

    .about__us--section--add {
        .k__img--1 {
            display: none;
        }

        .k__img--2 {
            display: none;
        }
    }
}
</style>
