<template>
  <div>
    <label>{{label}}: </label>
    <input type="number"
           :name="label"
           :value="shownValue"
           @input="$emit('input',
           $event.target.value, property)"
           :placeholder="placeholder">
  </div>
</template>
<script>
import propertyMixin from '@/mixins/default/propertyMixin';

export default {
  mixins: [propertyMixin],
};
</script>
