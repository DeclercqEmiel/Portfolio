<template>
  <div class="container">
    <div class="background">
      <div class="background_left"></div>
      <div class="me"></div>
      <div class="line_left"></div>

      <div class="background_right">
        <div class="text_background">
          <h1 class="title">Emiel Declercq</h1>

          <p>
            Hey, welkom op mijn portfoliopagina aaaaaaaa aaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa
            Hey, welkom op mijn portfoliopagina aaaaaaaa aaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa
          </p>
        </div>
      </div>
      <div class="line_right"></div>
    </div>
  </div>
</template>

<script></script>

<style>
.title {
  color: black;
}

.intro {
  color: black;
}

.me {
  position: absolute;
  left: 183px;
  top: 132px;
  height: 500px;
  width: 500px;

  background: url(../me.jpg);
  background-size: 500px;

  border: 15px solid #000000;
  box-sizing: border-box;
  border-radius: 250px;
}

/* Rectangle 1 */

.text_background {
  position: absolute;
  width: 500px;
  height: 500px;
  left: 109px;
  top: 82px;

  background: rgba(164, 220, 234, 0.9);

  text-align: center;
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

.background_left {
  position: absolute;
  width: 717px;
  height: 664px;

  left: 75px;
  top: 50px;

  color: #a4dcea;
}

.background_right {
  /* Text background */

  position: absolute;
  width: 717px;
  height: 664px;
  left: 719px;
  top: 150px;

  color: #a4dcea;
}

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
