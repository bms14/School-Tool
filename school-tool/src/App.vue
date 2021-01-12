<template>
  <div id="app" class="view">
    <div v-if="!this.$store.getters.isLoggedUser" class="navLanding" >
      <NavbarLanding  /> 
    </div>
    <div v-else>
      <Navbar/>
    </div>
    <router-view />
  </div>
</template>

<script>

import NavbarLanding from "@/components/NavbarLanding.vue"
import Navbar from "@/components/Navbar.vue"


export default {
  name: 'App',
  components: {
     NavbarLanding,
     Navbar
  },
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  background-color: #DCDCDC;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.view {
    background-image: url('./assets/bg.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(100vh - 60px);
  }
#bg{
width: 100%;
}
.navLanding{
  width: 100%;
  
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
