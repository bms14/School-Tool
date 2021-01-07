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
          <tr v-for="user in filteredUsers" :key="user.name">
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
              <button @click="editUser(user.name)">EDITAR</button>
              <button @click="promoteUser(user.name)">PROMOVER</button>
              <button @click="blockUser(user.name)">BLOQUEAR</button>
              <button @click="removeUser(user.name)">REMOVER</button>
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
      filterName: ""
    };
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
    }
  }
}
</script>
    
<style>
</style>