<template>
  <div class="container">
    <div class="major">
      <div class="first big card">
        <div class="driver">
          <img src="../../assets/driver.png" class="frame major" alt="">
        </div>
        <div class="status">
          <h1 class="position text">1</h1>
          <h1 class="points text">125</h1>
          <img src="../../assets/logo.png" alt="" class="constructor">
        </div>
      </div>
    </div>
    <div class="minor">
      <div class="second small card">
        <div class="driver">
          <img src="../../assets/driver.png" class="frame minor" alt="">
        </div>
        <div class="status">
          <h1 class="position text">2</h1>
          <h1 class="points text">116</h1>
          <img src="../../assets/logo.png" alt="" class="constructor">
        </div>
      </div>
      <div class="third small card">
        <div class="driver">
          <img src="../../assets/driver.png" class="frame minor" alt="">
        </div>
        <div class="status">
          <h1 class="position text">3</h1>
          <h1 class="points text">110</h1>
          <img src="../../assets/logo.png" alt="" class="constructor">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
  justify-content: space-around;
  align-items: center;
  max-height: 40rem;
  height: 100%;
  padding: 3rem;
}

.major {
  max-width: 30rem;
  display: flex;
  width: 100%;
  height: 100%;
}

.minor {
  max-width: 24rem;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
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
}

.small.card {
  max-width: 25rem;
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

.small.second {
  margin-bottom: 2rem;
}
</style>
