<template>
  <div id="adminListActivities">
    <h1>Atividades</h1>
    <div id="listActivities">
      <div v-if="getNumActivities == 0">NÃO EXISTEM ATIVIDADES</div>
      <div v-else class="row justify-content-center">
        <div id="filterActivities">
          <label for="txtFilterName">NOME:</label>
          <input type="text" v-model="filterName" id="txtFilterName" />
        </div>
        <br />
        <br />
        <table>
          <tr v-for="activity in filteredActivities" :key="activity.id">
            <td>
              <img
                width="80px"
                height="80px"
                :src="activity.photo"
                class="rounded-circle"
              />
            </td>
            <td>{{ activity.name }}</td>
            

            <td>
              <button @click="seeActivity(activity.id)" class="btn btn-danger">
                VER DETALHES
              </button>
              <button @click="removeActivity(activity.id)" class="btn btn-danger">
                REMOVER
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
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
  /* methods: {
    seeActivity(id){

    },
    removeActivity(id){

    }
  }, */
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
</style>