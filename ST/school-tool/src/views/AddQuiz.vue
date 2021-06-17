<template>
  <div id="content">
    <b-container class=" justify-content-center">
      <b-card class="addQuizCard">
        <b-row><h1>Nova Quiz</h1></b-row>
        <b-row>
          <b-form @submit.prevent="submitQuiz">
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtTheme"
                  placeholder="Tema"
                  v-model="tema"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtQuestion"
                  placeholder="Pergunta"
                  v-model="pergunta"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtAnswer1"
                  placeholder="Resposta1"
                  v-model="resposta1"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtAnswer2"
                  placeholder="Resposta2"
                  v-model="resposta2"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtAnswer3"
                  placeholder="Resposta3"
                  v-model="resposta3"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtAnswer4"
                  placeholder="Resposta4"
                  v-model="resposta4"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtCorrectAnswer"
                  placeholder="Resposta Certa"
                  v-model="resposta_certa"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="text"
                  id="txtDescription"
                  placeholder="Breve Descrição"
                  v-model="desc_quiz"
                  required
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-form-input
                  type="url"
                  id="QuizImage"
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
  name: "submitQuiz",
  data() {
    return {
      
      tema: "",
      desc_quiz: "",
      pergunta: "",
     resposta1: "",
      resposta2: "",
      resposta3: "",
      resposta4: "",
      resposta_certa: "",
      imagem: "",
      
    };
  },
  methods: {
    submitQuiz() {
      try {
        this.$store.dispatch("submitQuiz", this.$data);
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
