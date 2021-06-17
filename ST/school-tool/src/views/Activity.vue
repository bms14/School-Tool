<template>
  <div id="Activity">
    <div class="container-xl activityCard">
      <div class="row">
        <div class="col-lg-4">
          <img class="img-fluid imgActivity mt-3" :src="activity.imagem" alt=""/>
          <div class="eventDate mt-3">
            <p>Data: {{ activity.data_hora }}</p>
            <p>Participantes: {{ activity.num_participantes }}</p>
            
          </div>
          <div v-if="getUser.idTipo == 1">
            <div v-if="subscribed == undefined">
              <b-button
                @click="newEnrollment(activity.idAtividade)"
                variant="outline-warning"
                class="btn"
              >
                Inscrever
              </b-button>
            </div>
            <div v-else>
              <b-button
                @click="removeEnrollment(activity.idAtividade)"
                variant="outline-warning"
                class="btn"
              >
                Cancelar Subscrição
              </b-button>
            </div>
          </div>
          <div v-else>
            <b-button
              class="mb-3"
              @click="removeActivity(activity.idAtividade)"
              variant="danger"
            >
              REMOVER
            </b-button>

            <b-button
              class="mb-3"
              @click="updateActivity(activity.idAtividade)"
              variant="info"
            >
              <ion-icon name="create-outline"></ion-icon> EDITAR
            </b-button>
            <div v-if="activity.concluida == false">
              <b-button
                class="mb-3"
                @click="concludeActivity(activity.idAtividade)"
                variant="success"
              >
                <ion-icon name="create-outline"></ion-icon> CONCLUIR
              </b-button>
            </div>
            <div v-else>
              <b-button
                class="mb-3"
                @click="concludeActivity(activity.idAtividade)"
                variant="success"
                disabled
              >
                <ion-icon name="create-outline"></ion-icon> CONCLUIR
              </b-button>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="text-left mt-4">
            <b-card title="Nome" class="cardDetails">
              <div>
                <p>
                  {{ activity.nome }}
                </p>
                <h4>Tipo</h4>
                <p>
                  {{ activity.idCategoria }}
                </p>
                <h4>Localização</h4>
                <p>
                  {{ activity.idLocal }}
                </p>

                <h4>Certificado</h4>
                <p>
                  {{ activity.certificado_SN }}
                </p>
                <h4>Descrição</h4>
                <p>
                  {{ activity.desc_atividade }}
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
import { ActivityService } from '../services/activities.service';

export default {
  name: "Activity",
  data() {
    return {
      activity: "",
      enrollments: this.$store.state.enrollments,
      subscribed: undefined,
      
    };
  },
  created() {
  
    this.subscribed = this.$store.state.enrollments.find(enrollment => {
      if (enrollment.idActivity == this.activity.id) {
        if (enrollment.idUser == this.$store.getters.getLoggedUser.id) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
  },
  methods: {
    goBack() {
      this.$router.push({ name: "ListActivity" });
    },
    removeActivity(id) {
      if (confirm("Tem a certeza que pretende remover?")) {
        this.$store.dispatch("removeActivity", id);
      }
    },
    updateActivity(id) {
      this.$router.push({ name: "UpdateActivity", params: { activityID: id } });
    },
    concludeActivity(id) {
      try {
        if (confirm("Tem a certeza que pretende concluir?")) {
          this.$store.dispatch("concludeActivity", id);
        }
      } catch (error) {
        alert(error);
      }
    },
     newEnrollment(id) {




       console.log("idUser:", this.$store.getters.getLoggedUser.idUtilizador);
      console.log("idAtivity:", id);
      try {
        
        this.$store.dispatch("submitEnrollment", {
          idActivity: id,
          idUser: this.$store.getters.getLoggedUser.idUtilizador,
          
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
          idUser: this.$store.getters.getLoggedUser.idUtilizador
        });
        this.subscribed = undefined;
      } catch (error) {
        alert(error);
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
    getUser() {
      return this.$store.getters.getLoggedUser;
    }
  }
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
.activityCard {
  margin-top: 120px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px #81790f;
}
.imgActivity {
  width: 300px;
  height: 300px;
  border-radius: 10px;
}

.cardDetails {
  border: none !important;
}
</style>
