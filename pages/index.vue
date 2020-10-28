<template>
<div class="main__content">
    <HeroSection />
    <IntroSection class="" />
    <!-- <IntroSection class="d-show-up" /> -->
</div>
</template>

<script>
/* import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue' */

export default {
    head() {
        return {
            title: "Distribucija vode, kafe i dezinfekcijskih sredstava",
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: "description",
                    name: "description",
                    content: "Corto d.o.o. - Sa više od 10 godina iskustva u pružanju usluga biznis korisnicima firma Corto d.o.o. je lideru oblasti dirstibucije vode pomoću water cooler aparata u Bosni i Hercegovini."
                }
            ]
        };
    },
};
</script>

<style lang="scss">
.d-show-up {
    display: none;
}

@media only screen and (max-width: 1100px) {
    .d-sm-up {
        display: none;
    }

    .d-show-up {
        display: block;
    }
}
</style>
