<template>
  <div id="app">
    <Bronze/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Bronze from './components/Bronze.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Bronze
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
