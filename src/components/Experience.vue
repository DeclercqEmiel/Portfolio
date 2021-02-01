<template>
  <div>
    <h1>Experience</h1>
    <ul>
      <li v-for="item in cvDataList.experience" :key="item">
        <div>{{ item.title }}</div>
        <div>{{ item.company }}</div>
        <div>{{ item.start_year }} - {{ item.end_year }}</div>
        <div>{{ item.description }}</div>
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Experience",
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
