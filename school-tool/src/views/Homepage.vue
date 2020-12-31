<template>
  <div id="homepage">
    <!-- <h1>Authenticaded area</h1>
      <h2>Hello {{getUser}}</h2> -->
    <h1>O que te apetece fazer hoje?</h1>
    <br />

    <div>
      <input type="text" placeholder="Pesquise..." />
      <label>Tipo: </label>
      <select>
        <option disabled="">Todas</option>
        <option :value="type" :key="i" v-for="(type, i) in types">
          {{ type }}
        </option>
      </select>

      <label>Local: </label>
      <select>
        <option disabled="">Todas</option>
        <option :value="locals" :key="i" v-for="(local, i) in locals">
          {{ local }}
        </option>
      </select>

      <label for="txtDate">Data:</label>
      <input type="date" id="txtDate" class="input" />
      <hr />

      <div class="card-columns" v-if="activities.length > 0">
        <ActivityCard
          v-for="(activity, i) in activities"
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
      types: ["Conferências", "Workshop", "Concursos", "Seminários"],
      locals: ["ESMAD", "Online"],
    };
  },
  
 created() {
    if (localStorage.getItem("activities")) {
      this.activities = JSON.parse(localStorage.getItem("activities"));
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser.name;
    },
  },
};
</script>