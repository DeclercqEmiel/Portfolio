<template>
  <div>
    <h1>Values</h1>
    <ul>
      <li v-for="item in cvDataList.values" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Values",
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
