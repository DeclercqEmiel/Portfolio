<template>
  <div>
    <h1>Education</h1>
    <ul>
      <li v-for="item in cvDataList.education" :key="item">
        <div>{{ item.title }}</div>
        <div>School: {{ item.school }}</div>
        <div>{{ item.start_year }} - {{ item.end_year }}</div>
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Education",
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

<style></style>
