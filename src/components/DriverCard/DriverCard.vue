<template>
<div class="frame card">
  <div className="frame image">
      <h1 className="text short">LEC16</h1>
      <img className="driver" alt="" />
      <h1 className="text standing">1</h1>
    </div>
    <div className="frame content">
      <div className="frame id">
        <h1 className="text name">{{ short }}</h1>
        <img className="flag" src="https://hotemoji.com/images/emoji/q/iyemnexgoqfq.png" alt="" />
      </div>
      <div className="information">
        <h1 className="text info"></h1>
        <h1 className="text info"></h1>
        <h1 className="text info"></h1>
        <h1 className="text info"></h1>
      </div>
    </div>
</div>
</template>

<script>
  export default {
    props:{
      short: String,
      driverImage: String,
      position: Number,
      name: String,
      points: Number,
      podiums: Number,
      Poles: Number,
      Wins: Number,
    }
  }
</script>

<style scoped>
.frame.card{
    font-family: 'Formula';
    border: 1px solid black;
  display: flex;
  max-width: 400px;
  flex-direction: column;
  border-radius: 15px;
  box-sizing: border-box;
  overflow: hidden;
  margin: 20px 20px;
}
 .text {
  font-family: 'Formula', sans-serif;
}

.frame.image {
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #ffff;
  max-width: 390px;
}

.text.short {
  width: 11rem;
  font-family: 'Formula';
  padding: 0;
  margin: 0;
  font-size: 50px;
  position: absolute;
  top: 80px;
  left: -40px;
  text-align: right;
  transform: rotate(-90deg);
}

.text.standing {
  padding: 0;
  margin: 0;
  font-size: 100px;
  position: absolute;
  right: 20px;
  line-height: 128px;
}

.frame.id {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.frame.content {
  color: #ffff;
  height: auto;
  background-color: #313131;
  max-width: 390px;
  padding-top: 20px;
}

.driver {
  width: 350px;
  text-align: center;
}

.flag {
  width: 50px;
  height: auto;
}

.text.name {
  margin: 0;
}

.information {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 20px 0;
}

.text.info {
  width: 50%;
  font-size: 20px;
  margin: 20px 0 0 0;
  text-align: center;
}
</style>