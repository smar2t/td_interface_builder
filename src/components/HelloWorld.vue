<template>
  <div class="hello">
    <p>baseURL: http://192.168.0.48/things/led/</p>
    <h3>Thing Description</h3>
    <VueJsonPretty
      :path="'res'"
      :data="td">
    </VueJsonPretty>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';

export default {
  name: 'HelloWorld',
  components: { VueJsonPretty },
  data: () => ({
    td: null,
  }),
  props: {
    msg: String,
  },
  mounted() {
    fetch('http://192.168.0.48/things/led/')
      .then(res => res.json())
      .then(json => this.td = json);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
