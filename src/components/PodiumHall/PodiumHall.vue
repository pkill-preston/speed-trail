<template>
  <div class="holder">
    <MainStanding v-for="(item, index) in getDriverPodium" :key="index" :positions="item.position"
      :points="`${item.points}`" :id="`card-${item.position}`" :mainImagePath="item.driver.image"
      :secondaryImagePath="item.team.logo" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import MainStanding from '../MainStanding/MainStanding.vue';

export default {
  methods: {
    ...mapMutations(['setPodiumPositions']),
    ...mapActions(['getDriverStandings']),
  },
  created() {
    this.getDriverStandings();
  },
  computed: {
    ...mapGetters(['getDriverPodium']),
  },
  components: { MainStanding },
};
</script>

<style scoped>
* {
  font-family: "Formula";
}

#card-2 > .card {
  background-color: red !important
}

.holder {
  display: flex;
  background: #ffff;
}
</style>
