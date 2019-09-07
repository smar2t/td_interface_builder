<template>
  <div>
    <label>{{label}}: </label>

    <input type="color"
           :name="label + ': '"
           :value="shownValue"
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
