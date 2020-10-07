<template>
<section class="hero__section">
    <v-parallax height="950" dark :src="require('@/assets/images/hero-image-2.jpg')">
        <v-container fluid class="fill-height ac__cont hero__content">
            <v-row align="center" justify="center" class="fill-height">
                <v-col cols="12" sm="12" md="7" class="mx-auto text-center ts--d text-sm-left text-xs-center">
                    <h2>Besplatna dostava u roku od 24 h</h2>
                    <h1>Distribucija kvalitetne vode i kafe za Vaš ured</h1>
                    <p class="hero__section--p">
                        Sa više od 10 godina iskustva u pružanju usluga biznis
                        korisnicima, firma Corto je <br />
                        <span class="cta__span--1">lider u oblasti dirstibucije vode</span>
                        pomoću water cooler aparata u Bosni i Hercegovini.
                    </p>
                    <v-btn class="ma-2 ml-0 bt--1" tile>Ponuda za vodu</v-btn>
                    <v-btn class="ma-2 bt--2" tile outlined>Ponuda za kafu</v-btn>
                </v-col>
                <v-col sm="5"></v-col>
            </v-row>
        </v-container>

        <div class="img__holder">
            <img class="img__holder--img img__holder--image--1" src="~/assets/images/cta__image__2.png" />
            <img class="img__holder--img img__holder--image--2" src="~/assets/images/cta__image__2-badge.png" />
        </div>
        <div class="shape__wrapper">
            <img class="img-fluid" src="~/assets/images/shape__hero--2.png" />
        </div>
    </v-parallax>
    <IntroSection class="d-sm-up intro__section" />
</section>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        name: "",
        nameRules: [
            (v) => !!v || "Name is required",
            (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false,
    }),

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    },
};
</script>

<style lang="scss">
.hero__content {
    z-index: 100;
    position: relative;
}

.cta__span--1 {
    font-weight: 500;
}

.hero__section {
    height: 100vh;
    margin-bottom: 100px;
    position: relative;
    //background: url("~assets/images/hero-image-2.jpg") 50% 50% no-repeat;
    background-size: cover;

    .shape__wrapper {
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        overflow: hidden;
        z-index: 50;
    }

    .img__holder {
        position: absolute;
        right: 100px;
        bottom: 60px;
        z-index: 10;

        img {
            width: 900px;
            position: absolute;
            right: -170px;
            bottom: 0;
        }
    }

    h1 {
        color: #fff;
        font-size: 60px;
        line-height: 68px;
        margin-bottom: 30px;
        font-weight: 600;
    }

    h2 {
        color: #fff;
        font-size: 30px;
        line-height: 36px;
        margin-bottom: 10px;
        font-weight: 300;
    }

    p.hero__section--p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 22px;
        line-height: 30px;
        font-weight: 300;
        margin-bottom: 30px !important;
    }
}

.bt--1 {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.378);
    padding: 25px 40px !important;
    background: $main-success !important;
    color: #fff !important;
    border-radius: 4px;
    box-shadow: 0 15px 30px 0 rgb(115 119 110 / 32%);
    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 5px 20px 0 rgb(115 119 110 / 20%);
    }
}

.bt--2 {
    color: #ffffff !important;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.378);
    padding: 25px 40px !important;
    border-radius: 4px;
    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 5px 20px 0 rgb(115 119 110 / 20%);
    }
}

.hero__section .img__holder {
    position: absolute;
    right: 0;
    bottom: 60px;
    z-index: 10;
    overflow: hidden;
    width: 100%;
    top: 0;
}

.hero__section .img__holder img {
    width: 870px;
    right: -100px;
}

.ts--d {
    top: 200px;
    position: absolute;
    left: 0;
}

@media only screen and (max-width: 1500px) {
    .hero__section .img__holder img {
        width: 700px;
        right: -100px;
    }
}

@media only screen and (max-width: 1300px) {
    .hero__section .img__holder img {
        width: 700px;
        right: -190px;
    }

    .ts--d {
        top: 100px;
        position: absolute;
        left: 0;
    }
}

@media only screen and (max-width: 1100px) {
    .hero__section h1 {
        color: #fff;
        font-size: 49px;
        line-height: 68px;
        margin-bottom: 30px;
        font-weight: 600;
        max-width: 600px;
    }

    .d-sm-up {
        display: none;
    }

    .hero__section {
        height: 83vh;
    }
}

@media only screen and (max-width: 600px) {

    .img__holder--image--1,
    .img__holder--image--2 {
        display: none;
    }

    .hero__section h2 {
        font-size: 18px;
        line-height: 36px;
    }

    .hero__section h1 {
        font-size: 34px;
        line-height: 41px;
    }

    .hero__section p.hero__section--p {
        font-size: 18px;
        line-height: 30px;
    }
}
</style>
