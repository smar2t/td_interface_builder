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
import NumberInput from './NumberInput.vue';
import SelectInput from './SelectInput.vue';
import TextInput from './TextInput.vue';
import ActionMixin from '@/mixins/default/actionMixin';

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
      this.$emit('input', this.action, this.formData);
    },
  },
};
</script>
