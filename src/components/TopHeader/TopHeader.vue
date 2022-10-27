<template>
  <div class="title wrapper">
    <h1 class="text title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.title.wrapper{
  background: #313131;
  display: flex;
  align-items: flex-start;
  border-bottom: 5px solid white;
}
.text.title{
  color: white;
  margin-left:1rem;
}
</style>
