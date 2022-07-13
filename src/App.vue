<template>
  <div id="app">
    <div v-if="wellcome">
      <WellcomeView />
    </div>
    <div v-if="!wellcome">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import WellcomeView from "./components/WellcomeView.vue";
import Dashboard from "./components/Dashboard.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    WellcomeView,
    Dashboard,
    Sidebar,
  },
  data() {
    return {
      wellcome: true,
    };
  },
  created() {
    setTimeout(() => {
      this.wellcome = false;
    }, 3000);
  },
};
</script>

<style>
html,
body {
  background-color: #334155;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

body::-webkit-scrollbar {
  display: none;
}
</style>
