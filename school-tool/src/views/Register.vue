<template>
  <div class="register">
    <b-container class="d-flex justify-content-center">
      <b-card class="registerCard">
        <b-row>
          <b-form @submit.prevent="register">
            <b-row>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text class="iconPrepend">
                    <i class="fas fa-user"></i>
                  </b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  id="txtName"
                  placeholder="Nome"
                  v-model="name"
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text class="iconPrepend">
                    <i class="fas fa-envelope"></i>
                  </b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  id="txtEmail"
                  placeholder="Email"
                  v-model="email"
                >
                </b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text class="iconPrepend">
                    <i class="fas fa-lock"></i>
                  </b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                  type="password"
                  id="txtPassword"
                  placeholder="Password"
                  v-model="password"
                ></b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text class="iconPrepend">
                    <i class="fas fa-lock"></i>
                  </b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                  type="password"
                  id="txtPassword2"
                  placeholder="Confirmar Password"
                  v-model="password2"
                ></b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-form-group
                id="input-group-3"
                class="mb-3"
                label="Curso:"
                label-for="input-3"
              >
                <b-form-select id="input-3" v-model="course" required>
                  <b-form-select-option disabled value=""
                    >Curso</b-form-select-option
                  >
                  <b-form-select-option value="Design"
                    >Design</b-form-select-option
                  >
                  <b-form-select-option value="Fotografia"
                    >Fotografia</b-form-select-option
                  >
                  <b-form-select-option value="Multimédia"
                    >Multimédia</b-form-select-option
                  >
                  <b-form-select-option
                    value="Tecnologia da Comunicação Audiovisual"
                    >Tecnologia da Comunicação Audiovisual</b-form-select-option
                  >
                  <b-form-select-option
                    value="Tecnologias e Sistemas de informação para Web"
                  >
                    Tecnologias e Sistemas de informação para Web
                  </b-form-select-option>
                </b-form-select>
              </b-form-group>
            </b-row>
            <b-row class="mb-3">
              <label for="example-datepicker">Data de nascimento:</label>
              <b-input-group class="mb-3">
                <b-input-group-append>
        <b-form-datepicker
          v-model="birthDate"
          button-only
          aria-controls="birthDate"
          left
          class="iconPrepend"
        ></b-form-datepicker>
      </b-input-group-append>
      <b-form-input
        id="birthDate"
        v-model="birthDate"
        type="text"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>
    </b-input-group>
            </b-row>
            <b-row>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text class="iconPrepend">
                    <i class="fas fa-link"></i>
                  </b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                  type="link"
                  id="txtLink"
                  placeholder="Insira um link"
                  v-model="photo"
                ></b-form-input>
              </b-input-group>
            </b-row>
            <b-button type="submit" variant="outline-warning" class="btn"
              >Register</b-button
            >
          </b-form>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    
    return {
      id: this.$store.getters.getNextUserId,
      name: "",
      email: "",
      password: "",
      password2: "",
      course: "",
      birthDate: "",
      photo: "",
      type: "Estudante",
      profileType: "Iniciante",
      points: 100,
      interests: [],
      achievements: 0,
      certificates: 0,
      blocked: false,
      options: [
          { value: null, text: 'Please select some item', disabled: true },
          { value: 'a', text: 'This is option a' },
          { value: 'b', text: 'Default Selected Option b' },
          { value: 'c', text: 'This is option c' },
          { value: 'd', text: 'This one is disabled' },
          { value: 'e', text: 'This is option e' },
          { value: 'e', text: 'This is option f' }
        ],
     
    };
    
  },
   
  methods: {
    register() {
      try {
        //chamar a ação login que está na store
        //this.$store.dispacth("login",{username: this.username, password: this.password});
        this.$store.dispatch("register", this.$data);
        //saltar para a view home
        this.$router.push({ name: "Login" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style></style>
