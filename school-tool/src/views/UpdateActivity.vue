<template>
  <div id="updateActivity" class="center">
      <b-container class=" justify-content-center">
      <b-card class="ActivityCard">
        <b-row><h2>Editar atividade: {{ activity.name }}</h2></b-row>
        <b-row>
          <b-form @submit.prevent="updateActivity">
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtName"
                  placeholder="Nome"
                  v-model="frm.name"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtType"
                  v-model="activity.type"
                  readonly
                  disabled
                >
                </b-form-input>
              </b-input-group>
              
            </b-row>
            <b-row>
              <b-form-group id="input-group-3" class="mb-3">
                <b-form-select id="input-3" v-model="frm.local" required>
                  <b-form-select-option disabled value=""
                    >Selecione um local</b-form-select-option
                  >
                  <b-form-select-option
                    :value="local"
                    :key="i"
                    v-for="(local, i) in this.$store.state.locals"
                    >{{ local }}</b-form-select-option
                  >
                </b-form-select>
              </b-form-group>
            </b-row>
            <b-row class="mb-3">
              <b-input-group class="mb-3">
                <b-input-group-append>
                  <b-form-datepicker
                    v-model="frm.date"
                    button-only
                    aria-controls="date"
                    left
                    class="iconPrepend"
                  ></b-form-datepicker>
                </b-input-group-append>
                <b-form-input
                  id="date"
                  v-model="frm.date"
                  type="text"
                  placeholder="Data de realização"
                  autocomplete="off"
                ></b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-form-group id="input-group-3" class="mb-3">
                <b-form-timepicker
                  v-model="frm.hour"
                  locale="pt"
                  min="09:00"
                  max="19:30"
                  required
                ></b-form-timepicker>
              </b-form-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="number"
                  id="activityNum"
                  placeholder="Nº de participantes"
                  v-model="activity.numPeople"
                  readonly
                  disabled
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row class="mb-3">
              <b-form-group
                label="Tem direito a certificado?"
                v-slot="{ ariaDescribedby }"
                readonly
                  disabled
              >
                <b-form-radio
                  v-model="activity.certificate"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Sim"
                  >Sim</b-form-radio
                >
                <b-form-radio
                  v-model="activity.certificate"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Não"
                  >Não</b-form-radio
                >
              </b-form-group>
            </b-row>
            <b-row class="mb-3">
              <b-form-textarea
                id="description"
                v-model="frm.description"
                placeholder="Insira uma breve descrição..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="url"
                  id="activityImage"
                  placeholder="Url de uma imagem"
                  v-model="activity.image"
                  readonly
                  disabled
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-button type="submit" variant="secondary">ATUALIZAR ATIVIDADE</b-button>
          </b-form>
        </b-row>
      </b-card>
    </b-container>
   
    <a role="button" class="btn btn-outline-dark" @click="goBack">Retroceder</a>
  </div>
</template>

<script>
export default {
  name: "UpdateActivity",
  data() {
    return {
      activity: null,
      frm: {
        name: "",
        date:"",
        hour:"",
        local:"",
        description:"",
      }
    };
  },
  created() {
    let activities = this.getActivities;
    this.activity = activities.find(activity => activity.id == this.$route.params.id);
    this.frm.name = this.activity.name;
    this.frm.date = this.activity.date;
    this.frm.hour = this.activity.hour;
    this.frm.local = this.activity.local;
    this.frm.description = this.activity.description;
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Homepage" });
    },
    updateActivity() {
      this.$store.dispatch("updateActivity", {
        id: this.activity.id,
        name: this.activity.name,
        date:this.activity.date,
        hour:this.activity.hour,
        local: this.activity.local,
        description: this.activity.description,
      });
      alert("Atividade editada com sucesso!");
    }
  },
  computed: {
    getActivities() {
      return this.$store.getters.getActivities;
    }
  }
};
</script>

<style>
/* #editUser {
  max-width: 500px;
  width: 100%;
  background: #fff;
  margin: 50px auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
  padding: 30px;
  border-radius: 25px;
}
#editUser h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fec107;
  text-transform: uppercase;
  text-align: center;
}
#editUser form {
  width: 100%;
}
#editUser form .form-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
#editUser form label {
  width: 200px;
  color: #757575;
  margin-right: 10px;
  font-size: 14px;
}
#editUser form input.btn {
  font-size: 15px;
  border-color: #fec107;
  border-width: 2px;
  cursor: pointer;
}
#editUser form input.btn:hover {
  font-size: 15px;
  background-color: #fec107;
  color: #ffff;
  border-width: 2px;
  cursor: pointer;
} */
</style>