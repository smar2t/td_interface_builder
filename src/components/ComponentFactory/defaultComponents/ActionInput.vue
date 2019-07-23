<template>
  <div>
    <component v-for="(input, index) in inputs"
               :key="index"
               :is="componentForInput(input)"
               :value="formData[field.name]"
               @input="updateForm(field.name, $event)"
               v-bind="field">
    </component>
  </div>
</template>

<script>
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import ActionMixin from './mixins/actionMixin';

export default {
  components: { NumberInput, SelectInput, TextInput },
  mixins: [ActionMixin],
  data() {
    return {
      formData: this.value || {},
    };
  },
  methods: {
    componentForInput(input) {
      if (input.enum) {
        return this.$props.customSelectInput || SelectInput;
      }

      if (input.type === 'integer' || input.type === 'number') {
        return this.$props.customNumberInput || NumberInput;
      }

      return this.$props.customTextInput || TextInput;
    },
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit('input', this.formData);
    },
  },
};
</script>
