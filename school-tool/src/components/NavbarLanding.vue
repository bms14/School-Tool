<template>
  <div id="nav"> 
    <span v-if="!this.$store.getters.isLoggedUser">
      <router-link to="/">Landing Page</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
    </span >
    <span v-else>
      <router-link @click.native="logout" to="/landingpage">Logout</router-link> 
    </span>
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
