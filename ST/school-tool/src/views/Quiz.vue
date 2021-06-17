<template>
  <div id="Quiz">
    <div class="container-xl quizCard">
      <div class="row">
        <div class="col-lg-4">
          <img class="img-fluid imgQuiz mt-3" :src="quiz.image" alt="Quiz image"/>
          <div class="mt-3">
            <h6>{{ quiz.tema }}</h6>
            
          </div>
        </div>

        <div class="col-lg-8">
          <div class="text-center mt-4">
            <b-card class="cardDetails">
              <h2>{{ quiz.pergunta }}</h2>
              <div class="teste">
                <form @submit.prevent="SubmitAnswer">
                  <input
                    type="radio"
                    name="resposta"
                    :value="quiz.resposta1"
                    v-model="correct_answer"
                    id="answer1"
                  />
                  <label for="answer1">{{ quiz.resposta1 }}</label>
                  <input
                    type="radio"
                    name="resposta"
                    :value="quiz.resposta2"
                    v-model="correct_answer"
                    id="answer2"
                  />
                  <label for="answer2">{{ quiz.resposta2 }}</label> <br />

                  <input
                    type="radio"
                    name="resposta"
                    :value="quiz.resposta3"
                    v-model="correct_answer"
                    id="answer3"
                  />
                  <label for="answer3">{{ quiz.resposta3 }}</label>
                  <input
                    type="radio"
                    name="resposta"
                    :value="quiz.resposta4"
                    v-model="correct_answer"
                    id="answer4"
                  />
                  <label for="answer4">{{ quiz.resposta4 }}</label>
                  <b-button type="submit" id="submit" variant="outline-warning"
                    >Submit</b-button
                  >
                </form>
              </div>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { QuizzService } from '../services/quizzes_service';

export default {
  name: "Quiz",
  data() {
    return {
      quiz: "",
      correct_answer: "",
      points: this.$store.getters.getLoggedUser.points
    };
  },
  created() {
    /* let quizzes = [];
    if (localStorage.getItem("quizzes")) {
      quizzes = JSON.parse(localStorage.getItem("quizzes"));
    } */
    /* this.quiz = quizzes.find(g => g.id == this.$route.params.id); */
  },
  methods: {
    goBack() {
      //retroceder pagina anterior
      //this.$router.go(-1)

      //ir pagina listagem de jogos

      this.$router.push({ name: "ListQuiz" });
    },

     async getOneQuiz(){
      
      this.quiz = await QuizzService.fetchOneQuiz(this.$route.params.quizID)
    } ,

    SubmitAnswer() {
      let x = this.quiz.resposta_certa;
      if (this.correct_answer == x) {
        this.$swal({
          title: "Good job!",
          text: "Correct Answer!",
          icon: "success",
          onClose: () => {
            try {
              this.$store.dispatch("concludedQuiz", {
                idQuiz: this.quiz.idQuiz,
                idUser: this.$store.getters.getLoggedUser.idUtilizador, 
              
                
              });
              
              this.subscribed = "true";
            } catch (error) {
              alert(error);
            }
            this.$router.push({ name: "ListQuiz" });
          }
        });
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Wrong Answer!",
          confirmButtonText: "Try Again"
        });
      }
    }
  },
    mounted(){
    this.getOneQuiz()
  },
};
</script>

<style>
#quiz p,
#quiz h5 {
  text-align: left;
}
#quiz {
  padding-top: 80px;
}
.quizCard {
  margin-top: 250px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px #81790f;
}
.imgQuiz {
  width: 300px;
  height: 300px;
  border-radius: 10px;
}

.cardDetails {
  border: none !important;
}

input[type="radio"] {
  display: none;
}

.teste label {
  position: relative;
  color: #81790f;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  border: 2px solid #81790f;
  border-radius: 5px;
  width: 300px;
  height: 50px;
  padding: 10px 75px;
  margin: 10px;
  top: 2rem;
}

#submit {
  position: relative;
  top: 4rem;
  font-size: 20px;
  width: 120px;
  height: 50px;
}

input[type="radio"]:checked + label {
  background-color: #81790f;
  color: white;
}
</style>
