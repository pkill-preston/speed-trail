<template>
  <div class="content">
    <DriverStanding />
    <div class="background">
      <div class="glassmorph">
        <h1 class="text">Clear</h1>
      </div>
    </div>
  </div>
</template>

<script>
import DriverStanding from '@/components/DriverStanding/DriverStanding.vue';

export default {
  components: {
    DriverStanding,
  },
};
</script>

<style  scoped>
.content {
  display: flex;
  flex-direction: column;
}

.background {
  width: 100vw;
  height: 50vh;
  background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100');
  background-position: center;
}

.glassmorph {
  display: flex;

  width: 400px;
  height: 400px;
  align-items: center;
  justify-content: center;
}
</style>
