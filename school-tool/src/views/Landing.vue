<template>
<<<<<<< HEAD
  <div class="home">
    <div class="bg">
      <HelloWorld msg="Welcome to School Tool " />
    </div>
    <!--  <img class="bg" alt="logo" src="../assets/bg.jpeg" /> -->
=======
  <div >
    <HelloWorld msg="Welcome to School Tool " />
>>>>>>> 25c93c274c293cfaa8d6ba03d03722c469b34442
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
<style >

.bg{ 
    min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
   /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0; 
}

    /* Center and scale the image nicely */
    position: fixed;
    top: 0;
    left: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
