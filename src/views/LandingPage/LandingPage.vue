<template>
  <div class="content">
    <PodiumHall />
  </div>
</template>

<script>
import PodiumHall from '@/components/PodiumHall/PodiumHall.vue';

export default {
  components: {
    PodiumHall,
  },
};
</script>

<style scoped>
.content {
  max-width: 64rem;
  width: 100%;
  background-color: red;
}
</style>
