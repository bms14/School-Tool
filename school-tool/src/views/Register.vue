<template>
  <div id="login">
    <form @submit.prevent="register">
      Username: <input type="text" id="txtUsername" v-model="username" /><br />
      Password : <input type="password" id="txtPassword" v-model="password" />
      Location:
      <input type="submit" value="REGISTER" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      location: ""
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
    }
  }
};
</script>

<style></style>
