<template>
  <div id="login">
    <form>
      Username: <input type="text" id="txtUsername" v-model="username" /><br />
      Password : <input type="password" id="txtPassword" v-model="password" />
      <input type="submit" value="LOGIN" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
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
