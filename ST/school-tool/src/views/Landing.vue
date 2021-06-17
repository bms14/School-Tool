<template>
  <div>
    <b-container class="triangle">
      <img src="../assets/logo_sembg.webp" class="landingImg" alt=""/>
      <h4>NO FINAL DO DIA, <br />OS EVENTOS TORNAM-SE EXTRAORDINÁRIOS.</h4>
      <p>
        Procuramos incentivar os estudantes a participar em atividades<br />
        de modo a complementar os estudos.
      </p>
      <b-button class="join"
        ><router-link style="color: #ffffff" to="/login"
          >Junta-te</router-link
        ></b-button
      >
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
.landingImg {
  width: 300px;
  position: absolute;
  top: 18rem;
  left: 1.5rem;
}
.triangle h4 {
  text-align: left;
  position: absolute;
  top: 22rem;
  left: 2rem;
}
.triangle p {
  text-align: left;
  position: absolute;
  top: 27rem;
  left: 2rem;
}
.triangle .join {
  text-align: left;
  position: absolute;
  top: 32rem;
  left: 2rem;
}
.triangle {
  width: 2000px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0rem;
  background: linear-gradient(
    to bottom left,
    transparent 0%,
    transparent 50%,
    rgba(254, 193, 7, 0.5) 50%,
    rgba(254, 193, 7, 0.5) 100%
  );
}
</style>
