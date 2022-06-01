<template>
  <NavigationBar/>
  <router-view/>
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
body{
  margin:0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
