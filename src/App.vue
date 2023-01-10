<template>
  <main-nav />
  <!-- The hero hard coded here temporary-->
  <the-hero />
</template>
<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import TheHero from "@/components/JobSearch/TheHero.vue";

export default {
  name: "App",
  components: {
    MainNav: MainNav,
    TheHero: TheHero,
  },
};
</script>
