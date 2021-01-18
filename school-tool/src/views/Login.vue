<template>
  <div class="login">
    <b-container class="d-flex justify-content-center">
      <b-card class="loginCard">
         <b-card-title>
            <img src="../assets/logo1.png" class="logoImg" />
          </b-card-title>
        <b-row>
          <b-form @submit.prevent="login">
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
                  class="loginInput"
                  prepend-icon="email"
                  placeholder="Introduza o Email"
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
                  class="loginInput"
                  placeholder="Introduza a Password"
                  v-model="password"
                ></b-form-input>
              </b-input-group>
            </b-row>
            <b-button type="submit" variant="outline-warning" class="btn btnSubmit">Login</b-button>
          </b-form>
           <p class="registerMsg">
              Ainda não tens conta?
              <span
                ><router-link to="/register" class="registerAnchor"
                  >Registar</router-link
                ></span
              >
            </p>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      try {
        if (this.email == "admin" && this.password == "admin") {
          this.$store.dispatch("login", this.$data);
          this.$router.push({ name: "HomeAdmin" });
        } else {
          this.$store.dispatch("login", this.$data);
          this.$router.push({ name: "Homepage" });
        }
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style>
 .loginCard {
  box-shadow: 0 0 15px #917910;
  margin-top: 10vw;
}
.logoImg {
  width: 200px;
  margin-bottom: 15px;
  margin-top: 15px;
}
.iconPrepend {
  background-color: #bb9a188a !important;
  color: #332d2dd8 !important;
}
.loginInput:focus {
  box-shadow: none !important;
  border: 1px solid #bb9a188a !important;
}
.registerMsg {
  padding-top: 15px;
  font-size: 13px;
}
.registerAnchor:hover {
  color: #b19001;
  transition: 0.5s ease-in-out;
  text-decoration: none !important;
} 
</style>
