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
        <input type="submit" class="btn btn-primary" @click="registUser" value="REGISTAR" />
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
      photo: "",
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
    /* registUser(event) {
      event.preventDefault();
      let users = [];
      if (localStorage.getItem("users"))
        users = JSON.parse(localStorage.getItem("users"));

      if(this.$data.password == this.$data.password2){
        users.push({name: this.$data.name, email: this.$data.email, password: this.$data.password, course: this.$data.course, birthDate: this.$data.birthDate, photo: this.$data.photo ,type: this.$data.type})
      }
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registo efetuado com sucesso!");
      this.$router.push({ name: "Login" });
    } */
  }
};
</script>

<style></style>
