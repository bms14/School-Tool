<template>
  <div id="adminHome">
    <b-container>
      <h1>Admin</h1>
      <h2 id="stats">Estatísticas atualizadas ao segundo!</h2>
      <b-card-group deck>
        <b-card border-variant="warning" align="center" title="Utilizadores"
          ><ion-icon
            style="color: #fec107; height: 50px; width: 50px"
            name="person-outline"
          ></ion-icon>
          <b-card-text>{{ getNumUsers }}</b-card-text>
          <b-button variant="warning" @click="seeUsers">Ver detalhes</b-button>
        </b-card>
        <b-card border-variant="warning" align="center" title="Atividades"
          ><ion-icon
            style="color: #fec107; height: 50px; width: 50px"
            name="clipboard-outline"
          ></ion-icon>
          <b-card-text>{{ getNumActivities }}</b-card-text>
          <b-button variant="warning" @click="seeActivities"
            >Ver detalhes</b-button
          >
        </b-card>
        <b-card border-variant="warning" align="center" title="Quizzes"
          ><ion-icon
            style="color: #fec107; height: 50px; width: 50px"
            name="chatbubbles-outline"
          ></ion-icon>
          <b-card-text>{{ getNumQuizzes }}</b-card-text>
          <b-button variant="warning" @click="seeQuizzes"
            >Ver detalhes</b-button
          >
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomeAdmin",
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
    getNumUsers() {
      return this.$store.getters.getNumUsers;
    },
    getNumActivities() {
      return this.$store.getters.getNumActivities;
    },
    getNumQuizzes() {
      return this.$store.getters.getNumQuizzes;
    }
  },
  methods: {
    seeUsers() {
      this.$router.push({ name: "AdminListUser" });
    },
    seeActivities() {
      this.$router.push({ name: "AdminListActivity" });
    },
    seeQuizzes() {
      this.$router.push({ name: "AdminListQuizzes" });
    }
  }
};
</script>

<style>
#adminHome {
  background-color: #dcdcdc;
  min-height: 100vh;
}
</style>
