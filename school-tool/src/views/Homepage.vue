<template>
  <div id="content">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000; width: 100%"
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
    <b-container>
      <br><br>
      <h1>O que te apetece fazer hoje?</h1>
      <br>
      <div>
        <b-row>
          <b-input-group class="mb-3 col-sm">
            <b-form-input
              type="text"
              id="txtName"
              placeholder="Pesquise..."
              v-model="search"
            >
            </b-form-input>
          </b-input-group>
          <b-form-group class="mb-3 col-sm" >
            <b-form-select id="input-3" v-model="filterType">
              <b-form-select-option value="">
                Escolha um tipo
              </b-form-select-option>
              <b-form-select-option
                :value="type"
                :key="i"
                v-for="(type, i) in this.$store.getters.getActivityType"
                >{{ type }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
          <b-form-group class="mb-3 col-sm">
            <b-form-select id="input-3" v-model="filterLocal">
              <b-form-select-option value=""> Todas </b-form-select-option>
              <b-form-select-option
                :value="local"
                :key="i"
                v-for="(local, i) in this.$store.getters.getLocals"
                >{{ local }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-button class="mb-3 col-sm" variant="outline-warning" @click="sortByDate"
            >ORDENAR POR DATA</b-button
          >
        </b-row>
        <hr />
        
        <b-card-group deck v-if="filterActivities.length > 0">
          <ActivityCard
            v-for="(activity, i) in filterActivities"
            :activity="activity"
            :key="i"
          ></ActivityCard>
        </b-card-group>
        <div v-else>
          <p>NÃO HÁ ATIVIDADES!</p>
        </div>
      </div>
    </b-container>
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
    /* let helper = []
    if (localStorage.getItem("activities")) {
      helper = JSON.parse(localStorage.getItem("activities"));
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
#content {
  background-color: #dcdcdc;
  height: 100%;
}</style>