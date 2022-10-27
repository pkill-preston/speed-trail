<template>
  <div class="holder">
    <TopHeader title="Drivers championship"/>
    <div class="drivers wrapper">
      <MainStanding v-for="(item,index) in this.$store.state.driverStandings.slice(0,3)"
      :firstName="item.name.split(' ')[0]" :secondName="item.name.split(' ')[1]"
      :mainImagePath="item.picture" :class="item.size" :points="item.points"
      :standing="item.position + this.$store.state.complement[index] "  :number="item.number"
      :team="item.team" :color="item.color" :key="index"/>
    </div>
  </div>
</template>

<script>
import MainStanding from '@/components/MainStanding/MainStanding.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import TopHeader from '@/components/TopHeader/TopHeader.vue';

export default {
  components: {
    TopHeader,
    MainStanding,
  },
  methods: {
    ...mapMutations(['setPodiumPositions', 'setDriverStandings']),
    ...mapActions(['getDriverStandings', 'getConstructorStandings']),
  },
  created() {
    console.log(this.$store.state.driverStandings);
    this.getDriverStandings();
  },
  computed: {
    ...mapGetters(['getDriverPodium']),
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Formula";
}

.holder{
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 5px solid white;
  border-radius: 15px;
  overflow: hidden;
}
.drivers.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: white;
}
@media screen and (max-width: 1023px){
  .drivers.wrapper{
    justify-content: space-around;
  }
}
</style>
