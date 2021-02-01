<template>
  <div class="container">
    <div class="background">
      <div class="background_left"></div>
      <div class="line_left"></div>

      <div class="background_right"></div>
      <div class="line_right"></div>
    </div>
  </div>
</template>

<script></script>

<style>
.line_right {
  /* Top */

  position: absolute;
  width: 400px;
  height: 0px;
  left: 928px;
  top: 75px;

  border-top: 10px solid #a4dcea;
}

.line_left {
  /* Bottom */

  position: absolute;
  width: 400px;
  height: 0px;
  left: 183px;
  top: 789px;

  background: #c4c4c4;
  border-top: 10px solid #a4dcea;
}
</style>
