<template>
  <NavigationBar />
  <div class="feed">
    <router-view />
  </div>
  <PageFooter/>
</template>

<script>
import PageFooter from '@/components/PageFooter/PageFooter.vue';
import NavigationBar from './components/NavigationBar/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    PageFooter,
    NavigationBar,
  },
};
</script>

<style>
@font-face {
  font-family: Formula;
  src: url('./assets/fonts/Formula1-Regular_web_0.ttf');
}
body{
  margin:0;
  padding: 0;
  background: #6a6a6a;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
.feed {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
