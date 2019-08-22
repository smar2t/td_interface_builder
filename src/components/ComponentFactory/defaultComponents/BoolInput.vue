<template>
  <div>
    <label>{{label}}</label>
    <input type="checkbox"
           :name="name"
           :value="shownValue"
           @input="submit"
           :placeholder="placeholder">

  </div>
</template>
<script>
import propertyMixin from './mixins/propertyMixin';

export default {
  name: 'TextInput',
  mixins: [propertyMixin]
};
</script>
