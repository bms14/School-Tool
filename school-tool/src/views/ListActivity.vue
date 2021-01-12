<template>
  <div class="card-columns" v-if="activities.length > 0">
    <ActivityCard v-for="(activity, i) in activities" :activity="activity" :key="i"></ActivityCard>
  </div>
  <div v-else>
    <p>NÃO HÁ ATIVIDADES!</p>
  </div>
</template>

<script>
import ActivityCard from "../components/ActivityCard";

export default {
  name: "ListActivity",
  components: {
    ActivityCard,
  },
  data() {
    return {
      activities: [],
    };
  },
  created() {
    /* if (localStorage.getItem("activities")) {
      this.activities = JSON.parse(localStorage.getItem("activities"));
    } */
    let helper = this.$store.state.activities
    for (let i = 0; i < helper.length; i++) {
      if(helper[i].full == false){
        this.activities.push(helper[i])
      }
      
    }
  },
 
};
</script>

<style>
</style>