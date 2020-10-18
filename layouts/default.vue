<template>
<v-app light>
    <AppNavigation />
    <v-main class="py-0">
        <nuxt />
    </v-main>
    <AppFooter />
</v-app>
</template>

<script>
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import {
    apiAuth
} from "@/api/auth";
export default {
    name: "Default",
    data() {
        return {
            products: null,
        };
    },
    methods: {
        getProducts() {
            const api = new WooCommerceRestApi({
                url: apiAuth.url,
                consumerKey: apiAuth.consumerKey,
                consumerSecret: apiAuth.consumerSecret,
                version: apiAuth.version,
            });

            api
                .get("products", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                        "cache-control": "no-cache",
                    },
                })
                .then((response) => {
                    this.products = response.data;
                    this.$store.commit("SET_PRODUCTS", this.products);
                })
                .catch((error) => {
                    console.log(error.response);
                });
        },
    },
    created() {
        this.getProducts();
    },
};
</script>

<style lang="scss">
</style>
