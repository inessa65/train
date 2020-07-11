<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/log.png" /> -->
    <component :is="layout">
      <router-view/>
    </component>
    
  
  </div>
 
</template>

<script>
import EmptyLayout from './components/layouts/EmptyLayout'
import MainLayout from './components/layouts/MainLayout'
// import Login from "./views/Login.vue";

export default {
  name: "App",
  components: {
    // Login,
    EmptyLayout,
    MainLayout
  },
  computed:{
    layout(){
    
return (this.$route.meta.layout || 'empty') + '-layout'

    }
  }
};
</script>

<style>
#app{
  width: 100%;
}
</style>
