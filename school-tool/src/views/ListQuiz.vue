<template>
  <div id="content">
    <b-img id="header" class="headerImg" src="../assets/quiz_bg.jpg"></b-img>
    <h3 class="d-flex justify-content-center headerTxt mt-5 mb-5">
      Venha Participar
    </h3>
    <b-container id="quiz" class="quiz">
      <b-row>
        <div class="event-deck">
          <b-row class="d-flex justify-content-center">
            <tr v-for="quiz in this.$store.state.quizzes" :key="quiz.id">
              <b-col
                col
                lg="12"
                md="8"
                class="d-flex justify-content-center mb-5 mr-auto ml-auto"
              >
                <b-card
                  class="text-left mr-1 ml-3 mb-1"
                  tag="article"
                  :img-src="quiz.image"
                  img-alt="Image"
                  img-left
                >
                  <b-card-text>
                    <h6 class="d-flex justify-content-left">
                      {{ quiz.theme }}
                    </h6>
                    <p class="d-flex justify-content-left">
                      {{ quiz.description }}
                    </p>
                  </b-card-text>
                  <span v-if="teste(quiz.id)">
                    <router-link
                      id="seeMoreQuiz"
                      :to="{ name: 'quiz', params: { id: quiz.id } }"
                      tag="b-button"
                    >
                      VER
                    </router-link>
                  </span>
                  <span v-else>
                   <b-button disabled>Quiz Completo</b-button> 
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
      concluded_quizzes: this.$store.getters.getConcldedQuizzes,
    };
  },
  created() {
    /*   let x = this.concluded_quizzes.filter(
      (g) => g.idUser === this.$store.getters.getLoggedUser.id
    );
    this.quizzes.map((quiz) => {
     x.forEach((g) => {
        if (g.idQuiz == g.id) { 
          quiz.concluded="true"
        }
       
      });
    }); */
  },
  methods: {
    teste(id) {
      let x = this.concluded_quizzes.findIndex(quiz => {
        if(quiz.idUser == this.$store.getters.getLoggedUser.id && quiz.idQuiz == id){
          return true;
        }
      })
      if(x != -1){
        return false;
      }
      else{
        return true
      }
     
    },
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
  max-width: 100%;
  padding: 0;
  margin: 0;
}

article {
  box-shadow: 0 0 10px #81790f;
  max-width: 50rem;
  max-height: auto;
}
article img {
  max-width: 20vw;
}
</style>