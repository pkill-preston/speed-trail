<template>
  <div class="container">
    <div class="card">
      <div class="wrapper word">
        <h1 class="text team">{{ team }}</h1>
      </div>
      <div :style="{backgroundColor: color}" class="shape"></div>
      <img class="image driver" :src="mainImagePath" alt="Driver">
      <h1 class="text first name">{{ firstName }}</h1>
      <h1 v-if="secondName != firstName" class="text second name"><em>{{ secondName }}</em></h1>
      <h1 class="text number">{{ number }}</h1>
      <h1 class="text standing">{{ standing }}</h1>
      <h1 class="text points">{{ points }} pts</h1>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    firstName: String,
    secondName: String,
    color: String,
    points: Number,
    mainImagePath: String,
    standing: Number,
    team: String,
    number: String,
    complement: String,
  },
};
</script>

<style scoped>
.container{
  background: #313131;
  max-width: 20rem;
  max-height: 28rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  border-radius: 15px;
  border: 3px solid #313131;
}

.card{
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 28rem;
}

.shape{
  height: 60%;
  width: 90%;
  clip-path: polygon(92% 0, 0 0, 0 100%);
  top: 0;
  z-index: 1;
  position: absolute;
}

.image.driver{
  bottom: 0;
  width: 100%;
  height: 90%;
  object-fit: cover;
  z-index: 3;
}

.text{
  position: absolute;
  color: white;
}

.name{
  margin-left: 1rem;
  z-index: 5;
}

.text.name{
  bottom: 50px;
}

.first.name{
  margin-left: calc(1rem + 5px);
  bottom: 85px;
}

.number{
  right: 0;
  font-size: 3.4rem;
  margin-right: 1rem;
  opacity: 40%;
  bottom: calc(50% - 50px);
  transform: rotate(-90deg);
}

.standing{
  bottom: 0;
  left: 1rem;
  font-size: 3.1rem;
  margin: 0;
  z-index: 5;
}

.points{
  font-size: 2.3rem;
  right: 0;
  bottom: 0;
  margin: 0 1rem 4px 0;
  z-index: 4;
}

.wrapper{
  width: 80%;
  height: 50%;
  position: absolute;
  transform: rotate(-90deg);
  top: 3rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  opacity: 40%;
}

.wrapper.word{
  z-index: 3;
}

.team{
  z-index: 3;
  font-size: 2.7rem;
  word-break: break-word;
  padding: 0;
  margin: 0;
}
@media screen and (max-width: 768px) {
  .container{
    overflow: hidden;
    border-radius: 15px;
    border: 5px solid #313131;
    margin-bottom: 2rem;
  }
}
</style>
