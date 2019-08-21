<template>
  <div>
    <label>{{label}}</label>
    <input type="number"
           :name="label"
           :value="shownValue"
           @input="$emit('input',
           $event.target.value)"
           :placeholder="placeholder">
  </div>
</template>
<script>
import propertyMixin from './mixins/propertyMixin';

export default {
  mixins: [propertyMixin]
};
</script>
