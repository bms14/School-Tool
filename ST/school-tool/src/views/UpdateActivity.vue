<template>
  <div id="updateActivity" class="center">
    <b-container class="justify-content-center">
      <b-card class="ActivityCard">
        <b-row
          ><h2>Editar atividade: {{ activity.nome }}</h2></b-row
        >
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
                  v-model="activity.idCategoria"
                  readonly
                  disabled
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-form-group id="input-group-3" class="mb-3">
                <b-form-select
                  id="input-3"
                  v-model="frm.local"
                  :options="$store.getters.getActivitiesSelect"
                  required
                >
                  <b-form-select-option disabled value=""
                    >Selecione um local</b-form-select-option
                  ></b-form-select
                >
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
              <b-input-group class="mb-3">
                <b-form-input
                  type="number"
                  id="activityNum"
                  placeholder="Nº de participantes"
                  v-model="activity.num_participantes"
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
                  v-model="activity.certificado_SN"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Sim"
                  >Sim</b-form-radio
                >
                <b-form-radio
                  v-model="activity.certificado_SN"
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
                  v-model="activity.imagem"
                  readonly
                  disabled
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-button type="submit" variant="secondary"
              >ATUALIZAR ATIVIDADE</b-button
            >
          </b-form>
        </b-row>
      </b-card>
    </b-container>

    <a role="button" class="btn btn-outline-dark" @click="goBack">Retroceder</a>
  </div>
</template>

<script>
import { ActivityService } from "../services/activities.service";
export default {
  name: "UpdateActivity",
  data() {
    return {
      activity: "",
      frm: {
        id: "",
        name: "",
        date: "",
        local: "",
        description: "",
      },
    };
  },
  /*   created() {
    let activities = this.getActivities;
    this.activity = activities.find(
      activity => activity.id == this.$route.params.id
    );
    this.frm.name = this.activity.name;
    this.frm.date = this.activity.date;
    this.frm.hour = this.activity.hour;
    this.frm.local = this.activity.local;
    this.frm.description = this.activity.description;
  }, */
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async getOneActivity() {
      this.frm.id = this.$route.params.activityID;
      this.frm.name = this.activity.nome,
      this.frm.description =  this.activity.desc_atividade
      this.activity = await ActivityService.fetchOneActivity(
        this.$route.params.activityID
      );
      this.frm.name = this.activity.nome;
    },
    updateActivity() {
      try {
        this.$store.dispatch("updateActivity", this.$data.frm);
      } catch (error) {
        alert(error);
      }
    },
  },
  computed: {
    getActivities() {
      return this.$store.getters.getActivities;
    },
  },

  mounted() {
    this.getOneActivity();
  },
};
</script>

<style></style>
