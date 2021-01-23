<template>
<div id="content">
  <b-container id="historic">
     <h1>As minhas atividades</h1>
    <b-row class="mt-5">
          <b-input-group class="mb-3 col-sm">
            <b-form-input
              type="text"
              id="txtName"
              placeholder="Pesquise..."
              v-model="search"
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
        </b-row>
        <hr>
    <b-card-group deck v-if="filterActivities.length > 0">
    <ActivityCard
      v-for="(activity, i) in filterActivities"
      :activity="activity"
      :key="i"
    ></ActivityCard>
  </b-card-group>
  <div v-else>
    <p>NÃO ESTÁ INSCRITO EM ATIVIDADES!</p>
  </div>
  </b-container>
  </div>
</template>

<script>
import ActivityCard from "../components/ActivityCard";

export default {
  name: "ListActivity",
  components: {
    ActivityCard,
  },
  data() {
    return {
      activities: [],
      filterType: "",
      filterLocal: "",
      search: "",
      enrollments: this.$store.state.enrollments,
    };
  },
  created() {
    /* if (localStorage.getItem("activities")) {
      this.activities = JSON.parse(localStorage.getItem("activities"));
    } */
    let helper = this.$store.state.activities;
    for (let i = 0; i < helper.length; i++) {
      if (helper[i].full == false) {
        this.activities.push(helper[i]);
      }
    }
  },
  methods: {
    sortByDate() {
      this.activities = this.activities.sort(this.compareDates);
    },
    compareDates(a, b) {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      if (a.date == b.date) return 0;
    },
  },
  computed: {
    subActivity() {
      let arr = [];
      let enr = this.enrollments.filter(enrollment => enrollment.idUser === this.$store.getters.getLoggedUser.id)
      this.activities.filter(activity => {
        
        enr.forEach(enrollment => {
          if (enrollment.idActivity == activity.id) {
            arr.push(activity)
          }
        });
      });
      return arr;
      
      
    },
     getActivityType() {
      return this.$store.getters.getActivityType;
    },
    filterActivities() {
      let filter;

      if (
        this.filterType != "" &&
        this.filterLocal == "" &&
        this.search == ""
      ) {
        filter = this.activities.filter(
          (activity) => activity.type === this.filterType.name
        );
        return filter;
      }

      if (
        this.filterType != "" &&
        this.filterLocal != "" &&
        this.search == ""
      ) {
        filter = this.activities.filter(
          (activity) =>
            activity.local === this.filterLocal &&
            activity.type === this.filterType.name
        );
        return filter;
      }

      if (
        this.filterType != "" &&
        this.filterLocal == "" &&
        this.search != ""
      ) {
        filter = this.activities.filter(
          (activity) =>
            activity.type === this.filterType.name &&
            activity.name.match(this.search)
        );
        return filter;
      }

      if (
        this.filterType != "" &&
        this.filterLocal != "" &&
        this.search != ""
      ) {
        filter = this.activities.filter(
          (activity) =>
            activity.local === this.filterLocal &&
            activity.type === this.filterType.name &&
            activity.name.match(this.search)
        );
        return filter;
      }

      if (
        this.filterType == "" &&
        this.filterLocal != "" &&
        this.search == ""
      ) {
        filter = this.activities.filter(
          (activity) => activity.local === this.filterLocal
        );
        return filter;
      }

      if (
        this.filterType == "" &&
        this.filterLocal == "" &&
        this.search == ""
      ) {
        filter = this.activities;
        return filter;
      }

      if (
        this.filterType == "" &&
        this.filterLocal != "" &&
        this.search != ""
      ) {
        filter = this.activities.filter(
          (activity) =>
            activity.local === this.filterLocal &&
            activity.name.match(this.search)
        );
        return filter;
      }

      if (
        this.filterType == "" &&
        this.filterLocal == "" &&
        this.search != ""
      ) {
        filter = this.activities.filter((activity) =>
          activity.name.match(this.search)
        );
      }
      return filter;
    },
  },
};
</script>

<style>
#historic{
  padding-top: 80px;
  height: 100%;
}

</style>