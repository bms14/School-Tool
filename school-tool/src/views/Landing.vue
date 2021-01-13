<template>
  <div >
    <HelloWorld msg="Welcome to School Tool " />
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

<<<<<<< HEAD

    /* Center and scale the image nicely */
    position: fixed;
    top: 0;
    left: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
=======
</style>
>>>>>>> dcd828299afc44f811c10cc5aca21ddd71ed1d7c
