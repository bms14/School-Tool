<template>
  <div id="profile">
    <div id="info">
      <h1>Perfil</h1>
      <div id="foto">
        <form @submit.prevent="editPhoto" class="form-group">
          <img
            width="150px"
            height="150px"
            :src="getUser.photo"
            class="rounded-circle"
          /><br />
          <div >
          <input
            type="link"
            class="input"
            v-model="photo"
            placeholder="Insira um novo link"
          />
          <button type="submit" class="btn">Atualizar</button></div>
        </form>
      </div>
      <br />
      <div id="oneline" class="row">
        <div id="name" class="col">
          <h5>Nome</h5>
          <p>{{ getUser.name }}</p>
        </div>
        <div id="birthDate" class="col">
          <h5>Data de nascimento</h5>
          <p>{{ getUser.birthDate }}</p>
        </div>
      </div>
      <div id="line" class="row">
        <div id="email" class="col">
          <h5>Email</h5>
          <p>{{ getUser.email }}</p>
        </div>
        <div id="pass" class="col">
          <form @submit.prevent="editPassword" class="form-group">
            <h5>Deseja alterar a password?</h5>
            <input
              type="password"
              class="input"
              v-model="password"
              placeholder="Insira a nova password"
            />
            <button type="submit" class="btn">Atualizar</button>
          </form>
        </div>
      </div>
      <div id="line">
        <div id="course">
          <h5>Curso</h5>
          <p>{{ getUser.course }}</p>
        </div>
      </div>
      <div id="line">
        <h5>Interesses</h5>
        <div id="interests" class="interests">
          <form class="flex-container">
            <label class="check" for="interests"></label>
            <input type="radio" value="animation" required /> Animação
            <input type="radio" value="design" /> Design
            <input type="radio" value="maths" required /> Matemática
            <input type="radio" value="multimedia" /> Multimédia
            <input type="radio" value="programing" /> Programação
            <br>
            <button type="submit" class="btn">Guardar</button>
          </form>
        </div>
      </div>
    </div>
    <div id="gamification">
      <h1><ion-icon name="game-controller-outline"></ion-icon> Gamificação</h1>
      <p>Tipo de perfil: <span>Iniciante</span> <button id="infobtn"><ion-icon name="information-circle-outline"></ion-icon></button></p>
      <p>Pontos: <span>1</span><button id="infobtn"><ion-icon name="information-circle-outline"></ion-icon></button></p>
      <p>Conquistas: <span>3</span><button id="infobtn"><ion-icon name="information-circle-outline"></ion-icon></button></p>
      <p>Certificados: <span>2</span><button id="infobtn"><ion-icon name="information-circle-outline"></ion-icon></button></p>
    </div> <button type="button" class="btn btn-outline-danger" id="logout" data-toggle="modal"
                    data-target="#modalLogout">Logout</button>
    <div class="modal" id="modalLogout" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Logout</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Tens a certeza que queres sair?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Não</button>
                    <a href="">
                        <button type="button" id="btnLogout" class="btn btn-danger">Sim, tenho!</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      password: "",
      photo: "",
    };
  },
  methods: {
    editPassword() {
      try {
        this.$store.dispatch("editPassword", this.$data);
      } catch (error) {
        alert(error);
      }
    },
    editPhoto() {
      try {
        this.$store.dispatch("editPhoto", this.$data);
      } catch (error) {
        alert(error);
      }
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style>
#info,
#gamification {
  max-width: 700px;
  width: 100%;
  background: #fff;
  margin: 50px auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
  padding: 30px;
  border-radius: 25px;
}
#profile h1 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fec107;
  text-transform: uppercase;
  text-align: center;
}
 #profile #info #line,
#oneline h5, #oneline p, #gamification p {
  text-align: left;
} 
#profile #pass .btn,
#interests .btn,
#foto .btn {
  width: 90px;
  margin-left: 7px;
  padding: 8px 0px;
  font-size: 15px;
  border-color: #fec107;
  border-width: 2px;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}
#profile #pass .btn:hover,
#interests .btn:hover,
#foto .btn:hover {
  width: 90px;
  margin-left: 7px;
  padding: 8px 0px;
  font-size: 15px;
  background-color: #fec107;
  color:#fff;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}
#infobtn{
  background: none;
  border: none;
}
#gamification ion-icon {
  color: #fec107;
  top: 4px ;
  position: relative;
  
}

#profile #interests input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #ffa500;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

@media (max-width: 420px) {
  #profile #info #oneline {
    flex-direction: column;
  }
  .flex-container {
    display: flex;
    flex-flow: column wrap;
  }
}
</style>
