<template>
  <div id="adminListUser">
    <h1>Users</h1>
    <div id="listUsers">
      <div v-if="getNumUsers == 0">NÃO EXISTEM USERS</div>
      <div v-else>
        <div id="filterCastles">
          <label for="txtFilterName">NOME:</label>
          <input type="text" v-model="filterName" id="txtFilterName" />
        </div>
        <table>
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
            <td>{{ user.type }}</td>
            <td>
              <button @click="editUser(user.id)">EDITAR</button>
            </td>
            <td v-if="user.type == 'Estudante'">
              <button @click="promoteUser(user.id)">PROMOVER</button>
            </td>
            <td v-else>
              <button @click="demoteUser(user.id)">DESPROMOVER</button>
            </td>
            <td v-if="user.blocked == false">
              <button @click="blockUser(user.id)">BLOQUEAR</button>
            </td>
            <td v-else>
              <button @click="unblockUser(user.id)">DESBLOQUEAR</button>
            </td>
            <td>
              <button @click="removeUser(user.id)">REMOVER</button>
            </td>
          </tr>
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
      filterName: "",
    };
  },
  methods: {
    editUser() {
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
        return this.$store.state.users.filter(user =>
          user.name.includes(this.filterName)
        );
      }
    },
  },
};
</script>
    
<style>
</style>