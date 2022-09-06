<template>
  <Navbar if="showNavbar"/>
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";

export default {
  components: {
    Navbar
  },
  computed: {
    showNavbar() {
      debugger
      console.log(this.$route)
      const { showNavbar } = this.$route.meta;

      return showNavbar || typeof showNavbar === 'undefined';
    }
  }
}
</script>
<style scoped></style>
