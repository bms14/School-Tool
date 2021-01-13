<template>
  <div class="home">
    <div class="bg">
      <HelloWorld msg="Welcome to School Tool " />
    </div>
    <!--  <img class="bg" alt="logo" src="../assets/bg.jpeg" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style>
  body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");

    /* Full height */
    min-height: 100%;
    height: auto;

    /* Center and scale the image nicely */
    position: fixed;
    top: 0;
    left: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
