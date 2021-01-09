<template>
  <div id="editUser">
    <div>
      <h2>Editar user: {{ user.name }}</h2>
      <br />
      <div class="row justify-content-center">
        <div class="col-6">
          <form @submit.prevent="updateUser" class="form-group">
            <label for="txtId">ID DO USER: </label>
            <input
              type="text"
              id="txtId"
              class="form-group"
              v-model="user.id"
              readonly
              disabled
            />
            <br />
            <label for="txtName">NOME DO USER: </label>
            <input
              type="text"
              id="txtName"
              class="form-group"
              v-model="frm.name"
              required
            />
            <br />
            <label for="txtEmail">EMAIL DO USER: </label>
            <input
              type="email"
              id="txtEmail"
              class="form-group"
              v-model="frm.email"
              required
            />
            <br />
            <label for="sltCourse">Curso</label>
            <select
              class="form-control"
              id="sltCourse"
              v-model="frm.course"
              required
            >
              <option disabled value="">Curso</option>
              <option value="Design">Design</option>
              <option value="Fotografia">Fotografia</option>
              <option value="Multimédia">Multimédia</option>
              <option value="Tecnologia da Comunicação Audiovisual">
                Tecnologia da Comunicação Audiovisual
              </option>
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
              v-model="frm.birthDate"
              required
            /><br />
            <input
              type="submit"
              class="btn btn-primary"
              value="ATUALIZAR USER"
            />
          </form>
        </div>
      </div>
    </div>
    <br />
    <a role="button" class="btn btn-outline-dark" @click="goBack">Retroceder</a>
  </div>
</template>

<script>
export default {
  name: "EditUserAdmin",
  data() {
    return {
      user: null,
      frm: {
        name: "",
        email: "",
        course: "",
        birthDate: ""
      }
    };
  },
  created() {
    let users = this.getUsers;
    this.user = users.find(user => user.id == this.$route.params.id);
    this.frm.name = this.user.name;
    this.frm.email = this.user.email;
    this.frm.course = this.user.course;
    this.frm.birthDate = this.user.birthDate;
  },
  methods: {
    goBack() {
      this.$router.push({ name: "AdminListUser" });
    },
    updateUser() {
      this.$store.dispatch("updateUser", {
        id: this.user.id,
        name: this.frm.name,
        email: this.frm.email,
        course: this.frm.course,
        birthDate: this.frm.birthDate
      });

      alert("User editado com sucesso!");
    }
  },
  computed: {
    getUsers() {
      return this.$store.state.users;
    }
  }
};
</script>

<style></style>
