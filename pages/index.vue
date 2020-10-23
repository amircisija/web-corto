<template>
<div class="main__content">
    <HeroSection />
    <IntroSection class="d-show-up" />
</div>
</template>

<script>
/* import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue' */

export default {};
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
