<template>
  <div>
    <h3>{{label}}</h3>
    <h5>{{shownValue || 50}}</h5>
    <input type="range"
           :name="label + ': '"
           v-model="shownValue"
           :min="min"
           :max="max"
           @input="submit"
           :placeholder="placeholder">
      <span class="slider round"></span>
  </div>
</template>
<script>
import propertyMixin from '@/mixins/default/propertyMixin';

export default {
  name: 'BoolInput',
  mixins: [propertyMixin],
};
</script>

<style scoped>
div{
  width: 100px;
  position: relative;
  float: left;
}

h3{
  margin: 0px;
  text-align: center;
}

h5{
  margin: 0px;
  text-align: center;
}

input {
  position: relative;
  display: block;
  width: 60px;
  height: 34px;
  margin: -8px auto 0 auto;
}
</style>
