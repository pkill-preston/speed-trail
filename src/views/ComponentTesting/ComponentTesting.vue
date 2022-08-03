<template>
  <div class="content">
    <DriverStanding />
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
  justify-content: center;
  align-items: center;
  background: #313131;
}
</style>
