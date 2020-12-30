<template>
  <div id="profile">
      <div id="name">
          Nome: <br>
          <p>{{getUser.name}}</p>
      </div>
      <div id="birthDate">
          Data de nascimento: <br>
          <p>{{getUser.birthDate}}</p>
      </div>
      <div id="email">
          Email: <br>
          <p>{{getUser.email}}</p>
      </div>
      <div id="course">
          Curso: <br>
          <p>{{getUser.course}}</p>
      </div>
      <div id="foto">
          <img width="200px" height="150px" :src="getUser.photo" /><br>
          <input
            type="file"
            class="form-control-file"
            id="profileImage"
            name="img"
            accept="image/*"
          /> <br>
          <button type="submit" class="btn btn-primary">
          Editar
        </button>
      </div>
  </div>
</template>

<script>
export default {
     name: 'Profile',
    computed: {
        getUser(){
            return this.$store.getters.getLoggedUser
        }
    }
};
</script>

<style></style>
