<template>
  <div class="container">
    <div class="wrapper list">
      <ul>
        <li><h1>Heron Lorena</h1></li>
        <li><h1>Speed Trail</h1></li>
      </ul>
    </div>
    <div class="wrapper icons">
      <img class="image icon" :src="require('@/assets/images/icons/github.png')"
           alt="github account"/>
      <img class="image icon" :src="require('@/assets/images/icons/telephone.png')"
           alt="number for contact contact">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style scoped>
.container{
  color: white;
  display: flex;
  justify-content: space-around;
  max-height: 200px;
  max-width: 100vw;
  background: #313131;
}

.wrapper.icons{
  display: flex;
  max-width: 10rem;
  width: 100%;
  justify-content: space-around;
}

.wrapper.list{
  list-style: none;
  text-align: left;
}

li{
  list-style: none;
}

.icon{
  object-fit: contain;
  max-width: 3rem;
  height: auto;
}
</style>
