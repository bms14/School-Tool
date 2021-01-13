<template>
  <div id="adminHome">
    <h1>Admin</h1>
    <h4 id="stats">Estatísticas atualizadas ao segundo!</h4>
    <b-card-group deck>
      <b-card border-variant="warning" align="center" title="Utilizadores"
        ><ion-icon
          style="color: #fec107; height: 50px; width: 50px"
          name="person-outline"
        ></ion-icon>
        <b-card-text>{{ getNumUsers }}</b-card-text>
        <b-button variant="outline-warning" @click="seeUsers">Ver detalhes</b-button>
      </b-card>
      <b-card border-variant="warning" align="center" title="Atividades"
        ><ion-icon
          style="color: #fec107; height: 50px; width: 50px"
          name="clipboard-outline"
        ></ion-icon>
        <b-card-text>{{ getNumActivities }}</b-card-text>
        <b-button variant="outline-warning" @click="seeActivities">Ver detalhes</b-button>
      </b-card>
      <b-card border-variant="warning" align="center" title="Comentários"
        ><ion-icon
            style="color: #fec107; height: 50px; width: 50px"
            name="chatbubbles-outline"
          ></ion-icon>
        <b-card-text>{{ getNumComments }}</b-card-text>
        <b-button variant="outline-warning" @click="seeComments">Ver detalhes</b-button>
      </b-card>
    </b-card-group>
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
    getNumComments() {
      return this.$store.getters.getNumComments;
    },
  },
  methods: {
    seeUsers() {
      this.$router.push({ name: "AdminListUser" });
    },
    seeActivities() {
      this.$router.push({ name: "AdminListActivity" });
    },
    seeComments() {
      this.$router.push({ name: "AdminListComments" });
    },
  },
};
</script>

<style>
#adminHome {
  background-color: #dcdcdc;
  height: 100%;
}
</style>
