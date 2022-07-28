<template>
  <div id="app">
    <nav class="navbar navbar-dark" style="background-color: #081d58">
      <img src="./assets/catalyst.png" class="aim-logo d-inline-block align-top" alt="Project Catalyst">
    </nav>

    <div id="header" class="card d-flex mx-auto">
      <div class="card-body">
        <h2 class="card-title text-left">Proposal Profiles Tool</h2>
        <h5 class="card-text text-left">This tool helps the community to find funded proposals.<br>By providing this information with a specific focus on core areas of strategy users can look for partnerships and mentorship opportunities.</h5>
      </div>    
    </div>

    <FundInfo />
    
    <div id="footer">
      <p style="fontWeight: bold"><br/> Made by Catalyst Community for the Catalyst Community</p>
      <img src="./assets/aim-logo.png" class="aim-logo justify-content-center" alt="Project Catalyst">
      <a class="nav-link" href="https://cardanoscan.io/pool/b61f05ec1e907ab9b069eaec6c664056c16f56cab59076109c66d2ae" target="_blank"><span style="fontWeight: bold">Stake with [AIM] pool </span></a>
      <nav class="nav justify-content-center">
        <a class="nav-link" href="https://github.com/Project-Catalyst/proposal-profiles" target="_blank"><i class="bi bi-github"></i></a>
        <a class="nav-link icon" href="https://twitter.com/AimCardano" target="_blank"><i class="bi bi-twitter"></i></a>
        <a class="nav-link icon" href="https://t.me/joinchat/Ivl50eWG7r0zODI1" target="_blank"><i class="bi bi-telegram"></i></a>
      </nav>
    </div>

  </div>
</template>

<script>
// import Users from "./components/UsersInfo.vue";
import FundInfo from "./components/FundInfo.vue";

export default {
  name: "app",
  components: {
    // Users,
    FundInfo,
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  padding-top: 1vh;
  padding-bottom: 2vh;
  border-width: 0;
}
#query-results {
  background-color: #c7cfe25b;
  padding: 2vh;
  width: 85vw;
}
#filters {
  padding-bottom: 2vh;
}
.card {
  margin: 10px;
  width: 80vw;
}
.aim-logo {
  width: 150px;
}
i {
  font-size: 2rem;
}
</style>
