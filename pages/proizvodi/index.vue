<template>
<div>
    <AppPageTitle />
    <div class="main__content subpage__1">
        <v-dialog v-model="dialog" max-width="690">
            <v-card v-if="selectedProduct">
                <v-card-title>
                    <span class="headline">Narudžba za proizvod
                        <strong>{{ selectedProduct.name }}</strong></span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Vaše ime" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="Vaše prezime"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Naziv firme" persistent-hint required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Telefon" persistent-hint required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="126">
                                <v-select :items="['0-20', '21-40', '41-60', '61+']" label="Količina" required></v-select>
                            </v-col>
                            <v-col cols="12" class="text-center">
                                <v-btn class="ma-2 ml-0 bt--1 mt-1 mx-auto text-center" tile @click="dialog = false">
                                    Pošalji upit
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>

        <section class="page__section coffee__section">
            <v-container class="ac__cont">
                <v-row>
                    <v-col class="padding-60 my-auto" cols="12" sm="12" md="12">
                        <span class="title-span__2">Odio delectus odit</span>
                        <h2 class="title-heading__2 mb-2">Proizvodi</h2>
                        <p class="lead">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                            delectus odit, harum nobis quis aperiam quaerat, accusantium
                            numquam aliquam magnam, dolores reiciendis aut! Ad illum quas in
                            commodi quidem omnis.
                        </p>
                        <hr class="hr-style--1" />
                    </v-col>
                </v-row>
                <v-row class="padding-60">
                    <v-col cols="12" sm="6" md="3" v-for="product in products" :key="product.id">
                        <v-card class="mb-5 product__card">
                            <v-img v-for="image in product.images" height="250" :src="image.src" :key="image.id"></v-img>
                            <v-card-text>
                                <h2>
                                    {{ product.name }}
                                    <span class="float-right">{{ product.price }} KM</span>
                                </h2>
                                <p v-html="product.description"></p>
                                <v-btn class="ma-2 ml-0 bt--1 mt-1 mx-auto text-center" tile @click="selectProduct(product)">
                                    Naruči
                                </v-btn>
                            </v-card-text>
                        </v-card>
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
            dialog: false,
            selectedProduct: null,
            title: "Proizvodi",
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
        pageTitle() {
            return this.$store.state.pageTitle;
        },
        products() {
            return this.$store.getters.getProducts;
        },
    },
    methods: {
        selectProduct(product) {
            console.log(product);
            this.selectedProduct = product;
            this.dialog = true;
            console.log(this.selectedProduct);
        },
    },
};
</script>

<style lang="scss">
.pos__rel {
    position: relative;
}

.product__card {
    h2 {
        font-size: 1.2em;
    }

    p {
        font-size: 0.9em;
    }
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

.headline strong {
    color: #365abd;
}
</style>
