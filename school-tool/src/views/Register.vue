<template>
  <div class="register">
    <b-container class="d-flex justify-content-center">
      <b-card class="loginCard">
        <b-button variant="light" class="goBack" type="button" @click="goBack"
          ><i class="fas fa-arrow-left"></i
        ></b-button>
        <b-card-title>
          <img src="../assets/logo_sembg.webp" class="logoImg" alt="Logo"/>
        </b-card-title>
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
                  required
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
                  required
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
                  required
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
                  required
                ></b-form-input>
              </b-input-group>
            </b-row>
            <b-row>
              <b-form-group id="input-group-3" class="mb-3">
                <b-form-select id="input-3" v-model="course" required>
                  <b-form-select-option disabled value=""
                    >Selecionar um curso</b-form-select-option
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
                  placeholder="Data de nascimento"
                  autocomplete="off"
                  required
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
                  type="url"
                  id="txtLink"
                  placeholder="Inserir o link da sua foto"
                  v-model="photo"
                  required
                ></b-form-input>
              </b-input-group>
            </b-row>
            <b-button type="submit" variant="warning" class="btn"
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
      showSuccess: false
    };
  },

  methods: {
    register() {
      try {
        this.$store.dispatch("register", this.$data);
        this.$router.push({ name: "Login" });
      } catch (error) {
        alert(error);
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
