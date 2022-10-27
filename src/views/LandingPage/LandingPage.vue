<template>
    <HomeGreeter class="item first"/>
    <PodiumHall  class="item second"/>
    <ConstructorHall class="item third"/>
</template>

<script>
import PodiumHall from '@/components/PodiumHall/PodiumHall.vue';
import ConstructorHall from '@/components/ConstructorHall/ConstructorHall.vue';
import HomeGreeter from '@/components/HomeGreeter/HomeGreeter.vue';

export default {
  components: {
    HomeGreeter,
    ConstructorHall,
    PodiumHall,
  },
};
</script>

<style scoped>
.item.first{
  margin-top: 4rem;
}

.item{
  margin-bottom: 3rem;
}
</style>
