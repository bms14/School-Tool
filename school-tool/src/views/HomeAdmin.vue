<template>
  <div id="adminHome">
    <h1>Admin</h1>
    <h3 id="stats">Estatísticas Totais:</h3>
    <div class="d-flex justify-content-center">
      <div id="card" class="card" style="width: 18rem">
        <h3>Users</h3>
        <div class="card-body">
          <img
            class="card-img-top"
            src="../assets/user.png"
            style="width: 50px"
          />
          <h4 class="card-title">{{ getNumUsers }}</h4>
        </div>
      </div>
      <div id="card" class="card" style="width: 18rem">
        <h3>Comentários</h3>
        <div class="card-body">
          <img
            class="card-img-top"
            src="../assets/comment.png"
            style="width: 50px"
          />
          <h4 class="card-title">{{ getNumComments }}</h4>
        </div>
      </div>
      <div id="card" class="card" style="width: 18rem">
        <h3>Atividades</h3>
        <div class="card-body">
          <img
            class="card-img-top"
            src="../assets/clipboard.png"
            style="width: 50px"
          />
          <h4 class="card-title">{{ getNumActivities }}</h4>
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
</style>
