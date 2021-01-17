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
        <table class="d-flex justify-content-center table-responsive">
          <td class="table-bordered">
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
              <button @click="seeActivity(activity.id)" class="btn">
                 VER DETALHES 
              </button>
            </td>
            <td>
              <button @click="removeActivity(activity.id)" class="btn">
                 REMOVER 
              </button>
            </td>
          </tr>
          </td>
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
      filterName: ""
    };
  },
  methods: {
    seeActivity(id){
      this.$router.push({ name: "SeeActivityAdmin", params: { id: id } });
    },
    removeActivity(id){
      if (confirm("Tem a certeza que pretende remover?")) {
        this.$store.dispatch("removeActivity", id);
      }
    }
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
</style>