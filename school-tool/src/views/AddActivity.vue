<template>
  <div id="content">
    <b-container class=" justify-content-center">
      <b-card class="addActivityCard">
        <b-row><h1> Nova Atividade</h1></b-row>
        <b-row>
          <b-form @submit.prevent="submitActivity">
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtName"
                  placeholder="Nome"
                  v-model="name"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-form-group id="input-group-3" class="mb-3">
                <b-form-select id="input-3" v-model="type" required>
                  <b-form-select-option disabled value=""
                    >Selecione um tipo</b-form-select-option
                  >
                  <b-form-select-option
                    :value="type"
                    :key="i"
                    v-for="(type, i) in getActivityType"
                    >{{ type.name }}</b-form-select-option
                  >
                </b-form-select>
              </b-form-group>
            </b-row>
            <b-row>
              <b-form-group id="input-group-3" class="mb-3">
                <b-form-select id="input-3" v-model="local" required>
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
                    v-model="date"
                    button-only
                    aria-controls="date"
                    left
                    class="iconPrepend"
                  ></b-form-datepicker>
                </b-input-group-append>
                <b-form-input
                  id="date"
                  v-model="date"
                  type="text"
                  placeholder="Data de realização"
                  autocomplete="off"
                ></b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-form-group id="input-group-3" class="mb-3">
                <b-form-timepicker
                  v-model="hour"
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
                  v-model="numPeople"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row class="mb-3">
              <b-form-group
                label="Tem direito a certificado?"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio
                  v-model="certificate"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Sim"
                  >Sim</b-form-radio
                >
                <b-form-radio
                  v-model="certificate"
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
                v-model="description"
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
                  v-model="image"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-button type="submit" variant="secondary">Adicionar</b-button>
          </b-form>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "submitActivity",
  data() {
    return {
      id: this.$store.getters.getNextActivityId,
      name: "",
      type: "",
      local: "",
      date: null,
      hour: null,
      numPeople: null,
      certificate: "",
      description: "",
      image: "",
      concluded: false,
      full: false,
    };
  },
  methods: {
    submitActivity() {
      try {
        //this.$store.dispacth("login",{username: this.username, password: this.password});
        this.$store.dispatch("submitActivity", this.$data);
        //saltar para a view home
        this.$router.push({ name: "Homepage" });
      } catch (error) {
        alert(error);
      }
    },
  },
  computed: {
    getActivityType() {
      return this.$store.getters.getActivityType;
    },
  },
};
</script>

<style>
.addActivityCard h1 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fec107;
  text-transform: uppercase;
  text-align: center;
}
</style>