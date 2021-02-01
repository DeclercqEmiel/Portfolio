// App.vue

<template>
  <div id="app">
    <Introduction />
    <languages />
    <PageStyle1 />
    <PageStyle2 />
    <PageStyle1 />
  </div>
</template>

<script>
import Introduction from "./components/Introduction.vue";
import Languages from "./components/Languages.vue";
import PageStyle1 from "./components/PageStyle1.vue";
import PageStyle2 from "./components/PageStyle2.vue";

export default {
  name: "app",
  components: {
    PageStyle1,
    PageStyle2,
    Introduction,
    Languages,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Langar&family=Montserrat+Alternates:wght@400;600&family=Montserrat:ital@1&family=Sniglet&display=swap");

body {
  margin: 0px;
}

#app {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

#app .container {
  scroll-snap-align: start;
  padding-bottom: 500px;
}

#app .container:last-of-type {
  padding-bottom: 0px;
}

html {
  overflow: hidden;
}

.background_left {
  position: absolute;
  width: 717px;
  height: 664px;

  left: 75px;
  top: 50px;

  background: rgb(0, 158, 186, 0.7);
}

.background_right {
  /* Text background */

  position: absolute;
  width: 717px;
  height: 664px;
  left: 719px;
  top: 150px;

  background: rgb(0, 158, 186, 0.7);
}

.background_left_alt {
  position: absolute;
  width: 717px;
  height: 664px;
  left: 75px;
  top: 150px;

  background: rgb(0, 158, 186, 0.7);
}

.background_right_alt {
  position: absolute;
  width: 717px;
  height: 664px;
  left: 719px;
  top: 50px;

  background: rgb(0, 158, 186, 0.7);
}

.container {
  position: relative;

  scroll-snap-align: start;
  height: 95vh;
  width: 95vw;

  /* margin-top: calc(100vh / 2 - 864px / 2);

  margin-bottom: calc(100vh / 2 - 864px / 2); */
}

.background {
  /* Background */
  margin: auto;

  position: absolute;
  /* 
  width: 1536px;
  height: 864px; */
  top: 0px;
  background: #005266;

  margin-top: calc(100vh / 2 - 864px / 2);
  margin-bottom: calc(100vh / 2 - 864px / 2);
  margin-left: calc(100vw / 2 - 1536px / 2);
  margin-right: calc(100vw / 2 - 1536px / 2);
}
</style>
