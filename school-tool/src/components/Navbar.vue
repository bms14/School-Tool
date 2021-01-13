<template>
  <div id="nav">
    <div v-if="getUser.type == 'admin'">
      <b-navbar toggleable="lg" variant="secondary">
          <b-img src="../assets/logo1.png" fluid
            ><router-link :to="{ name: 'Landing' }"></router-link
          ></b-img>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item
                ><router-link to="/homeadmin"
                  >Página inicial</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link to="/adminlistuser"
                  >Utilizadores</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link to="/adminlistactivity"
                  >Atividades</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link to="/adminlistcomments"
                  >Comentários</router-link
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
                ><router-link :to="{ name: 'ListActivity' }"
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
    <div v-else>
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
                ><router-link :to="{ name: 'AddActivity' }"
                  >Adicionar atividade</router-link
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
  background-color: #b8b9b9;
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
