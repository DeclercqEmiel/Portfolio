<template>
  <div class="container">
    <div class="background">
      <div class="background_left_alt"></div>
      <div class="line_left_alt"></div>

      <div class="background_right_alt"></div>
      <div class="line_right_alt"></div>
    </div>
  </div>
</template>

<script></script>

<style>
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

.line_right_alt {
  position: absolute;
  width: 400px;
  height: 0px;
  left: 928px;
  top: 789px;

  border-top: 10px solid #a4dcea;
}

.line_left_alt {
  position: absolute;
  width: 400px;
  height: 0px;
  left: 183px;
  top: 75px;

  background: #c4c4c4;
  border-top: 10px solid #a4dcea;
}
</style>
