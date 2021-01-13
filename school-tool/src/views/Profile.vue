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
          <div>
            <input
              type="link"
              class="input"
              v-model="photo"
              placeholder="Insira um novo link"
            />
            <button type="submit" class="btn">Atualizar</button>
          </div>
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
            <br />
            <button type="submit" class="btn">Guardar</button>
          </form>
        </div>
      </div>
    </div>
    <div id="gamification">
      <h1><ion-icon name="game-controller-outline"></ion-icon> Gamificação</h1>
      <h6>Tipo de perfil: <span>{{ getUser.profileType }} </span> <button v-b-modal.modal-1 id="infobtn"><ion-icon name="information-circle-outline"></ion-icon></button></h6>
      <h6>Pontos: <span>{{ getUser.points }} </span><button v-b-modal.modal-2 id="infobtn"><ion-icon name="information-circle-outline"></ion-icon></button></h6>
      <h6>Conquistas: <span>{{ getUser.achievements }} </span><button v-b-modal.modal-3 id="infobtn"><ion-icon name="information-circle-outline"></ion-icon></button></h6>
      <h6>Certificados: <span>{{ getUser.certificates }} </span><button v-b-modal.modal-4 id="infobtn"><ion-icon name="information-circle-outline"></ion-icon></button></h6>
    </div>
    <b-modal id="modal-1" header-text-variant="warning" centered title="TIPO DE PERFIL" >
    <h5>Iniciante: </h5>
    <p>Utilizador com menos de 1000 pontos inclusive.</p>
    <h5>Intermédio: </h5>
    <p>Utilizador com mais de 1000 pontos e menos de 3500 inclusive.</p>
    <h5>Avançado: </h5>
    <p>Utilizador com mais de 3500 pontos inclusive.</p>
    </b-modal>
    <b-modal id="modal-2" centered title="PONTOS ACUMULADOS">
    <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal id="modal-3" centered title="CONQUISTAS">
    <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal id="modal-4" centered title="CERTIFICADOS">
    <p class="my-4">Hello from modal!</p>
    </b-modal>

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
#oneline h5,
#oneline p,
#gamification h6 {
  text-align: left;
}
#gamification span{
  font-size: 12px;
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
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
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
