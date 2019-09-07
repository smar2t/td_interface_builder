<template>
  <div>
    <label>{{label}}: </label>
    <input type="checkbox"
           :name="label + ': '"
           v-model="shownValue"
           @change="submit"
           :placeholder="placeholder">

  </div>
</template>
<script>
import propertyMixin from '@/mixins/default/propertyMixin';

export default {
  name: 'BoolInput',
  type: 'boolean',
  element: 'property',
  mixins: [propertyMixin],
};
</script>
