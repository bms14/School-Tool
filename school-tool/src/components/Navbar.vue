<template>
  <div id="nav" > 
      <div v-if="getUser.type == 'student'"> <!-- navbar estudante -->
        <router-link @click.native="logout" to="/">Logout</router-link> |
        <router-link to="/profile">Perfil</router-link>|
        <router-link :to='{name: "ListActivity"}'>Catálogo</router-link>
      </div>
      <div v-else> <!-- navbar docente -->
        <router-link @click.native="logout" to="/">Logout</router-link> |
        <router-link to="/profile">Perfil</router-link>|
        <router-link to="/addActivity">Adicionar atividade</router-link>|
        <router-link :to='{name: "ListActivity"}'>Catálogo</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
        getUser(){
            return this.$store.getters.getLoggedUser
        }
    }
};
</script>

<style></style>
