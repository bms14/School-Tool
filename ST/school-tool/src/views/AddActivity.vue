<template>
  <div id="content">
    <b-container class=" justify-content-center">
      <b-card class="addActivityCard">
        <b-row><h1>Nova Atividade</h1></b-row>
        <b-row>
          <b-form @submit.prevent="submitActivity">
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtName"
                  placeholder="Nome"
                  v-model="nome"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-form-group id="input-group-3" class="mb-3">
                <b-form-select
                  id="input-3"
                  v-model="idCategoria"
                  :options="$store.getters.getActivitiesForSelect"
                  required
                >
                  <b-form-select-option disabled value=""
                    >Selecione um tipo</b-form-select-option
                  ></b-form-select
                >
              </b-form-group>
            </b-row>
            <b-row>
              <b-form-group id="input-group-3" class="mb-3">
                <b-form-select
                  id="input-3"
                  v-model="idLocal"
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
                    v-model="data_hora"
                    button-only
                    aria-controls="date"
                    left
                    class="iconPrepend"
                  ></b-form-datepicker>
                </b-input-group-append>
                <b-form-input
                  id="date"
                  v-model="data_hora"
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
                  v-model="num_participantes"
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
                  v-model="certificado_SN"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="Sim"
                  >Sim</b-form-radio
                >
                <b-form-radio
                  v-model="certificado_SN"
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
                v-model="desc_atividade"
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
                  v-model="imagem"
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
      nome: "",
      idCategoria: "",
      idLocal: "",
      data_hora: "",

      num_participantes: "",
      certificado_SN: "",
      desc_atividade: "",
      imagem: "",
      concluida: "false",
      
      
    };
  },
  methods: {
    submitActivity() {
    
      try {
        this.$store.dispatch("submitActivity", this.$data);
        //saltar para a view home
        this.$router.push({ name: "Homepage" });
      } catch (error) {
        alert(error);
      }
    }
  }
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
