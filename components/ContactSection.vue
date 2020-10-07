<template>
<section class="contact contact__section" id="kontakt">
    <v-container fluid class="py-0">
        <v-row>
            <v-col class="pb-xs-1 padding-200 my-auto" lg="6" sm="12" md="6" cols="12">
                <span class="title-span__2">lorem ipsum</span>
                <h2 class="title-heading__2 mb-2">Kontakt</h2>
                <p class="lead">Stojimo Vam na raspolaganju za sva Vaša pitanja</p>
                <hr class="hr-style--1" />
                <p class="mb-40">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    unde temporibus harum eius veritatis consequatur nemo natus nobis
                    voluptas eum ex molestias, saepe debitis, repudiandae consectetur
                    aperiam esse non fugiat?
                </p>

                <v-card class="do-elevation contact__information mt-5" max-width="444">
                    <v-card-text>
                        <v-list dense flat>
                            <v-list-item-group color="primary">
                                <v-list-item class="pl-0">
                                    <v-list-item-icon class="mr-4">
                                        <v-icon class="top__bar--icon">mdi-google-maps</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title class="list__inner">
                                            <p>
                                                {{ company.address }}
                                            </p>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item class="pl-0">
                                    <v-list-item-icon class="mr-4">
                                        <v-icon class="top__bar--icon">mdi-phone</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title class="list__inner">
                                            <p>
                                                {{ company.phone }}
                                            </p>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item class="pl-0">
                                    <v-list-item-icon class="mr-4">
                                        <v-icon class="top__bar--icon">mdi-email-outline</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title class="list__inner">
                                            <p>
                                                <a :href="`mailto:${company.email}`">{{
                            company.email
                          }}</a>
                                            </p>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item class="pl-0">
                                    <v-list-item-icon class="mr-4">
                                        <v-icon class="top__bar--icon">mdi-facebook</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title class="list__inner">
                                            <p>
                                                <a :href="company.facebookLink" target="_blank">
                                                    {{ company.facebook }}
                                                </a>
                                            </p>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col class="bg-dark pa-xs-90" lg="6" sm="12" md="6" cols="12">
                <v-container fill-height>
                    <v-row olumn justify-space-between fill-height>
                        <v-col>
                            <v-card class="do-elevation contact__card">
                                <v-card-text>
                                    <v-form ref="form" v-model="valid" lazy-validation>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12">
                                                    <h3>Pošaljite nam poruku</h3>
                                                </v-col>
                                                <v-col>
                                                    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Vaše ime" required filled></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col>
                                                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required filled></v-text-field>
                                                </v-col>
                                                <v-col>
                                                    <v-text-field v-model="phone" label="Telefon" required filled></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col>
                                                    <v-select v-model="select" :items="items" :rules="[(v) => !!v || 'Obavezno polje']" label="Imam pitanje u vezi" required filled></v-select>
                                                    <v-textarea name="input-7-1" label="Vaša poruka" value="" hint="Pošaljite nam upit" filled></v-textarea>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col class="mx-auto text-center">
                                                    <v-btn :disabled="!valid" class="mx-auto bt--1" tile @click="validate">
                                                        Pošalji poruku
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-container>

                                        <!--
                <v-btn color="error" class="mr-4" @click="reset">
                  Reset Form
                </v-btn>

                <v-btn color="warning" @click="resetValidation">
                  Reset Validation
                </v-btn> -->
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</section>
</template>

<script>
export default {
    data: () => ({
        item: 1,
        contactInfos: 3,
        contactInfos: [{
                text: "Dostava u 24h",
                icon: "mdi-clock",
            },
            {
                text: "Zagarantovan kvalitet",
                icon: "mdi-account",
            },
            {
                text: "Vrhunska podrška",
                icon: "mdi-flag",
            },
        ],
        valid: true,
        name: "",
        phone: null,
        nameRules: [
            (v) => !!v || "Obavezno polje",
            (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "Obavezno polje",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        select: null,
        items: [
            "Narudžbe vode",
            "Narudžbe kafe",
            "Narudžbe dezinfekcijska sredstava",
            "Narudžbe pića i snacks",
        ],
        checkbox: false,
    }),
    computed: {
        company() {
            return this.$store.state.company;
        },
    },
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
.bg-dark {
    background: url("../assets/images/contact__image.jpg") 50% 50% no-repeat;
    background-size: cover;
}

.contact__card {
    max-width: 600px;
    margin: 0 auto;
    padding: 50px;
}

.contact__information {
    border: 1px solid #eaeaea !important;

    .v-icon {
        color: rgb(54 90 189) !important;
    }

    a {
        color: #717a85;
        text-decoration: none;
    }
}

@media only screen and (max-width: 1100px) {
    .padding-200 {
        padding: 60px;
    }

    .contact__card {
        max-width: 600px;
        margin: 0 auto;
        padding: 0px;
    }
}
</style>
