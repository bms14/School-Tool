<template>
  <div id="editActivity" class="center">
    <h2>{{ activity.name }}</h2>
    <img :src="activity.image" /><br> <br>
    <b>Descrição:</b>
    <p>{{ activity.description }}</p>
    <b>Local:</b>
    <p>{{ activity.local }}</p>
    <b>Data:</b>
    <p>{{ activity.date }}</p>
    <b>Hora:</b>
    <p>{{ activity.hour }}</p>
    <b>Tipo:</b>
    <p>{{ activity.type }}</p>
    <b>Certificado:</b>
    <p>{{ activity.certificate }}</p>
    <b>Nº de participantes:</b>
    <p>{{ activity.numPeople }}</p>
    <br />
    <button @click="removeUser(activity.id)" class="btn btn-danger">Remover atividade</button>
    <br />
    <br />
    <a role="button" class="btn btn-outline-dark" @click="goBack">Retroceder</a>
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
