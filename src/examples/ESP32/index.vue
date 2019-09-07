<template>
  <div class="hello">
    <label>BaseURL: </label>
    <input type="text"
           v-model="baseURL"
           placeholder="Insert a TD URL">
    <h3>Thing Description</h3>
    <VueJsonPretty
      :data="td">
    </VueJsonPretty>
    <DefaultAggregator :td="td" :customComponent="customComponents"/>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import DefaultAggregator from '@/components/ComponentAggregator';
import Switch from '../customComponents/Switch';
import RangeSlider from '../customComponents/RangeSlider.vue';
import NumberStepper from '../customComponents/NumberStepper.vue';
import json from './MockESP32TD.json';

export default {
  name: 'ESP32Example',
  components: { VueJsonPretty, DefaultAggregator },
  data: () => ({
    baseURL: 'http://led.local/things/led/',
    td: json,
    mockup: true,
    customizationEnabled: false,
  }),
  props: {
    msg: String,
  },
  methods: {
    customComponents(defaultComponent, property) {
      if (this.customizationEnabled) {
        if (property['@type'] === 'LimitTimeProperty') {
          return NumberStepper;
        }
        if (property['@type'] === 'BrightnessProperty') {
          return RangeSlider;
        }
        if (property['@type'] === 'ColorProperty') {
          return CustomColorProperty;
        }
        if (defaultComponent.type === 'boolean' && defaultComponent.element === 'property') {
          return Switch;
        }
      }
      return null;
    },
  },
  mounted() {
    if (!this.mockup) {
      fetch(this.baseURL)
        .then(res => res.json())
        .then((json) => { this.td = json; });
    }
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
