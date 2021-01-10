<template>
  <div id="adminListUser">
    <h1>Users</h1>
    <div id="listUsers">
      <div v-if="getNumUsers == 0">NÃO EXISTEM USERS</div>
      <div v-else class="justify-content-center row ">
        <div id="filterUsers">
          <label for="txtFilterName">NOME:</label>
          <input type="text" v-model="filterName" id="txtFilterName" />
        </div>
        <br />
        <br />
        <table class="d-flex justify-content-center table-responsive">
          <tbody class="table-bordered">
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>
              <img
                width="50px"
                height="50px"
                :src="user.photo"
                class="rounded-circle"
              />
            </td>
            <td>{{ user.name }}</td>
            <td class="text-info">{{ user.type }}</td>
            <td>
              <button @click="editUser(user.id)" class="btn"><ion-icon name="create-outline"></ion-icon> EDITAR</button>
            </td>
            <td v-if="user.type == 'Estudante'">
              <button @click="promoteUser(user.id)" class="btn"><ion-icon name="analytics-outline"></ion-icon> PROMOVER</button>
            </td>
            <td v-else>
              <button @click="demoteUser(user.id)" class="btn">DESPROMOVER</button>
            </td>
            <td v-if="user.blocked == false">
              <button @click="blockUser(user.id)" class="btn"><ion-icon name="close-outline"></ion-icon> BLOQUEAR</button>
            </td>
            <td v-else>
              <button @click="unblockUser(user.id)" class="btn"><ion-icon name="close-circle-outline"></ion-icon> DESBLOQUEAR</button>
            </td>
            <td>
              <button @click="removeUser(user.id)" class="btn"><ion-icon name="trash-outline"></ion-icon> REMOVER</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminListUser",
  data() {
    return {
      filterName: ""
    };
  },
  methods: {
    editUser(id) {
      this.$router.push({ name: "EditUserAdmin", params: { id: id } });
    },
    promoteUser(id) {
      if (confirm("Tem a certeza que pretende promover?")) {
        this.$store.dispatch("promoteUser", id);
      }
    },
    demoteUser(id) {
      if (confirm("Tem a certeza que pretende despromover?")) {
        this.$store.dispatch("demoteUser", id);
      }
    },
    blockUser(id) {
      if (confirm("Tem a certeza que pretende bloquear?")) {
        this.$store.dispatch("blockUser", id);
      }
    },
    unblockUser(id) {
      if (confirm("Tem a certeza que pretende desbloquear?")) {
        this.$store.dispatch("unblockUser", id);
      }
    },
    removeUser(id) {
      if (confirm("Tem a certeza que pretende remover?")) {
        this.$store.dispatch("removeUser", id);
      }
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
    getNumUsers() {
      return this.$store.getters.getNumUsers;
    },
    filteredUsers() {
      if (!this.filterName) {
        return this.$store.state.users;
      } else {
        return this.$store.state.users.filter((user) =>
          user.name.includes(this.filterName)
        );
      }
    },
  },
};
</script>
    
<style>
#adminListUser{
 background-color: #DCDCDC;
  height: 100%;
}
td .btn {
  font-size: 15px;
  border-color: #fec107;
  border-width: 2px;
  cursor: pointer;
}
td .btn:hover {
  font-size: 15px;
  background-color: #fec107;
  color: #ffff;
  border-width: 2px;
  cursor: pointer;
}
.btn ion-icon{
  margin-bottom:-1px;
}
</style>