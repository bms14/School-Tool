<template>
  <div id="Activity">
    <div class="container-xl activityCard">
      <div class="row">
        <div class="col-lg-4">
          <img class="img-fluid imgActivity mt-3" :src="activity.image" />
          <div class="eventDate mt-3">
            <p>Data: {{ activity.date }}</p>
            <p>Participantes: {{ activity.numPeople }}</p>
            <p>Hora: {{ activity.hour }}</p>
          </div>
          <div v-if="subscribed == undefined">
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

        <div class="col-lg-8">
          <div class="text-left mt-4">
            <b-card title="Nome" class="cardDetails">
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
    this.subscribed = this.$store.state.enrollments.find((enrollment) => {
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
        this.subscribed = undefined;
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