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
          <input
            type="link"
            class="input"
            v-model="photo"
            placeholder="Insira um novo link"
          />
          <button type="submit" class="btn">Atualizar</button>
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
      <h1>Gamificação</h1>
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
#oneline h5, #oneline p {
  text-align: left;
} 
#profile #pass .btn,
#interests .btn,
#foto .btn {
  width: 90px;
  margin-left: 7px;
  padding: 8px 0px;
  font-size: 15px;
  background: #fec107;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
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
