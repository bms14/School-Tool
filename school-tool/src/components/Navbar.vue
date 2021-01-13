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
      <router-link to="/adminlistcomments">Comentários</router-link>
    </div>
    <div v-else-if="getUser.type == 'Estudante'">
        <b-navbar toggleable="lg" variant="secondary">
          <b-img src="../assets/logo1.png" fluid
            ><router-link :to="{ name: 'Landing' }"></router-link
          ></b-img>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item
                ><router-link :to="{ name: 'Homepage' }"
                  >Página inicial</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link :to="{ name: 'Profile' }"
                  >Perfil</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link :to="{ name: 'Forum' }"
                  >Fórum</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link :to="{ name: 'Activity' }"
                  >Minhas atividades</router-link
                ></b-nav-item
              >
              <!-- <router-link >Notificações</router-link>
          <a id="bottom-item1" href="#contact">João Silva</a> -->
              <b-nav-item id="bottom-item2" @click="logout()"
                >Logout</b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      
    </div>
    <!-- div v-if="getUser.type == 'admin'">
      <router-link @click.native="logout" to="/">Logout</router-link> |
      <router-link to="/homeadmin">Página Inicial</router-link> |
      <router-link to="/adminlistuser">Users</router-link> |
      <router-link to="/adminlistactivity">Atividades</router-link> |
      <router-link to="/adminlistcomments">Comentários</router-link>
    </div>
    <div v-else-if="getUser.type == 'Estudante'">
      <div class="container">
        <div class="sidenav">
          <router-link :to="{ name: 'Landing' }">
            <img
              class="img-fluid"
              id="logo"
              src="../assets/logo1.png"
              alt="SchoolTool"
            />
          </router-link>
          <router-link :to= "{ name : 'Homepage'}">Página inicial</router-link>
          <router-link :to= "{ name : 'Profile'}">Perfil</router-link>
          <router-link :to= "{ name : 'Forum'}">Fórum</router-link>
          <router-link :to= "{ name : 'Activity'}">Minhas atividades</router-link>
          <router-link >Notificações</router-link>
          <a id="bottom-item1" href="#contact">João Silva</a>
          <a id="bottom-item2" @click="logout()">Logout</a>
        </div>
      </div>
    </div> -->
    <div v-else>
      <div class="container">
        <div class="sidenav">
          <router-link :to="{ name: 'Landing' }">
            <img
              class="img-fluid"
              id="logo"
              src="../assets/logo1.png"
              alt="SchoolTool"
            />
          </router-link>
          <router-link :to="{ name: 'Homepage' }"
            ><ion-icon name="home-outline"></ion-icon>Página
            inicial</router-link
          >
          <router-link :to="{ name: 'Profile' }"
            ><ion-icon name="person-circle-outline"></ion-icon
            >Perfil</router-link
          >
          <router-link :to="{ name: 'Forum' }"
            ><ion-icon name="chatbubble-ellipses-outline"></ion-icon
            >Fórum</router-link
          >
          <router-link :to="{ name: 'ListActivity' }"
            ><ion-icon name="book-outline"></ion-icon>Minhas
            atividades</router-link
          >
          <router-link>Notificações</router-link>
          <a id="bottom-item1" @click="getUser()">João Silva</a>
          <a id="bottom-item2" @click="logout()"
            ><ion-icon name="exit-outline"></ion-icon>Logout</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Landing" });
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}
#logo {
  background-color: #707071;
  margin-left: -5px;
}
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #b8b9b9;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  color: white;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
#bottom-item1 {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  color: white;
  position: fixed;
  bottom: 30px;
  cursor: pointer;
}
/* #bottom-item2 {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  color: white;
  position: fixed;
  bottom: 10px;
  cursor: pointer;
} */
.main {
  margin-left: 100px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
