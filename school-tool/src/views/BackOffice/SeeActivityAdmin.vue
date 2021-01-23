<template>
  <div id="content">
    <div id="seeActivity" v-if="activity">
      <b-container id="seeActivity">
        <b-card class="activityCard">
          <b-button variant="light" class="goBack" type="button" @click="goBack"
            ><i class="fas fa-arrow-left"></i
          ></b-button>
          <h1>{{ activity.name }}</h1>
          <img :src="activity.image" width="300" height="220" /> <br />
          <h5>Descrição:</h5>
          <p>{{ activity.description }}</p>
          <b-row>
            <div class="col">
              <h5>Hora:</h5>
              <p>{{ activity.hour }}</p>
            </div>
            <div class="col">
              <h5>Data:</h5>
              <p>{{ activity.date }}</p>
            </div>
          </b-row>
          <b-row>
            <div class="col">
              <h5>Local:</h5>
              <p>{{ activity.local }}</p>
            </div>
            <div class="col">
              <h5>Tipo:</h5>
              <p>{{ activity.type }}</p>
            </div>
          </b-row>
          <b-row>
            <div class="col">
              <h5>Certificado:</h5>
              <p>{{ activity.certificate }}</p>
            </div>
            <div class="col">
              <h5>Nº de participantes:</h5>
              <p>{{ activity.numPeople }}</p>
            </div>
          </b-row>
          <button @click="removeUser(activity.id)" class="btn btn-danger">
            Remover atividade
          </button>
        </b-card>
      </b-container>
    </div>
    <p v-else>Atividade não se encontra disponível!</p>
  </div>
</template>

<script>
export default {
  name: "EditUserAdmin",
  data() {
    return {
      activity: null,
    };
  },
  created() {
    let activities = this.getActivities;
    this.activity = activities.find(
      (activity) => activity.id == this.$route.params.id
    );
  },
  methods: {
    goBack() {
      this.$router.push({ name: "AdminListActivity" });
    },
  },
  computed: {
    getActivities() {
      return this.$store.state.activities;
    },
  },
};
</script>
<style >
#seeActivity {
  padding-top: 20px;
}
.goBack {
  position: absolute;
  left: 0rem;
}
</style>
