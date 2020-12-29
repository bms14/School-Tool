<template>
  <div id="nav"> 
      <router-link @click.native="logout" to="/">Logout</router-link> 
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style></style>
