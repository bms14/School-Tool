<template>
  <!--   <div id="content">
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
  </div> -->

  <div id="Activity">
    <div class="container-xl activityCard">
      <div class="row">
       
        
        <div class="col-lg-4 leftInfo">
         
          <img class="img-fluid imgActivity mt-3" :src="activity.image" />
          <div class="eventDate mt-3">
            <p>Data: {{ activity.date }}</p>
            <p>Participantes: {{ activity.numPeople }}</p>
            <p>Hora: {{ activity.hour }}</p>
          </div>
          <div v-if="subscribed == undefined ">
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
              Cancelar Subscrição
            </b-button>
          </div>
        </div>

        <div class="col-lg-8 rightInfo">
          <div class="text-left cardDetails">
            <b-card title="Nome">
              <div>
                <p>
                  {{ activity.name }}
                </p>
                <h4>Tipo</h4>
                <p>
                  {{ activity.type }}
                </p>
                <h4>Localização</h4>
                <p>
                   {{ activity.local }}
                </p>
                
                <h4>Certificado</h4>
                <p>
                  {{ activity.certificate }}
                </p>
                <h4>Descrição</h4>
                <p>
                  {{ activity.description }}
                </p>
              
              </div>
            </b-card>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Activity",
  data() {
    return {
      activity: null,
      enrollments: this.$store.state.enrollments,
      subscribed: undefined,
    };
  },
  created() {
    let activities = [];
    if (localStorage.getItem("activities")) {
      activities = JSON.parse(localStorage.getItem("activities"));
    }
    this.activity = activities.find((g) => g.id == this.$route.params.id);
    console.log(this.activity);
    this.subscribed = this.$store.state.enrollments.find(enrollment =>{
      if(enrollment.idActivity == this.activity.id){
        if(enrollment.idUser == this.$store.getters.getLoggedUser.id){
          return true
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    })


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
        this.subscribed = "true";
      } catch (error) {
        alert(error);
      }
    },
    removeEnrollment(payload) {
      console.log("idUser:", this.$store.getters.getLoggedUser.id);
      console.log("idAtivity:", payload);

  
      try {
        this.$store.dispatch("cancelEnrollment", {
          idActivity: payload,
          idUser: this.$store.getters.getLoggedUser.id,
        });
        this.subscribed= undefined
      } catch (error) {
        alert(error);
      }
     
    },
  },
  
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
/* #activity {
  padding-top: 80px;
} */
.imgActivity{
  width: 90%;
  border-radius: 5px;
}
.rightInfo {
  margin-top: 20px;

}


.activityCard {
  margin-top: 10rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px #665703;
  padding-bottom: 1rem;
}
</style>