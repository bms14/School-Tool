<template>
  <div id="adminHome">
    <h1>Admin</h1>
    <h3 id="stats">Estatísticas Totais:</h3>
    <div class="d-flex justify-content-center">
      <div id="card" class="card" style="width: 18rem">
        <br />
        <h3>Users</h3>
        <div class="card-body">
          
          <br /><br />
          <h3 class="card-title">{{ getNumUsers }}</h3>
          <button @click="seeUsers" class="btn btn-primary">Ver Users</button>
        </div>
      </div>
      <div id="card" class="card" style="width: 18rem">
        <br />
        <h3>Comentários</h3>
        <div class="card-body">
          
          <br /><br />
          <h3 class="card-title">{{ getNumComments }}</h3>
          <button @click="seeActivities" class="btn btn-primary">
            Ver Atividades
          </button>
        </div>
      </div>
      <div id="card" class="card" style="width: 18rem">
        <br />
        <h3>Atividades</h3>
        <div class="card-body">
          
          <br /><br />
          <h3 class="card-title">{{ getNumActivities }}</h3>
          <button @click="seeComments" class="btn btn-primary">
            Ver Comentários
          </button>
        </div>
      </div>
    </div>
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
#card {
  top: 20px;
  margin: auto;
  margin-top: 2%;
  border-radius: 30px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
}
#card .btn {
  font-size: 15px;
  background: #fec107;
  color: #fff;
  cursor: pointer;
}
</style>
