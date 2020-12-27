<template>
  <div id="login">
    <form @submit.prevent="register" class="form-group">
      <label for="txtName">Nome: </label>
      <input
        type="text"
        class="form-control"
        id="txtName"
        v-model="name"
      /><br />
      <label for="txtEmail">Email: </label>
      <input
        type="email"
        class="form-control"
        id="txtMail"
        v-model="email"
      /><br />
      <label for="txtPassword">Password: </label>
      <input
        type="password"
        class="form-control"
        id="txtPassword"
        v-model="password"
      /><br />
      <label for="txtPassword">Password: </label>
      <input
        type="password"
        class="form-control"
        id="txtPassword"
        v-model="password"
      /><br />
      <label for="sltCourse">Curso: </label>
      <select class="form-control" id="sltCourse" v-model="course">
        <option disabled>---</option>
        <option value="">Design</option>
        <option value="">Fotografia</option>
        <option value="">Multimédia</option>
        <option value="">Tecnologia da Comunicação Audiovisual</option>
        <option value="">Tecnologias e Sistemas de informação para Web</option>
      </select>
      <br />
      <input
        type="date"
        id="txtDate"
        class="form-control"
        v-model="birthDate"
      /><br />
      <input type="submit" class="btn btn-primary" value="REGISTAR" />
    </form>
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
      course: "",
      birthDate: "",
    };
  },
  methods: {
    register() {
      try {
        //chamar a ação login que está na store
        //this.$store.dispacth("login",{username: this.username, password: this.password});
        this.$store.dispacth("login", this.$data);
        //saltar para a view home
        this.$store.push({ name: "Home" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style></style>
