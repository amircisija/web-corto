<template>
<v-container class="ac__cont">
    <v-row>
        <v-col class="text-left padding-60" cols="12" sm="12" md="7">
            <span class="title-span__2">Zašto je voda važna?</span>
            <h2 class="title-heading__2 mb-2">
                Značaj vode
            </h2>
            <hr class="hr-style--1" />

            <p>
                Voda je sastavnica svih živih bića i nezamjenjiv sastojak hrane. Važna je za normalno funkcioniranje ljudskog organizma – sudjeluje u svim biokemijskim reakcijama u organizmu čovjeka i štiti dijelove tijela od udaraca. Čini oko 60 – 70 % tjelesne mase odraslog čovjeka i nešto više kod djece. Stoga je neophodna i važna za život i zdravlje.
            </p>
            <p class="mb-40">
                Voda sudjeluje u razgradnji i apsorpciji hrane i olakšava probavu, oslobađa organizam od štetnih tvari, izvor je tijelu važnih minerala i elektrolita, regulira tjelesnu temperaturu, služi kao štitnik organa i tijela (zglobova, oka i posteljice nerođenog djeteta u trudnoći) te održava kožu zdravom i usporava starenje.
            </p>
            <h3 class="title-heading__3">Koliko je vode potrebno?</h3>
            <hr class="hr-style--1" />
            <p>
                Potrebe za vodom ovise o količini unesene hrane i tjelesnoj masi, dobi i tjelesnoj aktivnosti. Dnevno se u umjerenoj klimi u prosjeku preporučuje piti 0,3dl vode po kilogramu tjelesne mase. Vodu treba piti u malim količinama tijekom cijelog dana jer u trenutku kad osjetimo žeđ već smo lagano dehidrirani. Najbolje je vodu držati nadohvat ruke, čime ćemo potaknuti refleksno pijenje.
            </p>
            <v-btn class="ma-2 bt--2" outlined @click="$vuetify.goTo('#kvalitet-vode')">Kvalitet vode</v-btn>
        </v-col>
        <v-col cols="12" sm="12" md="5" class="my-auto">
            <img src="~/assets/images/img__3.jpg" style="max-width: 100%" class="img--fluid elevation-ac" alt="" />
        </v-col>
    </v-row>

</v-container>
</template>
