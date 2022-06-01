<template>
  <div>
    <DriverCard :name="Alonso" />
  </div>
</template>

<script>
import DriverCard from "@/components/DriverCard/DriverCard.vue";
export default {
  components: {
    DriverCard,
  },
};
</script>

<style scoped>
</style>