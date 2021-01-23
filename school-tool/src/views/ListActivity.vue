<template>
<div id="content">
  <b-container id="historic">
    <b-card-group deck v-if="activities.length > 0">
    <ActivityCard
      v-for="(activity, i) in subActivity"
      :activity="activity"
      :key="i"
    ></ActivityCard>
  </b-card-group>
  <div v-else>
    <p>NÃO ESTÁ INSCRITO EM ATIVIDADES!</p>
  </div>
  </b-container>
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
      enrollments: this.$store.state.enrollments,
    };
  },
  created() {
    /* if (localStorage.getItem("activities")) {
      this.activities = JSON.parse(localStorage.getItem("activities"));
    } */
    let helper = this.$store.state.activities;
    for (let i = 0; i < helper.length; i++) {
      if (helper[i].full == false) {
        this.activities.push(helper[i]);
      }
    }
  },
  computed: {
    subActivity() {
      let arr = [];
      let enr = this.enrollments.filter(enrollment => enrollment.idUser === this.$store.getters.getLoggedUser.id)
      this.activities.filter(activity => {
        
        enr.forEach(enrollment => {
          if (enrollment.idActivity == activity.id) {
            arr.push(activity)
          }
        });
      });
      return arr;
      
      
    },
  },
};
</script>

<style>
#historic{
  padding-top: 80px;
 background-color: #dcdcdc;
  height: 100%;
}
</style>