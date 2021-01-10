<template>
  <div id="homepage" class="container">
    <!-- <h1>Authenticaded area</h1>
      <h2>Hello {{getUser}}</h2> -->

 <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000; width:100%"
    fade
    indicators
  >
    <b-carousel-slide
      
      img-src="https://picsum.photos/1600/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
     
      img-src="https://picsum.photos/1600/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
     
      img-src="https://picsum.photos/1600/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>


    <h1>O que te apetece fazer hoje?</h1>
    <br />

    <div>
      <input type="text" placeholder="Pesquise..." v-model="search" />
      <label>Tipo: </label>
      <select v-model="filterType">
        <option value="">Todas</option>
        <option
          :value="type"
          :key="i"
          v-for="(type, i) in this.$store.getters.getActivityType"
        >
          {{ type }}
        </option>
      </select>

      <label>Local: </label>
      <select v-model="filterLocal">
        <option value="">Todas</option>
        <option
          :value="local"
          :key="i"
          v-for="(local, i) in this.$store.getters.getLocals"
        >
          {{ local }}
        </option>
      </select>

      <button @click="sortByDate">ORDENAR POR DATA</button>
      <!-- <label for="txtDate">Data:</label>
      <input type="date" id="txtDate" class="input" /> -->
      <hr />
      <div class="card-columns" v-if="filterActivities.length > 0">
        
        <ActivityCard
          v-for="(activity, i) in filterActivities"
          :activity="activity"
          :key="i"
        ></ActivityCard>
      </div>
      <div v-else>
        <p>NÃO HÁ ATIVIDADES!</p>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityCard from "../components/ActivityCard";
export default {
  name: "Homepage",
  components: {
    ActivityCard,
  },
  data() {
    return {
      activities: [],
      filterType: "",
      filterLocal: "",
      search: "",
      
    };
  },

  created() {
    if (localStorage.getItem("activities")) {
      this.activities = JSON.parse(localStorage.getItem("activities"));
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
    getUser() {
      return this.$store.getters.getLoggedUser.name;
    },

    filterActivities() {
      let filter;

      if (
        this.filterType != "" &&
        this.filterLocal == "" &&
        this.search == ""
      ) {
        filter = this.activities.filter(
          (activity) => activity.type === this.filterType
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
            activity.type === this.filterType
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
            activity.type === this.filterType &&
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
            activity.type === this.filterType &&
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
</style>