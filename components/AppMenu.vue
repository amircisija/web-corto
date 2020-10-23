<template>
<div>
    <v-btn class="nav__links px-5" v-for="item in items" :key="item.title" text :to="{ path: item.to, hash: item.hash }" nuxt>{{ item.title }}</v-btn>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    title: "Početna",
                    sm: 0,
                    to: "/",
                    hash: "",
                },
                {
                    title: "O nama",
                    sm: 1,
                    to: "/o-nama",
                    hash: "",
                },
                {
                    title: "Voda",
                    sm: 0,
                    to: "/distribucija-vode",
                    hash: "",
                },
                {
                    title: "Kafa",
                    sm: 0,
                    to: "/distribucija-kafe",
                    hash: "",
                },
                {
                    title: "Dezinfekcija",
                    sm: 0,
                    to: "/dezinfekcijska-oprema",
                    hash: "",
                },
                {
                    title: "Snack & Napici",
                    sm: 0,
                    to: "/proizvodi",
                    hash: "",
                },
                {
                    title: "Kontakt",
                    sm: 0,
                    to: "/kontakt",
                    hash: "",
                },
            ],
            title: "Corto d.o.o",
        };
    },
};
</script>
