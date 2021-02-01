<template>
  <div class="details">
    <div class="icon"></div>
    <div class="language">
      Dutch
    </div>
    <div class="level">
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="no-point"></div>
    </div>
  </div>
</template>

<script></script>

<style>
.details {
  position: relative;
  left: 158px;
  top: 132px;
  display: flex;
  width: 400px;

  margin: 20px;
}

.icon {
  background: url(../icons/dutch.png) center;
  background-repeat: no-repeat;
  background-size: 50px;

  height: 50px;
  width: 50px;
}

.language {
  width: 70px;
  font-size: larger;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 50px;

  color: #a4dcea;
}

.level {
  display: flex;
}

.point {
  width: 30px;
  height: 30px;
  margin: 10px;

  background: #a4dcea;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50px;
}

.no-point {
  width: 30px;
  height: 30px;
  margin: 10px;

  background: rgb(164, 220, 234, 0);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50px;
}
</style>
