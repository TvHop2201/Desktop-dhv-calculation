<template>
  <div id="app">
    <div v-if="wellcome">
      <WellcomeView />
    </div>
    <div v-if="!wellcome">
        <Sidebar/>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import WellcomeView from './components/WellcomeView.vue';
import Dashboard from './components/Dashboard.vue';
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    WellcomeView,
    Dashboard,
    VueSidebarMenuAkahon,
    Sidebar
},
  data(){
    return{
      wellcome : true,
      
    }
  },
  created(){
    setTimeout(() => {
      this.wellcome = false
    }, 5000);
  }
}
</script>

<style>
html,body{
    background-color: #334155;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>
