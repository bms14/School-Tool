<template>
  <div id="nav">
    <div v-if="getUser.type == 'admin'">
      <b-navbar class="nav" toggleable="lg" loading="eager">
        <b-img src="../assets/logo_sembg.webp" class="img" width="65px" height="45px" alt="Logo"
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
            <b-nav-item>
              <ion-icon
                style="top: 80%;"
                name="person-circle-outline"
              ></ion-icon>
              {{ getUser.name }}</b-nav-item
            >
            <b-nav-item id="bottom-item2" @click="logout()"><i class="fas fa-sign-out-alt"></i></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div v-else-if="getUser.type == 'Estudante'">
      <b-navbar class="nav" toggleable="lg" fixed="top">
        <b-img src="../assets/logo_sembg.webp" class="img" width="65px" height="45px" alt="Logo"
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
            <b-nav-item
              ><router-link :to="{ name: 'ListQuiz' }"
                >Quizzes</router-link
              ></b-nav-item
            >
            <b-nav-item id="bottom-item2"
              ><b-img :src="getUser.photo" class="rounded" height="30px" width="45px" alt="Profile photo"></b-img
                ><router-link :to="{ name: 'Profile' }">
                {{ getUser.name }}</router-link
              ></b-nav-item
            >
            <b-nav-item id="bottom-item2" @click="logout()"
              ><i class="fas fa-sign-out-alt"></i></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div v-else>
      <b-navbar class="nav" toggleable="lg" variant="secondary">
        <b-img src="../assets/logo_sembg.webp" class="img" width="65px" height="45px" alt="Logo"
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
            <b-nav-item
              ><router-link :to="{ name: 'AddQuiz' }"
                >Adicionar Quiz</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link :to="{ name: 'Profile' }">
                <b-img :src="getUser.photo" rounded="circle" height="30px" width="30px" alt="Profile photo"></b-img
                >{{ getUser.name }}</router-link
              ></b-nav-item
            >
            <b-nav-item id="bottom-item2" @click="logout()"
              ><i class="fas fa-sign-out-alt"></i></b-nav-item
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
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    }
  }
};
</script>

<style>
.img {
  width: 20%;
}
body {
  font-family: "Lato", sans-serif;
  background-color: #b8b9b9;
}
#logo {
  background-color: #707071;
  margin-left: -5px;
}
#nav .nav {
  padding: 10px;
  background-image: url("../assets/fundo.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center left;
  transition: top 0.5s;
}
</style>
