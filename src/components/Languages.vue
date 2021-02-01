<!-- <div>
    <h1>Languages</h1>
    <ul>
      <li v-for="item in cvDataList.languages" :key="item">
        {{ item.language }}: {{ item.level }}
      </li>
    </ul>
  </div> -->
<template>
  <div class="container">
    <div class="background">
      <div class="background_left_alt">
        <div>
          <h1>Languages</h1>
          <div class="thin_line_top"></div>
          <Language_detail />
          <Language_detail />
          <Language_detail />
          <Language_detail />
        </div>
      </div>
      <div class="line_left_alt"></div>
      <div class="background_right_alt">
        <h1>Programming languages and frameworks</h1>
        <div class="thin_line_top"></div>
        <Language_detail />
        <Language_detail />
        <Language_detail />
        <Language_detail />
        <Language_detail />
      </div>
      <div class="line_right_alt"></div>
    </div>
  </div>
</template>

<script>
import Language_detail from "./Language_detail.vue";

export default {
  name: "languages",
  components: {
    Language_detail,
  },
};
</script>

<style>
h1 {
  /* Languages */
  top: 0px;

  margin-top: 40px;
  position: absolute;
  width: 100%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  text-align: center;

  color: #a4dcea;
}

.thin_line_top {
  /* Top languages */
  left: 147px;
  top: 100px;

  position: absolute;
  width: 400px;
  height: 0px;

  border-top: 3px solid #a4dcea;
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
