<template>
  <div id="profile">
      <div id="name">
          Nome: <br>
          {{getUser.name}}
      </div>
      <div id="birthDate">
          Data de nascimento: <br>
          {{getUser.birthDate}}
      </div>
      <div id="email">
          Email: <br>
          {{getUser.email}}
      </div>
      <div id="course">
          Curso: <br>
          {{getUser.course}}
      </div>
      <div id="name">
          Nome: <br>
          {{getUser.name}}
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
