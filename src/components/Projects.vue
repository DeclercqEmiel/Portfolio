<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="item in cvDataList.projects" :key="item">
        <div>{{ item.title }}</div>
        <div>{{ item.link }}</div>
        <div>{{ item.year }}</div>
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      cvDataList: [],
    };
  },
  methods: {
    getCVData() {
      fetch("cv_data.json")
        .then((response) => response.json())
        .then((data) => (this.cvDataList = data));
    },
  },
  beforeMount() {
    this.getCVData();
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0px;
}
</style>
