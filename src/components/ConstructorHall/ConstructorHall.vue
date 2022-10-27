<template>
  <div class="holder">
    <TopHeader title="Constructors championship"/>
    <div class="constructors wrapper">
      <MainStanding v-for="(item,index) in this.$store.state.constructorStandings.slice(0,3)"
        :points="item.points" :team="item.powerUnit"
        :standing="item.position + this.$store.state.complement[index]"
        :firstName="item.scuderiaName.split(' ')[0]"
        :second-name="item.scuderiaName.substring(item.scuderiaName.indexOf(' ')+1)"
        :color="item.scuderiaColor"
        :mainImagePath='require(`@/assets/teams/${item.scuderiaLogo}`)'
        :key="index"/>
    </div>
  </div>
</template>

<script>
import MainStanding from '@/components/MainStanding/MainStanding.vue';
import { mapActions, mapMutations } from 'vuex';
import TopHeader from '@/components/TopHeader/TopHeader.vue';

export default {
  name: 'ConstructorHall.vue',
  components: {
    TopHeader,
    MainStanding,
  },
  methods: {
    ...mapMutations(['setConstructorStandings']),
    ...mapActions(['getConstructorStandings']),
  },
  created() {
    this.getConstructorStandings();
    console.log(this.$store.state.constructorStandings);
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
.constructors.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: white;
}
@media screen and (max-width: 1023px){
  .constructors.wrapper{
    justify-content: space-around;
  }
}
</style>
