<template>
  <div class="container">
    <PodiumStanding v-for="index in 3" :class="`${index}`" :key="index">
      here is {{ $.index }}
    </PodiumStanding>
  </div>
</template>

<script>
import PodiumStanding from '../PodiumStanding/PodiumStanding.vue';

export default {
  components: { PodiumStanding },
};
</script>

<style scoped>
@font-face {
  font-family: Formula;
  src: url('../../assets/fonts/Formula1-Regular_web_0.ttf');
}

* {
  font-family: "Formula";
}

.container {
  max-width: 64rem;
  width: 100%;
  background-color: #D9D9D9;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-height: 40rem;
  height: 100%;
  padding: 1rem 0;
}

.major {
  max-width: 30rem;
  display: flex;
  width: 100%;
  height: 100%;
}

.minor {
  max-width: 25rem;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}

.card {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 15px;
  padding: 1rem;
  padding-bottom: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgb(0 0 0 / 45%);
  border-bottom: 0;
}

.small.card {
  max-width: 23rem;
}

.text {
  text-align: center;
}

.status {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.driver {
  display: flex;
  height: 100%;
  align-items: flex-end;
}

.frame.major {
  max-width: 15rem;
}

.frame.minor {
  max-height: 11rem;
}

.text {
  margin: 0;
  padding: 0;
  color: #ffff;
}

.small.container {
  padding: 0;
}

.constructor {
  max-height: 1rem;
}

.position.big {
  font-size: 4em;
}

.position.small {
  font-size: 2.em;
}

.points.big {
  font-size: 3em;
}
</style>
