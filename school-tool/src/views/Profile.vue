<template>
  <div id="profile">
    <h1>Perfil</h1>
    <div id="info" class="border border-dark">
      <div id="name">
        <h5>Nome</h5>
        <p>{{ getUser.name }}</p>
      </div>
      <div id="birthDate">
        <h5>Data de nascimento</h5>
        <p>{{ getUser.birthDate }}</p>
      </div>
      <div id="email">
        <h5>Email</h5>
        <p>{{ getUser.email }}</p>
      </div>
      <div id="course">
        <h5>Curso</h5>
        <p>{{ getUser.course }}</p>
      </div>
      <div id="foto">
        <img
          width="150px"
          height="150px"
          :src="getUser.photo"
          class="rounded-circle"
        /><br />
        <input
          type="file"
          class="form-control-file"
          id="profileImage"
          name="img"
          accept="image/*"
        />
        <br />
        <button type="submit" class="btn btn-primary">Editar</button>
      </div>
    </div>
    <br />
    <div id="gamification" class="border border-dark">
      <img width="35px" height="25px" src="../assets/console.png" />
      <h3>Gamificação</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    getUser() {
      return this.$store.getters.getLoggedUser;
    }
  }
};
</script>

<style></style>
