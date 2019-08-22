<template>
  <div>
    <label>{{label}}</label>
    <input type="text"
           :name="label"
           :value="shownValue"
           @input="$emit('input',$event.target.value, property)"
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
