<template>
  <div id="app">
    <FundInfo />
  </div>
</template>

<script>
// import Users from "./components/UsersInfo.vue";
import FundInfo from "./components/FundInfo.vue"

export default {
  name: "app",
  components: {
    // Users,
    FundInfo
  },
};
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
