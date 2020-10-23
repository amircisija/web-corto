<template>
<div>
    <AppPageTitle />
    <div class="main__content subpage__1">
        <section class="page__section coffee__section">
            <v-container class="ac__cont">
                <v-row>
                    <v-col class="my-auto pos__rel" cols="12" sm="12" md="5">
                        <img src="~/assets/images/k--1.jpg" class="elevation-ac k__img--1" alt="" />
                        <img src="~/assets/images/k--2.jpg" class="elevation-ac k__img--2" alt="" />
                        <img class="img-fluid elevation-ac" style="max-width: 100%" src="~/assets/images/k--3.jpg" />
                    </v-col>
                    <v-col class="padding-60 my-auto" cols="12" sm="12" md="7">
                        <span class="title-span__2">Kvalitet i povjerenje</span>
                        <h1 class="title-heading__2 mb-2">Kvalitetna voda i kafa za Vaš ured širom Bosne i Hercegovine</h1>
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

                        <br />
                        <v-btn class="ma-2 ml-0 bt--1" tile>Naruči</v-btn>
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
            backgroundImage: require("~/assets/images/cta__image.jpg")
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
                    content: "Corto d.o.o. - Pored vode Aqua Bianca, nudimo i kafu Kimbo i čajeve Plantago."
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
