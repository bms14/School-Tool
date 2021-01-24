<template>
  <div id="app">
    <div v-if="!this.$store.getters.isLoggedUser" class="navLanding">
      <!-- <NavbarLanding /> -->
    </div>
    <div v-else>
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
/* import NavbarLanding from "@/components/NavbarLanding.vue"; */
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    /* NavbarLanding, */
    Navbar,
  },
  data: function () {
    return {
      activities: [],
    };
  },
  created() {
    this.setStorage();
  },
  methods: {
    setStorage() {
      if (JSON.parse(localStorage.getItem("activities"))) {
        this.$store.commit("SET_ACTIVITIES", {
          activities: JSON.parse(localStorage.getItem("activities")),
        });
      } else {
        this.$store.commit("SET_ACTIVITIES", {
          activities: [
            {
              id: 1,
              name: "Ergonomia cognitiva",
              type: this.$store.getters.getActivityTypeById(2).name,
              points: this.$store.getters.getActivityTypeById(2).points,
              local: "ESMAD",
              date: "2021-01-24",
              hour: "16:27",
              numPeople: 15,
              certificate: "Sim",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              image: "https://www2.ifsc.usp.br/portal-ifsc/site-antigo/images/stories/imagens/Seminario-_logo_geral.jpg",
              concluded: false,
              full: false,
            },
            {
              id: 2,
              name: "Tudo sobre JavaScript",
              type: this.$store.getters.getActivityTypeById(4).name,
              points:this.$store.getters.getActivityTypeById(4).points,
              local: "ESMAD",
              date: "2021-01-30",
              hour: "16:27",
              numPeople: 30,
              certificate: "Não",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              image: "https://www2.ifsc.usp.br/portal-ifsc/site-antigo/images/stories/imagens/Seminario-_logo_geral.jpg",
              concluded: false,
              full: false,
            },
            {
              id: 3,
              name: "EsmadPlus",
              type: this.$store.getters.getActivityTypeById(1).name,
              points: this.$store.getters.getActivityTypeById(1).points,
              local: "Online",
              date: "2021-03-28",
              hour: "16:27",
              numPeople: 40,
              certificate: "Não",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              image: "https://www2.ifsc.usp.br/portal-ifsc/site-antigo/images/stories/imagens/Seminario-_logo_geral.jpg",
              concluded: false,
              full: false,
            },
          ],
        });
      }
    },
  },
  computed:{
    getActivityType() {
      return this.$store.getters.getActivityType;
    },
  }
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
#content {
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
