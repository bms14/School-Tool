<template>
  <div id="content">
    <b-img id="header" class="headerImg" src="../assets/quiz_bg.webp" alt=" List Quizzes"></b-img>
    <h3 class="d-flex justify-content-center headerTxt mt-5 mb-5">
      Venha Participar
    </h3>
    <b-container id="quiz" class="quiz">
      <b-row>
        <div class="event-deck">
          <b-row class="d-flex justify-content-center ">
            <tr v-for="quiz in this.$store.state.quizzes" :key="quiz.id">
              <b-col
                col
                lg="12"
                md="8"
                class="d-flex justify-content-center mb-5 mr-auto ml-auto "
              >
                <b-card
                  class="text-left mr-1 ml-3 mb-1 quiz_card"
                  tag="article"
                  :img-src="quiz.imagem"
                  img-alt="Image"
                  img-left
                  alt=""
                >
                  <b-card-text >
                    <h4 class="d-flex justify-content-left card-theme">
                      {{ quiz.tema }}
                    </h4>
                    <p class="d-flex justify-content-left card-text">
                      {{ quiz.desc_quiz }}
                    </p>
                  </b-card-text>
                  <span v-if="teste(quiz.id)">
                    <router-link
                    class="card-button"
                      id="seeMoreQuiz"
                      :to="{ name: 'quiz', params: { quizID: quiz.idQuiz } }"
                      tag="b-button"
                    >
                      VER
                    </router-link>
                  </span>
                  <span v-else>
                    <b-button class="card-button" disabled>Quiz Completo</b-button>
                  </span>
                </b-card>
              </b-col>
            </tr>
          </b-row>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ListQuiz",

  data() {
    return {
      quizzes: this.$store.state.quizzes,
      concluded_quizzes: this.$store.getters.getConcldedQuizzes
    };
  },

  methods: {
    teste(id) {
      let x = this.concluded_quizzes.findIndex(quiz => {
        if (
          quiz.idUser == this.$store.getters.getLoggedUser.id &&
          quiz.idQuiz == id
        ) {
          return true;
        }
      });
      if (x != -1) {
        return false;
      } else {
        return true;
      }
    },
    async storeQuizzes() {
      await this.$store.dispatch("fetchAllQuizzes");
    },
  },



mounted(){
    this.storeQuizzes()
  },

};


</script>

<style>
#quiz {
  padding-top: 80px;
  min-height: 100vh;
}

.quiz {
  position: relative;
  top: -5rem;
}
.headerImg {
  margin-left: 2.5%;
  max-width: 1800px;
  max-height: 250px;
}

.quiz_card {
  box-shadow: 0 0 10px #81790f;
  max-width: 50rem;
  max-height: auto;
}

.quiz_card img{
width: 20rem;
height: 15rem;
}


.card-theme{

position: relative;
top: 1rem;
left: 2vh;
}

.card-text{

position: relative;
top: 2rem;

}

.card-button{

position: relative;
top: 4rem;

}


</style>
