<template>
  <div class="container">
    <div class="card">
      <div class="main image">
        <img :src='`${mainImagePath}`' class="frame" alt="">
      </div>
      <div class="status">
        <h1 class="position text">{{ positions }}</h1>
        <h1 class="points text">{{ points }} pts</h1>
        <img :src="`${secondaryImagePath}`" alt="" class="constructor">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    points: Number,
    mainImagePath: String,
    positions: Number,
    secondaryImagePath: String,
  },
};
</script>

<style scoped>
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

.card {
  display: flex;
  justify-content: space-evenly;
  max-width: 34rem;
  width: 100%;
  border-radius: 15px;
  padding-bottom: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgb(0 0 0 / 45%);
  border-bottom: 0;
}

.main image {
  display: flex;
  align-items: center;
}

.constructor {
  max-width: 6rem;
}

.status {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}
</style>
