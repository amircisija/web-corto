<template>
<div>
    <AppPageTitle />
    <ContactSection />
    <MapSection />
</div>
</template>

<script>
export default {
    layout: "subPageLayout",
    transition: "home",
    data() {
        return {
            title: "Kontakt",
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
                    content: "Corto d.o.o. - Kontaktirajte nas"
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
