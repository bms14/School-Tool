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
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text class="iconPrepend">
                    <i class="fas fa-lock"></i>
                  </b-input-group-text>
                </b-input-group-prepend>
                <b-form-select v-model="course" :options="options" >{{ course }}</b-form-select>
                 
              </b-input-group>
            </b-row>
            <b-button type="submit" class="btn btn-primary">Login</b-button>
          </b-form>
        </b-row>
      </b-card>
    </b-container>
  </div>












   <!-- <div class="row justify-content-center">
    <div id="login" class="col-6">
      <form @submit.prevent="register" class="form-group">
        <label for="txtName">Nome</label>
        <input
          type="text"
          class="form-control"
          id="txtName"
          v-model="name"
          placeholder="Name"
          required
        /><br />
        <label for="txtEmail">Email</label>
        <input
          type="email"
          class="form-control"
          id="txtMail"
          v-model="email"
          placeholder="Email"
          required
        /><br />
        <label for="txtPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="txtPassword"
          v-model="password"
          placeholder="password"
          required
        /><br />
        <label for="txtPassword">Confirmar Password</label>
        <input
          type="password"
          class="form-control"
          id="txtPassword2"
          v-model="password2"
          placeholder="Confirmar password"
          required
        /><br />
        <label for="sltCourse">Curso</label>
        <select class="form-control" id="sltCourse" v-model="course" required>
          <option disabled value="">Curso</option>
          <option value="Design">Design</option>
          <option value="Fotografia">Fotografia</option>
          <option value="Multimédia">Multimédia</option>
          <option value="Tecnologia da Comunicação Audiovisual">Tecnologia da Comunicação Audiovisual</option>
          <option value="Tecnologias e Sistemas de informação para Web">
            Tecnologias e Sistemas de informação para Web
          </option>
        </select>
        <br />
        <label for="txtDate">Data de nascimento</label>
        <input
          type="date"
          id="txtDate"
          class="form-control"
          v-model="birthDate"
          required
        /><br />
        <label for="txtLink">Link Foto: </label>
        <input
          type="link"
          class="form-control"
          id="txtLink"
          v-model="photo"
          placeholder="Foto"
          required
        /><br />
        <input type="submit" class="btn btn-primary" value="REGISTAR" />
      </form>
    </div>
  </div>  -->
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
      achievements:0,
      certificates:0,
      blocked: false,
      options: [
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is option a' },
          { value: 'b', text: 'Default Selected Option b' },
          { value: 'c', text: 'This is option c' },
          { value: 'd', text: 'This one is disabled', disabled: true },
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
    }
  }
};
</script>

<style></style>
