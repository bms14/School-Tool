<template>
  <div id="nav">
    <!-- <div v-if="getUser.type == 'student'"> navbar estudante 
        <router-link @click.native="logout" to="/">Logout</router-link> |
        <router-link to="/profile">Perfil</router-link>|
        <router-link :to='{name: "ListActivity"}'>Catálogo</router-link>
      </div>
      <div v-else> navbar docente 
        <router-link @click.native="logout" to="/">Logout</router-link> |
        <router-link to="/profile">Perfil</router-link>|
        <router-link to="/addActivity">Adicionar atividade</router-link>|
        <router-link :to='{name: "ListActivity"}'>Catálogo</router-link>
      </div> -->
    <div v-if="getUser.type == 'admin'">
      <router-link @click.native="logout" to="/">Logout</router-link> |
      <router-link to="/homeadmin">Página Inicial</router-link> |
      <router-link to="/adminlistuser">Users</router-link> |
      <router-link to="/adminlistactivity">Atividades</router-link> |
      <router-link to="/adminlistcomments">Forum</router-link>
    </div>
    <div v-else>
      
      <router-link @click.native="logout" to="/"
        ><ion-icon name="log-out-outline"></ion-icon
      ></router-link>
      |
      <router-link to="/homepage"
        ><ion-icon name="home-outline"></ion-icon> Página Principal</router-link
      >
      |
      <router-link to="/profile"
        ><ion-icon name="person-outline"></ion-icon> Perfil</router-link
      >
      |
      <router-link to="/addActivity"
        ><ion-icon name="clipboard-outline"></ion-icon> Adicionar
        atividade</router-link
      >
      |
      <router-link :to="{ name: 'ListActivity' }"
        ><ion-icon name="home-outline"></ion-icon> Catálogo</router-link
      >
      |
      <router-link to="/forum"
        ><ion-icon name="chatbubbles-outline"></ion-icon> Forum</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style></style>
