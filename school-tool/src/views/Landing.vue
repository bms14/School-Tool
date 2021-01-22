<template>
  <div >
    <b-container>
    <HelloWorld msg="Welcome to School Tool " />
    </b-container>
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
</style>
