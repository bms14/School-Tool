<template>
  <div id="editUser" class="center">
    <h2>Editar user: {{current_user.nome }}</h2>
    <div class="row justify-content-center">
      <div class="col-6">
        <form @submit.prevent="updateUser" class="form-group">
          <label for="txtId">ID DO USER: </label>
          <input
            type="text"
            id="txtId"
            class="form-control"
            v-model="user.idUtilizador"
            readonly
            disabled
          />

          <label for="txtName">Nome: </label>
          <input
            type="text"
            id="txtName"
            class="form-control"
            v-model="frm.nome"
            required
          />

          <label for="txtEmail">Email: </label>
          <input
            type="email"
            id="txtEmail"
            class="form-control"
            v-model="frm.email"
            required
          />

          <label for="sltCourse">Curso:</label>
          <select
            class="form-control"
            id="sltCourse"
            v-model="frm.idCurso"
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

          <label for="txtDate">Data de nascimento:</label>
          <input
            type="date"
            id="txtDate"
            class="form-control"
            v-model="frm.data_nasc"
            required
          />
          <br />
          <input type="submit" class="btn" value="ATUALIZAR USER" />
        </form>
      </div>
    </div>
    <br />
    <a role="button" class="btn btn-outline-dark" @click="goBack">Retroceder</a>
  </div>
</template>

<script>
import { UserService } from "@/services/user_service";

export default {
  name: "EditUserAdmin",
  data() {
    return {
      current_user: "",
      frm: {
        id: "",
        nome: "",
        email: "",
        idCurso: "",
        data_nasc: "",
      },
    };
  },
  created() {
  let users = this.getUsers; 
      this.user = users.find(user => user.id == this.$route.params.id); 
    /*   this.frm.name = this.user.name;
    this.frm.email = this.user.email;
    this.frm.course = this.user.course;
    this.frm.birthDate = this.user.birthDate; */
  },
  methods: {
    goBack() {
      this.$router.push({ name: "AdminListUser" });
    },
    updateUser() {
      this.$store.dispatch("updateUser", this.$data.frm);

      alert("User editado com sucesso!");
    },

    async getOneUser() {
      this.current_user = await UserService.fetchOneUserByID(this.user.idUtilizador);
      this.frm.id = this.user.idUtilizador
      this.frm.nome = this.current_user.nome
      this.frm.email = this.current_user.email
      this.frm.idCurso = this.current_user.idCurso
      this.frm.data_nasc = this.current_user.data_nasc
      console.log(this.frm.nome);
      console.log(this.frm.email);
    },
  },

  mounted() {
    this.getOneUser();
  },

  computed: {
    getUsers() {
      return this.$store.state.users;
    },
  },
};
</script>

<style>
#editUser {
  max-width: 500px;
  width: 100%;
  background: #fff;
  margin: 50px auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
  padding: 30px;
  border-radius: 25px;
}
#editUser h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fec107;
  text-transform: uppercase;
  text-align: center;
}
#editUser form {
  width: 100%;
}
#editUser form .form-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
#editUser form label {
  width: 200px;
  color: #757575;
  margin-right: 10px;
  font-size: 14px;
}
#editUser form input.btn {
  font-size: 15px;
  border-color: #fec107;
  border-width: 2px;
  cursor: pointer;
}
#editUser form input.btn:hover {
  font-size: 15px;
  background-color: #fec107;
  color: #ffff;
  border-width: 2px;
  cursor: pointer;
}
</style>
