<template>
<section class="cta cta__1">
    <v-parallax height="400" :src="require('@/assets/images/cta__image.jpg')">
        <v-container class="ac__cont">
            <v-row>
                <v-col cols="12" sm="12" md="10" class="padding-50 text-center mx-auto">
                    <h3 class="title-heading__3">
                        Nudimo Vam <br />
                        <span class="cta__span--1"><strong>besplatno korištenje</strong></span>
                        <br />
                        water cooler aparata i kafe aparata.
                    </h3>
                    <v-btn class="ma-2 bt--2" tile outlined nuxt to="/distribucija-vode">Ponuda za vodu</v-btn>
                    <v-btn class="ma-2 bt--2" tile outlined nuxt to="/distribucija-kafe">Ponuda za kafu</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-parallax>
</section>
</template>

<style lang="scss" scoped>
.cta__1 {
    position: relative;
    // background: url("~assets/images/cta__image.jpg") 50% 50% no-repeat;
    background-size: cover;

    .bt--2 {
        background: transparent !important;
        color: #fff !important;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.378);
        padding: 25px 40px !important;
    }
}

h3.title-heading__3 {
    font-weight: 100;
    line-height: 46px;
    font-size: 43px;
    color: #ffffff;
    margin-bottom: 40px;
}

.cta__span--1 {
    font-weight: 500;
}

@media only screen and (max-width: 1100px) {
    .padding-50 {
        padding: 0 !important;
    }

    h3.title-heading__3 {
        font-weight: 100;
        line-height: 34px;
        font-size: 26px;
        color: #ffffff;
        margin-bottom: 40px;
    }
}
</style>
