<template>
  <div class="frame card">
    <div className="frame image">
      <h1 className="text short">{{ short + number }}</h1>
      <img className="driver" alt="" />
      <h1 className="text standing">{{ position }}</h1>
    </div>
    <div className="frame content">
      <div className="frame id">
        <h1 className="text name">{{ name }}</h1>
        <img className="flag" :src="flag" alt="" />
      </div>
      <div className="information">
        <h1 className="text info">1</h1>
        <h1 className="text info">1</h1>
        <h1 className="text info">1</h1>
        <h1 className="text info">1</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flag: String,
    short: String,
    driverImage: String,
    position: Number,
    name: String,
    number: String,
    points: Number,
    podiums: Number,
    Poles: Number,
    Wins: Number,
  },
};
</script>

<style scoped>
.card{
  background-color:blueviolet ;
}
</style>
