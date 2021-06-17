<template>
  <div id="adminListQuizzes">
    <b-container>
      <h1>Quizzes</h1>
      
    <b-row>
          <div id="listUsers">
            <div v-if="getNumQuizzes == 0">NÃO EXISTEM QUIZZES</div>
            <div v-else class="row justify-content-md-center">
              <b-input-group class="mb-3 col-sm-4">
                <b-form-input
                  type="text"
                  id="txtName"
                  placeholder="Pesquise o nome..."
                  v-model="filterName"
                >
                </b-form-input>
              </b-input-group>
              <hr />
              <br />
              <br />
              <table class="d-flex justify-content-center table-responsive">
                <tbody>
                  <tr v-for="quiz in filteredQuizzes" :key="quiz.idQuiz">
                    <td>
                      <img
                        width="50px"
                        height="50px"
                        :src="quiz.imagem"
                        class="rounded-circle"
                        alt=""
                      />
                    </td>
                    <td>{{ quiz.tema }}</td>
                    <td class="text-info">{{ quiz.pergunta }}</td>
                    <td>
                      <b-button @click="removeQuiz(quiz.idQuiz)" variant="danger">
                        <ion-icon name="trash-outline"></ion-icon> REMOVER
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  name: "AdminListQuizzes",
    data() {
    return {
      filterName: ""
    };
  },
  methods:{
      removeQuiz(id) {
      if (confirm("Tem a certeza que pretende remover?")) {
        this.$store.dispatch("removeQuiz", id);
      }
    },
async storeQuizzes() {
      await this.$store.dispatch("fetchAllQuizzes");
    },


  },

  
mounted(){
    this.storeQuizzes()
  },
  
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
    getNumQuizzes() {
      return this.$store.getters.getNumQuizzes;
    },

   filteredQuizzes() {
      if (!this.filterName) {
        return this.$store.state.quizzes;
      } else {
        return this.$store.state.quizzes.filter(quiz =>
          quiz.tema.includes(this.filterName)
        );
      }
    }
  },
  }
</script>

<style>
#adminListQuizzes {
  background-color: #dcdcdc;
  min-height: 100vh;
}
</style>
