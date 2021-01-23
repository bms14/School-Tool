<template>
  <div id="content">
    <div v-if="activity">
      <b-button variant="light" type="button" @click="goBack"
        >Retroceder</b-button
      >
      <b-container id="activity">
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
          <div v-if="subscripted = 'false'">
            <b-button
              @click="newEnrollment(activity.id)"
              variant="outline-warning"
              class="btn"
            >
              Inscrever
            </b-button>
          </div>
          <div v-else>
            <b-button
              @click="removeEnrollment(activity.id)"
              variant="outline-warning"
              class="btn"
            >
              Desinscrever
            </b-button>
          </div>
        </b-card>
      </b-container>
    </div>
    <p v-else>Atividade não se encontra disponível!</p>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      activity: null,
      enrollments: this.$store.state.enrollments,
      subscribed: "false",
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
        this.subscribed = 'true';
      } catch (error) {
        alert(error);
      }
      
    },
    removeEnrollment(payload) {



      console.log("idUser:", this.$store.getters.getLoggedUser.id);
      console.log("idAtivity:", payload);

      /* let enr = this.enrollments.filter(enrollment => enrollment.idUser === this.$store.getters.getLoggedUser.id)
       enr.filter(enrollment => 
           enrollment.idActivity != payload.id) 
         */
          try {
        this.$store.dispatch("cancelEnrollment", {
          idActivity: payload,
          idUser: this.$store.getters.getLoggedUser.id,
          
        });
        /* this.subscribed = 'true'; */
      } catch (error) {
        alert(error);
      }
     /*  this.subscribed = "false";
      this.$store.dispatch("cancelEnrollment", payload); */
    },
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
#activity p,
#activity h5 {
  text-align: left;
}
#activity {
  padding-top: 80px;
}
</style>