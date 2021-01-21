<template>
  <div id="adminListActivities">
    <b-container>
       <b-card>
         <b-row>
      <h1>Atividades</h1>
     </b-row>
        <b-row>
          <div id="listActivities">
            <div v-if="getNumActivities == 0">NÃO EXISTEM ATIVIDADES</div>
            <div v-else class="row justify-content-center">
              <div id="filterActivities">
                <label for="txtFilterName">NOME:</label>
                <input type="text" v-model="filterName" id="txtFilterName" />
              </div>
              <br />
              <br />
              <table class="d-flex justify-content-center table-responsive">
                <td>
                  <tr v-for="activity in filteredActivities" :key="activity.id">
                    <td>
                      <img
                        width="50px"
                        height="50px"
                        :src="activity.image"
                        class="rounded-circle"
                      />
                    </td>
                    <td>{{ activity.name }}</td>
                    <td>{{ activity.type }}</td>
                    <td>
                      <b-button
                        @click="seeActivity(activity.id)"
                        variant="outline-warning"
                      >
                        VER DETALHES
                      </b-button>
                    </td>
                    <td>
                      <b-button
                        @click="removeActivity(activity.id)"
                        variant="outline-warning"
                      >
                        REMOVER
                      </b-button>
                    </td>
                  </tr>
                </td>
              </table>
            </div>
          </div>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AdminListActivities",
  data() {
    return {
      filterName: "",
    };
  },
  methods: {
    seeActivity(id) {
      this.$router.push({ name: "SeeActivityAdmin", params: { id: id } });
    },
    removeActivity(id) {
      if (confirm("Tem a certeza que pretende remover?")) {
        this.$store.dispatch("removeActivity", id);
      }
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
    getNumActivities() {
      return this.$store.getters.getNumActivities;
    },

    filteredActivities() {
      if (!this.filterName) {
        return this.$store.state.activities;
      } else {
        return this.$store.state.activities.filter((activity) =>
          activity.name.includes(this.filterName)
        );
      }
    },
  },
};
</script>

<style>
#adminListActivities {
  background-color: #dcdcdc;
  min-height: 100vh;
}
</style>