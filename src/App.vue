<template>
  <div id="app">
    <NavBar v-on:searched="searchedHandler"></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  },
  methods: {
    searchedHandler(input) {
      this.$router.push(`/items?focus=${input}`);
    }
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
