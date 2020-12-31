<template>
  <div id="profile">
    <h1>Perfil</h1>
    <div id="info" class="container">
      <div id="firstLine">
        <div id="name">
          <h5>Nome</h5>
          <p>{{ getUser.name }}</p>
        </div>
        <div id="birthDate">
          <h5>Data de nascimento</h5>
          <p>{{ getUser.birthDate }}</p>
        </div>
      </div>
      <div id="secondLine">
        <div id="email">
          <h5>Email</h5>
          <p>{{ getUser.email }}</p>
        </div>

        <div id="pass">
          <h5>Deseja alterar a password?</h5>
          <input
            type="password"
            placeholder="Insira a nova password"
            v-model="password"
          /><br/><br/>
          <button type="submit" class="btn btn-primary">Atualizar</button>
        </div>
      </div>
      <div id="thirdLine">
        <div id="course">
          <h5>Curso</h5>
          <p>{{ getUser.course }}</p>
        </div>
      </div>
      <div id="foto">
        <img
          width="150px"
          height="150px"
          :src="getUser.photo"
          class="rounded-circle"
        /><br />
      </div>
    </div>
    <div id="gamification" class="container">
      <img
        id="gamepad"
        width="35px"
        height="25px"
        src="../assets/console.png"
      />
      <h3 id="headerGamification">Gamificação</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      name: this.getUser.name,
      email: this.getUser.email,
      password: "",
      course: this.getUser.course,
      birthDate: this.getUser.birthDate,
      photo: this.getUser.photo,
      type: "student",
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style>
#info {
  border-radius: 25px;
  border: 1px solid #707070;
  width: 1300px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#firstLine,
#secondLine,
#thirdLine {
  justify-content: space-around;
}
#gamification {
  border-radius: 25px;
  border: 1px solid #707070;
  width: 1300px;
  height: 300px;
}
#gamepad {
  position: relative;
  top: 19px;
  left: -600px;
}
#headerGamification {
  position: relative;
  top: -10px;
  left: -493px;
}
</style>
