<template>
  <div class="login">
    <b-container class="d-flex justify-content-center">
      <b-card class="loginCard">
        <b-button variant="light" class="goBack" type="button" @click="goBack"
          ><i class="fas fa-arrow-left"></i
        ></b-button>
        <b-card-title>
          <img src="../assets/logo_sembg.webp" class="logoImg" alt="Logo"/>
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
                  class="loginInput"
                  placeholder="Introduza a Password"
                  v-model="password"
                  required
                ></b-form-input>
              </b-input-group>
            </b-row>
            <b-button type="submit" variant="warning" class="btn btnSubmit"
              >Login</b-button
            >
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
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", this.$data);
       /*  if (this.email == "admin@gmail.com" && this.password == "Esmad_2021") {

        
          console.log("ENTREI3");
          setTimeout(() => this.$router.push({ name: "HomeAdmin" }),500);

        } */


        
         if (this.$store.state.loggedUser=="") {
         
       
    
           setTimeout(() =>  this.$router.push({ name: "Homepage" }) ,500) ;
        
        } else if(this.$store.state.loggedUser.idTipo == 3) 
       
          setTimeout(() => this.$router.push({ name: "HomeAdmin" }),500);
        
        else{
  setTimeout(() => this.$router.push({ name: "Homepage" }),500);
        }
      } catch (error) {
        alert(error);
      }
    },
    goBack() {
      this.$router.push({ name: "Landing" });
    }
  }
};
</script>

<style>
.loginCard {
  box-shadow: 0 0 15px #917910;
  margin-top: 5vw;
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
</style>
