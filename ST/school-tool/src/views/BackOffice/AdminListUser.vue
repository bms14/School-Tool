<template>
  <div id="adminListUser">
    <b-container class="d-flex justify-content-center">
      <b-row>
        <h1>Utilizadores</h1>
        <b-row>
          <div id="listUsers">
            <div v-if="getNumUsers == 0">NÃO EXISTEM UTILIZADORES</div>
            <div v-else class="row justify-content-md-center">
              <b-input-group class="mb-3 col-sm-4">
                <b-form-input
                  type="text"
                  id="txtName"
                  placeholder="Pesquise o nome..."
                  v-model="filterName"
                >
                </b-form-input>
              </b-input-group>
              <hr />
              <br />
              <br />
              <table class="d-flex justify-content-center table-responsive">
                <tbody>
                  <tr v-for="user in filteredUsers" :key="user.id">
                    <td>
                      <img
                        width="50px"
                        height="50px"
                        :src="user.foto"
                        class="rounded-circle"
                        alt=""
                      />
                    </td>
                    <td>{{ user.nome }}</td>
                    <td class="text-info">{{ user.idTipo }}</td>
                    <td>
                      <b-button @click="editUser(user.idUtilizador)" variant="info">
                        <ion-icon name="create-outline"></ion-icon> EDITAR
                      </b-button>
                    </td>
                    <td v-if="user.idTipo == 1">
                      <b-button @click="promoteUser(user.idUtilizador)" variant="success">
                        <ion-icon name="analytics-outline"></ion-icon> PROMOVER
                      </b-button>
                    </td>
                    <td v-else>
                      <b-button
                        @click="demoteUser(user.idUtilizador)"
                        variant="secondary"
                      >
                        <ion-icon name="analytics-outline"></ion-icon>
                        DESPROMOVER
                      </b-button>
                    </td>
                    <td v-if="user.blocked == 'false'">
                      <b-button @click="blockUser(user.idUtilizador)" variant="warning">
                        <ion-icon name="close-outline"></ion-icon> BLOQUEAR
                      </b-button>
                    </td>
                    <td v-else>
                      <b-button @click="unblockUser(user.idUtilizador)" variant="warning">
                        <ion-icon name="close-circle-outline"></ion-icon>
                        DESBLOQUEAR
                      </b-button>
                    </td>
                    <td>
                      <b-button @click="removeUser(user.idUtilizador)" variant="danger">
                        <ion-icon name="trash-outline"></ion-icon> REMOVER
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </b-row>
      </b-row>
    </b-container>
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
      this.$router.push({ name: "EditUserAdmin", params: { idUtilizador: id } });
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

  async storeUsers() {
      await this.$store.dispatch("fetchAllUsers");
    },

  },

mounted(){
    this.storeUsers()
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
          user.nome.includes(this.filterName)
        );
      }
    }
  }
};
</script>

<style>
#adminListUser {
  background-color: #dcdcdc;
  min-height: 100vh;
}
.btn ion-icon {
  margin-bottom: -1px;
}
</style>
