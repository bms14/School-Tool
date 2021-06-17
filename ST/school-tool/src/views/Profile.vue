<template>
  <div id="content">
    <b-container id="info">
      <b-card class="profileCard">
        <h1>Perfil</h1>
        <b-form @submit.prevent="editProfile">
          <b-row>
            <b-img
              id="foto"
              center
              :src="current_user.foto"
              rounded="circle"
              alt="Profile photo"
            ></b-img>
            <b-row>
              <b-input-group class="mb-3 mt-3">
                <b-form-input
                  type="url"
                  class="input"
                  v-model="frm.foto"
                  placeholder="Insira um novo link"
                />
              </b-input-group>
            </b-row>

            <b-row>
              <div id="name" class="col">
                <h5>Nome</h5>
                <p>{{ current_user.nome }}</p>
              </div>
              <div id="birthDate" class="col">
                <h5>Data de nascimento</h5>
                <p>{{birthday[0]}}</p>
              </div>
            </b-row>
            <b-row>
              <div id="email" class="col">
                <b-form-group>
                  <h5>E-mail</h5>
                  <p>{{ current_user.email }}</p>
                </b-form-group>
              </div>
              <div id="pass" class="col">
                <b-row>
                  <b-input-group class="mb-3">
                    <b-row>
                      <h5>Deseja alterar a password?</h5>
                    </b-row>
                    <b-row>
                      <b-form-group>
                        <b-form-input
                          type="password"
                          id="txtPassword"
                          placeholder="Password"
                          v-model="frm.password"
                        />
                      </b-form-group>
                    </b-row>
                  </b-input-group>
                </b-row>
              </div>
            </b-row>
            <b-row>
              <div id="course">
                <h5>Curso</h5>
                <p>{{ getCourseType() }}</p>
              </div>
              
            </b-row>
          </b-row>
          <b-button variant="secondary" type="submit" class="btn"
            >Atualizar</b-button
          >
        </b-form>
      </b-card>
      <b-card class="gamificationCard" id="gamification">
        <h1>GAMIFICAÇÃO</h1>
        <b-row>
          <h6>
            Tipo de perfil: <span>{{ getProfileType() }} </span>
            <b-button v-b-modal.modal-1 id="infobtn">
              <ion-icon name="information-circle-outline"></ion-icon>
            </b-button>
          </h6>
          <h6>
            Pontos: <span>{{ this.$store.getters.getLoggedUser.pontuacao }} </span
            ><button v-b-modal.modal-2 id="infobtn">
              <ion-icon name="information-circle-outline"></ion-icon>
            </button>
          </h6>
          <h6>
            Conquistas: <span>{{ getUser.achievements }} </span
            ><button v-b-modal.modal-3 id="infobtn">
              <ion-icon name="information-circle-outline"></ion-icon>
            </button>
          </h6>
          <h6>
            Certificados: <span>{{ getUser.certificates }} </span
            ><button v-b-modal.modal-4 id="infobtn">
              <ion-icon name="information-circle-outline"></ion-icon>
            </button>
          </h6>
        </b-row>
        <b-modal
          id="modal-1"
          header-text-variant="warning"
          centered
          title="TIPO DE PERFIL"
        >
          <h6 class="gray"><i class="far fa-gem"></i> Iniciante:</h6>
          <p>Utilizador com menos de 1000 pontos inclusive.</p>
          <h6 class="purple"><i class="far fa-gem"></i> Intermédio:</h6>
          <p>Utilizador com mais de 1000 pontos e menos de 3500 inclusive.</p>
          <h6 class="yellow"><i class="far fa-gem"></i> Avançado:</h6>
          <p>Utilizador com mais de 3500 pontos.</p>
        </b-modal>
        <b-modal
          id="modal-2"
          header-text-variant="warning"
          centered
          title="COMO GANHAR PONTOS? "
        >
          <p class="my-4">
            A cada atividade que participes ganhas X pontos. Participa em várias
            para conseguires subir de nível!
          </p>
        </b-modal>
        <b-modal id="modal-3" centered title="CONQUISTAS">
          <p class="my-4">Não possui conquistas!</p>
        </b-modal>
        <b-modal id="modal-4" centered title="CERTIFICADOS">
          <p class="my-4">Não possui certificados!</p>
        </b-modal>
      </b-card>
    </b-container>
  </div>
</template>

<script>

import { UserService } from '../services/user_service';

export default {
  name: "Profile",
  data() {
    return {
     current_user:'',
      frm: {
        id:"",
        password: "",
        foto: "",
      
      },
      /* current_user: this.$store.getters.getLoggedUser, */
      birthday: ""
    };
  },



  created() {
   
   
    this.birthday= this.getUser.data_nasc.split("T")

    /*  this.quizzes= this.$store.getters.getConcldedQuizzes.filter( quiz => quiz.idUser == this.$store.getters.getLoggedUser); */

    /*  if(quiz.idUser == this.$store.getters.getLoggedUser){

        for( let i = 0 ; i < this.quizzes.lenght; i++ )
        {
          this.points += quiz.points
        } */
  },
  methods: {

    async getOneUser(){

      this.current_user = await UserService.fetchOneUserByID(this.$store.getters.getLoggedUser.idUtilizador)
      this.frm.id = this.current_user.idUtilizador
      this.frm.password = this.current_user.password,
      this.frm.foto = this.current_user.foto

    },

     editProfile() {
      try {
        this.$store.dispatch("editProfile", this.$data.frm);
        
      } catch (error) {
        alert(error);
      }
    },
    

    getProfileType() {
      let type = "";

      if (this.current_user.pontuacao <= 1000) {
        type = "Iniciante";
      }

      else if (this.current_user.pontuacao > 1000 && this.current_user.pontuacao <= 3500) {
        type = "Intermédio";
      } else {
        type = "Avançado";
      }
      return type;
    },

 getCourseType() {
      let type = "";

      if (this.current_user.idCurso == 1) {
        type = "Licenciatura em Design";
      }

      else if (this.current_user.idCurso == 2) {
        type = "Licenciatura em Fotografia";
      } 
       else if (this.current_user.idCurso == 3) {
        type = "Licenciatura em Multimédia";
      }
      else if (this.current_user.idCurso == 4) {
        type = "Licenciatura em Tecnologia da Comunicação Audiovisual";
      }
      else {
        type = "Licenciatura em Tecnologias e Sistemas de informação";
      }
      return type;
    },

  },

 mounted(){
    this.getOneUser()
    
    
    
  },

  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style scoped>
#content {
  padding-top: 80px;
  background-color: #dcdcdc;
  min-height: 100vh;
}
.gamificationCard {
  margin-top: 20px;
}
#info h1,
#gamification h1 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fec107;
  text-transform: uppercase;
  text-align: center;
}
#info h5,
#info p,
#gamification h6 {
  text-align: left;
}
#foto {
  width: 30%;
}
#gamification span {
  font-size: 12px;
}
#infobtn {
  background: none;
  border: none;
}
#gamification ion-icon {
  color: #fec107;
  top: 4px;
  position: relative;
}
#gamification ion-icon:hover {
  color: #ffffff;
  top: 4px;
  position: relative;
  border-radius: 100%;
  background: #fec107;
}
h6.gray {
  color: #b8b9b9;
}
h6.purple {
  color: #3c3641;
}
h6.yellow {
  color: #f3b944;
}
</style>
