<template>
  <div class="hello">
    <p>baseURL: http://192.168.0.48/things/led/</p>
    <h3>Thing Description</h3>
    <VJsoneditor
      v-model="td">
    </VJsoneditor>
    <DefaultAggregator :td="td"/>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import DefaultAggregator from './ComponentAggregator/DefaultAggregator.vue';

import VJsoneditor from 'vue-jsoneditor';

export default {
  name: 'HelloWorld',
  components: { VJsoneditor, DefaultAggregator },
  data: () => ({
    td: { 
      actions: {},  
      properties: {
        test: {
          enum: false,
          type: "number",
          title: "Idade"
        },
        test2: {
          enum: true,
          title: "País",
          type: "text",
          options: ["Brazil", "Panama", "USA"]
        }
      },
      events: {}
    },
  }),
  props: {
    msg: String,
  },
  mounted() {
    // fetch('http://192.168.0.48/things/led/')
    //   .then(res => res.json())
    //   .then((json) => { this.td = json; });
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
