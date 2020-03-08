<template>
  <div id="app">
    <father/>
    *******************************************************************
    <br>
    <br>
    <br>
    --------------------------------------------------------------------
    <person-a/>
    --------------------------------------------------------------------
    <person-b/>
  </div>
</template>

<script>
import Father from './4.Vue组件间传值/Father'
import PersonA from './4.Vue组件间传值/PersonA'
import PersonB from './4.Vue组件间传值/PersonB'
export default {
  name: 'app',
  components: {
    Father,
    PersonA,
    PersonB
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
