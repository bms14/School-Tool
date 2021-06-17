<template>
  
    <div id="seeActivity" >
      <b-container id="seeActivity">
        <b-card class="activityCard">
          <b-button variant="light" class="goBack" type="button" @click="goBack"
            ><i class="fas fa-arrow-left"></i
          ></b-button>
          <h1>{{ activity.nome }}</h1>
          <img :src="activity.imagem" width="300" height="220" alt=""/> <br />
          <h5>Descrição:</h5>
          <p>{{ activity.desc_atividade }}</p>
          <b-row>
           
            <div class="col">
              <h5>Data:</h5>
              <p>{{ activity.data_hora }}</p>
            </div>
          </b-row>
          <b-row>
            <div class="col">
              <h5>Local:</h5>
              <p>{{ activity.idLocal }}</p>
            </div>
            <div class="col">
              <h5>Tipo:</h5>
              <p>{{ activity.idCategoria }}</p>
            </div>
          </b-row>
          <b-row>
            <div class="col">
              <h5>Certificado:</h5>
              <p>{{ activity.certificado_SN }}</p>
            </div>
            <div class="col">
              <h5>Nº de participantes:</h5>
              <p>{{ activity.num_participantes }}</p>
            </div>
          </b-row>
          <button @click="removeActivity(activity.idAtividade)" class="btn btn-danger">
            Remover atividade
          </button>
        </b-card>
      </b-container>
    </div>
    

</template>

<script>
import { ActivityService } from '@/services/activities.service';
export default {
  name: "EditUserAdmin",
  data() {
    return {
      activity: ""
    };
  },
/*   created() {
    let activities = this.getActivities;
    this.activity = activities.find(
      activity => activity.id == this.$route.params.id
    );
  }, */
  methods: {
    goBack() {
      this.$router.push({ name: "AdminListActivity" });
    },
    removeActivity(id) {
      if (confirm("Tem a certeza que pretende remover?")) {
        this.$store.dispatch("removeActivity", id);
     
      }
    },
     async getOneActivity(){
      
      this.activity = await ActivityService.fetchOneActivity(this.$route.params.activityID)
    } 
  },
     mounted(){
    this.getOneActivity()
  },
  computed: {
    getActivities() {
      return this.$store.state.activities;
    }
  }
};
</script>
<style>
#seeActivity {
  position: relative;
  top: -5vh;
}
.goBack {
  position: absolute;
  left: 0rem;
}
</style>
