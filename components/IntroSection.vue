<template>
<section>
    <v-container class="ac__cont">
        <v-row>
            <v-col v-for="box in boxes" :key="box.id" cols="12" sm="6" md="4">

                <v-card class="elevation-ac intro__cards text-center">

                    <v-img height="220" :src="box.img"></v-img>

                    <v-card-title class="pt-5">
                        <h3>{{ box.title }}</h3>
                    </v-card-title>
                    <v-btn class="mx-auto bt--1" nuxt exact :to="box.link">Saznaj više</v-btn>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</section>
</template>

<script>
export default {
    data() {
        return {
            boxes: [{
                    id: 1,
                    title: "Aqua Bianca voda",
                    text: "Aqua Bianca je prirodna negazirana mineralna voda. Zahvaljujući optimalnom odnosu minerala, kalcijuma i magnezijuma i niskom sadržaju natrijuma, Aqua Bianca voda pogodna je za svakodnevnu upotrebu.",
                    img: require("~/assets/images/logo--qb.jpg"),
                    link: "/distribucija-vode",
                },
                {
                    id: 2,
                    title: "Kimbo kafa i aparati",
                    text: "Užitak koji oživljava sva čula: puna zlatna krema, izbalansiran okus, intenzivna aroma koja mjenja pauzu za kafu u moment užitka za svaki dan.",
                    img: require("~/assets/images/logo--kimbo.jpg"),
                    link: "/distribucija-kafe",
                },
                {
                    id: 3,
                    title: "Dezinfekcijska oprema",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
                    img: require("~/assets/images/logo--d.jpg"),
                    link: "/dezinfekcijska-oprema",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.intro__cards {
    min-height: 390px;

    .hr-style--1 {
        border-top: 1px solid #9a9a9a;
        width: 80px;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    h3 {
        display: block;
        width: 100%;
        font-weight: 600 !important;
        font-size: 1em;
    }
}

.intro__cards {
    transition: all 0.2s ease-in-out;

    &:hover.elevation-ac {
        box-shadow: 0 5px 17px -5px rgba(50, 50, 93, 0.10), 0 8px 16px -8px rgba(0, 0, 0, 0.01), 0 -6px 16px -6px rgba(0, 0, 0, 0.03) !important;
    }
}

.intro__section {
    z-index: 200;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -200px;
}

.img__box {
    display: inline-block;
    background: #eaeaea;
    position: relative;
    top: 0;
    left: 15px;
    right: 0;
    width: 60px;
    height: 60px;
    /* padding: 40px; */
    border-radius: 0;
    text-align: center;
    padding-left: 4px;
    padding-top: 2px;
    border-radius: 50% !important;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15),
        0 8px 16px -8px rgba(0, 0, 0, 0.01), 0 -6px 16px -6px rgba(0, 0, 0, 0.03) !important;
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;
}
</style>
