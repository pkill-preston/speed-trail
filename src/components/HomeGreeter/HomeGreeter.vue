<template>
  <div class="holder">
    <img class="background" :src="require('@/assets/images/car.jpg')" alt="Greetter"/>
    <div class="message">
      <h1>This project focus on practicing some vue skills,
      and showing the current f1 drivers and constructors championship.</h1>
      <h1>Aside of that some information about both. Some features are still in development</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGreeter',
};
</script>

<style scoped>

.holder{
  display: flex;
  max-width: 1024px;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
}

.background{
  max-width: 1024px;
  height: 100%;
  filter: blur(5px);
}

.message{
  text-decoration: #313131;
  position: absolute;
  max-width: 70ch;
  color: white;
  text-shadow: 0 0 3px black, 0 0 5px black
}

</style>
