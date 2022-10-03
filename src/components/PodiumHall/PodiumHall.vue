<template>
  <div class="holder">
    <MainStanding v-for="(item, index) in getDriverPodium" :key="index" :position="item.position"
      :points="`${item.points}`" :id="`card-${item.position}`" />
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
    console.log(this.$store.state);
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
