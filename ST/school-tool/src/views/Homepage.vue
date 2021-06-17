<template>
  <div id="content" class="home">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000; width: 100%"
      fade
      indicators
    >
      <b-carousel-slide
        class="carrosel"
        img-src="../assets/carrosel1.webp"
        img-alt="Carrosel image 1"
        img-height="100%"
        img-width="100%"
      ></b-carousel-slide>
      <b-carousel-slide
        class="carrosel"
        img-src="../assets/carrosel2.webp"
        img-alt="Carrosel image 2"
        img-height="100%"
        img-width="100%"
      ></b-carousel-slide>
      <b-carousel-slide
        class="carrosel"
        img-src="../assets/carrosel3.webp"
        img-alt="Carrosel image 3"
        img-height="100%"
        img-width="100%"
      ></b-carousel-slide>
    </b-carousel>
    <b-container>
      <br /><br />
      <h1>O que te apetece fazer hoje?</h1>
      <br />
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
           <b-form-select
                  id="input-3"
                  v-model="idLocal"
                  :options="$store.getters.getActivitiesSelect"
                  required
                >
              <b-form-select-option disabled value=""
                >Selecionar um local</b-form-select-option
              >
             
            </b-form-select>
          </b-form-group>

          <b-button class="mb-3 col-sm" variant="secondary" @click="sortByDate"
            >ORDENAR POR DATA</b-button
          >
        </b-row>
        <hr />

        <b-card-group deck v-if="filterActivities.length > 0">
           <ActivityCard
            v-for="(activity, i) in filterActivities"
            :activity="activity"
            :key="i"
          />
         
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
      activities: this.$store.state.activities,
      filterType: "",
      filterLocal: "",
      search: "",
    };
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


    async storeActivities() {
      await this.$store.dispatch("fetchAllActivities");
    },
  },

 

  computed: {
     
    getUser() {
      return this.$store.getters.getLoggedUser.name;
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
            activity.nome.match(this.search)
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
            activity.nome.match(this.search)
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
            activity.nome.match(this.search)
        );
        return filter;
      }

      if (
        this.filterType == "" &&
        this.filterLocal == "" &&
        this.search != ""
      ) {
        filter = this.activities.filter((activity) =>
          activity.nome.match(this.search)
        );
      }

      return filter;
    },
  },
  mounted(){
    this.storeActivities()
  },
};
</script>
<style>
#content.home {
  padding-top: 60px;
  background-color: #dcdcdc;
  min-height: 100vh;
}
.carrosel {
  max-width: 100%;
}
</style>
