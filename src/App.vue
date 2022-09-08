<template>
  <Navbar v-if="!$route.meta.public" />
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style scoped></style>
