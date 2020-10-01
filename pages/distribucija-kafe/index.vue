<template>
  <div>
    <h1>Voda</h1>
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
      perspiciatis quaerat hic, possimus deleniti quo! Mollitia nobis voluptates
      possimus odit sunt laboriosam alias delectus optio fugit! Voluptatum iste
      odit autem! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Corporis, nulla. Maxime atque debitis cum id distinctio iusto laudantium
      praesentium non quibusdam qui! A sint placeat laudantium ullam asperiores
      totam doloribus. Accusantium dolores dolor, quibusdam molestias impedit
      odit non libero enim? Maxime, commodi. Dicta perspiciatis debitis
      architecto amet accusantium libero quod mollitia doloremque ipsa nam,
      perferendis maiores illum a ullam nostrum. Quas ipsam laborum consequuntur
      iste ea deserunt sapiente minus mollitia ut voluptatum, aliquid quo
      consequatur fugit nemo velit quae reiciendis! Nostrum a optio recusandae
      praesentium suscipit odio nemo ratione alias. Minus tempora quod impedit
      mollitia exercitationem eum cupiditate aliquid veniam. Vel, reprehenderit
      expedita nulla deserunt accusamus, dolorum amet sequi eius dolorem nihil
      facilis alias maxime temporibus. Debitis saepe tempora error. Placeat ab
      praesentium ex velit, est corporis nisi voluptatibus. Esse, enim eligendi!
      Enim quod, distinctio ut, quos tenetur quas illo maxime placeat quisquam
      quaerat quibusdam nihil consequuntur. Odit, repellat. Veniam? Praesentium
      dolorum ex expedita nisi nihil eius recusandae omnis deleniti velit est
      aut harum hic quos, eos tempore consectetur aliquid quasi a. Quo
      doloremque consequatur sapiente facilis. Officiis, voluptatibus eius. Enim
      minima maiores hic totam iure nostrum modi neque numquam, assumenda a
      temporibus voluptates odit aperiam repellendus unde laboriosam labore
      incidunt id voluptatem beatae nulla vero iste aliquid. Cupiditate,
      temporibus. Ratione itaque provident enim quas ullam et voluptas aliquid
      laborum amet non. Pariatur fugiat unde corporis repellat assumenda cumque
      excepturi. Provident voluptates sunt fugit alias laudantium, similique
      optio rem est! Nisi veniam quasi sed voluptatum sequi quisquam deserunt
      exercitationem. Assumenda voluptate fugiat quia nihil maiores quidem
      beatae animi tempore ut ex. Quis quasi doloribus ipsum recusandae rem,
      nisi ullam fugiat. Commodi deleniti animi ipsa asperiores doloremque quis
      dignissimos error beatae, accusamus ad eligendi vero deserunt atque quasi
      architecto quod quas tenetur earum! Ullam eaque voluptatibus similique,
      recusandae provident accusantium repudiandae!
    </h1>
  </div>
</template>
<script>
export default {
  layout: "subPageLayout",
  data() {
    return {
      title: "Distribucija kafe",
      subText:
        "Nam aliquet dolor mauris, tempor dapibus est luctus fringilla. Praesent pellentesque lacus sit amet sapien commodo tempus.",
      backgroundImage: require("~/assets/images/cta__image.jpg"),
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
          content: "Corto d.o.o. - Distribucija kafe",
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
  },
};
</script>
