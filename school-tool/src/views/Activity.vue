<template>
  <div>
    <div v-if="activity">
      <h2>{{ activity.name }}</h2>
      <img :src="activity.image" />
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
      <p>{{ activity.numPeople}}</p>

    </div>
    <p v-else>Atividade não se encontra disponível!</p>
    <a role="button" @click="goBack">Retroceder</a>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      activity: null,
    };
  },
  created() {
    let activities = [];
    if (localStorage.getItem("activities")) {
      activities = JSON.parse(localStorage.getItem("activities"));
    }
    this.activity = activities.find((g) => g.id == this.$route.params.id);
    console.log(this.activity);
  },
  methods:{
      goBack(){
          //retroceder pagina anterior
          //this.$router.go(-1)

          //ir pagina listagem de jogos
          
          this.$router.push({name:"ListActivity"})
      }
  }
};
</script>

<style>
</style>