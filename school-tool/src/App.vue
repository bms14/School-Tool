<template>
  <div id="app">
    <div v-if="!this.$store.getters.isLoggedUser" class="navLanding">
      <NavbarLanding />
    </div>
    <div v-else >
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavbarLanding from "@/components/NavbarLanding.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    NavbarLanding,
    Navbar,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-image: url("./assets/fundo.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center left;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#content{
  background-color: #e9e8e8;
  height: 100%;
}
.navLanding {
  width: 100%;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
