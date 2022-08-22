<template>
  <NavigationBar />
  <div class="feed">
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar/NavigationBar.vue';

export default {
  name: 'App',
  components: {
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
  background: #313131;
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
  display: flex;
  justify-content: center
}
</style>
