<template>
  <div>
    <label>{{label}}</label>
    <select :multiple="multi"
            :value="value"
            @input="$emit('input',
           $event.target.value)">
      <option v-for="option in options"
              :key="option">
        {{option}}
      </option>
    </select>
  </div>
</template>
<script>
import propertyMixin from './mixins/propertyMixin';

export default {
  mixins: [propertyMixin],
  name: 'SelectInput',
  computed: {
    options(){
      return this.property.options
    }
  }
};
</script>
