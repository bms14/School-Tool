<template>
  <div id="content">
    <div v-if="activity">
      <h2>{{ activity.name }}</h2>
      <img :src="activity.image" width="350" height="270" /> <br />
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
      <div v-if="subscribed == 'false' ">
        <button @click="newEnrollment(activity.id)" class="btn btn-primary">
          Inscrever
        </button>
      </div>
      <div v-else>
        <button @click="removeEnrollment(activity.id)" class="btn btn-primary">
          Desinscrever
        </button>
      </div>
    </div>
    <p v-else>Atividade não se encontra disponível!</p>
    <br />
    <a role="button" @click="goBack">Retroceder</a>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      activity: null,
      enrollments: this.$store.state.enrollments,
      subscribed:null
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
  methods: {
    goBack() {
      //retroceder pagina anterior
      //this.$router.go(-1)

      //ir pagina listagem de jogos

      this.$router.push({ name: "ListActivity" });
    },

    newEnrollment(id) {
      try {
        this.$store.dispatch("submitEnrollment", {
          idActivity: id,
          idUser: this.$store.getters.getLoggedUser.id,
        });
      } catch (error) {
        alert(error);
      }
      this.subscribed = "true";
    },
    removeEnrollment(payload) {
      /* let enr = this.enrollments.filter(enrollment => enrollment.idUser === this.$store.getters.getLoggedUser.id)
       enr.filter(enrollment => 
           enrollment.idActivity != payload.id) 
        
            this.subscribed = "false"; */
             this.$store.dispatch("cancelEnrollment",payload)
    }
          
  
    },
    /*  checkSubscription(payload){
       const enrollment = this.enrollments.find(enrollment => enrollment.idUser === payload.idUser && enrollment.idActivity === payload.idActivity)
      if(enrollment == undefined){
        return this.subscribed="false"
      }
      else{
        return this.subscribed= "true"
      }  */
     /*  let enr = this.enrollments.filter(enrollment => enrollment.idUser === this.$store.getters.getLoggedUser.id)
      this.activities.filter(activity => {
        
        enr.forEach(enrollment => {
          if (enrollment.idActivity == activity.id) {
            this.subscribed="true"
          }
          else{
            this.subscribed="false"
          }
        });
      });
      return this.subscribed; */
      
      
   
 
 /*  }, */
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
   
  },
};
</script>

<style>
</style>