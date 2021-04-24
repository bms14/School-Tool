<template>
  <div id="content">
    <div>
      <b-img
        id="header"
        class="headerImg"
        src="../assets/activities_bg.webp"
      ></b-img>
      <h2 class="title">ATIVIDADES</h2>
    </div>

    <b-container id="historic" class="activities">
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
      <b-card-group deck v-if="filterActivities.length > 0" >
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
    ActivityCard
  },
  data() {
    return {
      activities: this.$store.state.activities,
      subActivities: [],
      filterType: "",
      filterLocal: "",
      search: "",
      enrollments: this.$store.getters.getEnrollments
    };
  },
  created() {
    let enr = this.enrollments.filter(
      enrollment => enrollment.idUser === this.$store.getters.getLoggedUser.id
    );
    this.activities.filter(activity => {
      enr.forEach(enrollment => {
        if (enrollment.idActivity == activity.id) {
          this.subActivities.push(activity);
        }
      });
    });
  },
  methods: {
    sortByDate() {
      this.subActivities = this.subActivities.sort(this.compareDates);
    },
    compareDates(a, b) {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      if (a.date == b.date) return 0;
    }
  },
  computed: {
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
        filter = this.subActivities.filter(
          activity => activity.type === this.filterType.name
        );
        return filter;
      }

      if (
        this.filterType != "" &&
        this.filterLocal != "" &&
        this.search == ""
      ) {
        filter = this.subActivities.filter(
          activity =>
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
        filter = this.subActivities.filter(
          activity =>
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
        filter = this.subActivities.filter(
          activity =>
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
        filter = this.subActivities.filter(
          activity => activity.local === this.filterLocal
        );
        return filter;
      }

      if (
        this.filterType == "" &&
        this.filterLocal == "" &&
        this.search == ""
      ) {
        filter = this.subActivities;
        return filter;
      }

      if (
        this.filterType == "" &&
        this.filterLocal != "" &&
        this.search != ""
      ) {
        filter = this.subActivities.filter(
          activity =>
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
        filter = this.subActivities.filter(activity =>
          activity.name.match(this.search)
        );
      }
      return filter;
    }
  }
};
</script>

<style>
#content{
  padding-top: 60px;
}
#historic {
  padding-top: 80px;
  min-height: 100vh;
}
.title {
  position: relative;
  top: -7rem;
}
.activities {
  position: relative;
  top: -5rem;
}


.headerImg {
  max-width: 100%;

  padding: 0;
  margin: 0;
}
#header{
  top: -10rem;
}
</style>
