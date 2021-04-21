<template>
  <div id="adminListActivities">
    <b-container>
      <h1>Atividades</h1>
        <b-row>
          <div id="listActivities">
            <div v-if="getNumActivities == 0">NÃO EXISTEM ATIVIDADES</div>
            <div v-else class="row justify-content-center">
              <b-input-group class="mb-3 col-sm">
            <b-form-input
              type="text"
              id="txtName"
              placeholder="Pesquise..."
              v-model="filterName"
            >
            </b-form-input>
          </b-input-group>
          <b-form-group class="mb-3 col-sm">
            <b-form-select id="input-3" v-model="filterType">
              <b-form-select-option value="">
                Selecionar um tipo
              </b-form-select-option>
              <b-form-select-option
                :value="type"
                :key="i"
                v-for="(type, i) in getActivityType"
                >{{ type.name }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
          <b-form-group class="mb-3 col-sm">
            <b-form-select id="input-3" v-model="filterLocal">
              <b-form-select-option value=""
                >Selecionar um local</b-form-select-option
              >
              <b-form-select-option
                :value="local"
                :key="i"
                v-for="(local, i) in this.$store.getters.getLocals"
                >{{ local }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-button class="mb-3 col-sm" variant="secondary" @click="sortByDate"
            >ORDENAR POR DATA</b-button
          >
          <hr>
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
                    <td>{{ activity.type.name}}</td>
                    <td>
                      <b-button
                        @click="seeActivity(activity.id)"
                        variant="info"
                      >
                        VER DETALHES
                      </b-button>
                    </td>
                    <td>
                      <b-button  @click="updateActivity(activity.id)" variant="warning">
                        <ion-icon name="create-outline"></ion-icon> EDITAR
              </b-button>
                      
                    </td>
                    <td>
                      <b-button
                        @click="removeActivity(activity.id)"
                        variant="danger"
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
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AdminListActivities",
  data() {
    return {
      activities:[],
      filterName: "",
      filterType: "",
      filterLocal: "",
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
     sortByDate() {
      this.activities = this.activities.sort(this.compareDates);
    },
    compareDates(a, b) {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      if (a.date == b.date) return 0;
    },
    updateActivity(id) {
      this.$router.push({ name: "UpdateActivity", params: { id: id } });
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
     getActivityType() {
      return this.$store.getters.getActivityType;
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