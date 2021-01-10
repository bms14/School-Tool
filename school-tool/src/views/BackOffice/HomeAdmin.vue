<template>
  <div id="adminHome">
    <h1>Admin</h1>
    <h4 id="stats">Estatísticas atualizadas ao segundo!</h4>
    <div class="card-group d-flex justify-content-center row row-cols-1 row-cols-sm-3 row-cols-md-3 ">
      <div class="col">
      <div id="card" class="card" style="width:85%">
        <br />
        <div class="card-body">
          <ion-icon style="color: #fec107;height: 50px;
  width: 50px;" name="person-outline"></ion-icon>
          <h3>Users</h3>
          <br />
          <h3 class="card-title">{{ getNumUsers }}</h3>
          <button @click="seeUsers" class="btn">Ver detalhes</button>
        </div>
      </div>
      </div>
       <div class="col">
      <div id="card" class="card" style="width:85%" >
        <br />
        <div class="card-body">
          <ion-icon style="color: #fec107;height: 50px;
  width: 50px;" name="clipboard-outline"></ion-icon>
          <h3>Atividades</h3> 
          <br />
          <h3 class="card-title">{{ getNumComments }}</h3>
          <button @click="seeActivities" class="btn">
            Ver detalhes
          </button>
        </div>
      </div>
       </div>
        <div class="col">
      <div id="card" class="card" style="width:85%">
        <br />
        
        <div class="card-body">
          <ion-icon style="color: #fec107;height: 50px;
  width: 50px;" name="chatbubbles-outline"></ion-icon>
          <h3>Comentários</h3>
          <br />
          <h3 class="card-title">{{ getNumActivities }}</h3>
          <button @click="seeComments" class="btn">
            Ver detalhes
          </button>
        </div>
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
#adminHome{
 background-color: #DCDCDC;
  height: 100%;
}
#card {
  top: 20px;
  margin: auto;
  margin-top: 2%;
  border-radius: 30px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
}
#card .btn {
  font-size: 15px;
  border-color: #fec107;
  border-width: 2px;
  cursor: pointer;
}
#card .btn:hover {
  font-size: 15px;
  background-color: #fec107;
  color: #ffff;
  border-width: 2px;
  cursor: pointer;
}
</style>
