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
                  v-model="theme"
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
                  v-model="question"
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
                  v-model="answer1"
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
                  v-model="answer2"
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
                  v-model="answer3"
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
                  v-model="answer4"
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
                  v-model="correct_answer"
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
                  v-model="description"
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
  name: "submitQuiz",
  data() {
    return {
      id: this.$store.getters.getNextQuizId,
      theme: "",
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      correct_answer: "",
      description: "",
      image: "",
      concluded: false,
      points: "100"
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
