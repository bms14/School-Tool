<template>  
  <div class="row justify-content-center">
    <div id="login" class="col-6">
      <form @submit.prevent="register" class="form-group">
        <label for="txtName">Nome</label>
        <input
          type="text"
          class="form-control"
          id="txtName"
          v-model="name"
          placeholder="Name"
        /><br />
        <label for="txtEmail">Email</label>
        <input
          type="email"
          class="form-control"
          id="txtMail"
          v-model="email"
          placeholder="Email"
        /><br />
        <label for="txtPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="txtPassword"
          v-model="password"
          placeholder="password"
        /><br />
        <label for="txtPassword">Confirmar Password</label>
        <input
          type="password"
          class="form-control"
          id="txtPassword2"
          v-model="password2"
          placeholder="Confirmar password"
        /><br />
        <label for="sltCourse">Curso</label>
        <select class="form-control" id="sltCourse" v-model="course">
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
        /><br />
        <input type="submit" class="btn btn-primary" value="REGISTAR" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      course: "",
      birthDate: "",
      type: "student"
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
  },
};
</script>

<style></style>
