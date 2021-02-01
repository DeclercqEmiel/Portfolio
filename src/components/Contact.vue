<template>
  <div class="contact_wrap">
    <h1 class="placeholder_title">Contact</h1>
    <div class="contact">
      <h1>Contact</h1>
      <div>Country: {{ cvDataList.contact.country }}</div>
      <div>City: {{ cvDataList.contact.city }}</div>
      <div>Telephone: {{ cvDataList.contact.telephone }}</div>
      <div>Email: {{ cvDataList.contact.email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
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
.intern {
  -webkit-animation: in 1s;
}

.intern:hover {
  -webkit-animation: out 1s;
}

@-webkit-keyframes in {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes out {
  0% {
    -webkit-transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}

.test {
  font-size: 2em;
  color: red;
  animation: testout 1s;
}

.test:hover {
  color: blue;
  animation: testin 1s forwards;
}

.contact {
  padding: 0px;
  background-color: white;
  /* opacity: 0.8; */
  border: #a4dcea 7px solid;
  border-radius: 20px;
  padding: 10px;
  color: #005266;
  margin: 30px;
  transform: perspective(1000px) rotateX(90deg) translateY(-50px);
  -webkit-animation: fallin 0.75s;
}

.placeholder_title {
  color: #005266;
  transform: perspective(1000px) rotateX(30deg) translateY(30px) rotate(10deg)
    skew(-60deg);
  margin: 0px;
  font-weight: 800;
}

.contact_wrap {
  width: 25%;
  height: 300px;
  background: url("../stack_cards.jpg");
  background-size: 530px 300px;
}

.contact_wrap:hover .contact {
  border: #005266 7px solid;
  -webkit-animation: fallout 1s;

  animation: fallout 0.75s forwards;
}

@keyframes fallout {
  0% {
    -webkit-transform: perspective(1000px) rotateX(90deg) rotateY(30deg)
      rotate(50deg) translateY(-100px) scale(0.8);
  }
  50% {
    -webkit-transform: perspective(1000px) rotateX(0deg) translateY(50px)
      scale(0.8);
  }
  100% {
    -webkit-transform: perspective(1000px) rotateX(0deg) translateY(-50px)
      scale(1.1);
  }
}

@keyframes fallin {
  0% {
    -webkit-transform: perspective(1000px) rotateX(0deg) translateY(-50px)
      scale(1.1);
  }
  50% {
    -webkit-transform: perspective(1000px) rotateX(0deg) translateY(50px)
      scale(0.8);
  }
  100% {
    /* -webkit-transform: rotateX(90deg) rotateY(30deg) rotate(50deg)
      translateY(-100px) scale(0.8); */
    -webkit-transform: perspective(1000px) rotateX(85deg) rotateY(10deg)
      translateY(-100px) scale(0.8);
  }
}

.contact h1 {
  margin-top: 0px;
}
</style>
