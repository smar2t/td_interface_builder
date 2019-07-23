<template>
  <div>
      <div>
        <component v-for="(component, name) in propertyComponents"
                  :key="name"
                  :is="component.input"
                  :property="component.property"
                  :actuator="PropertyActuator"
                  :baseURL="baseURL"
                  @input="propertyInput"
                  v-bind="input">
        </component>
      </div>

      <div>
        <component v-for="(action, name) in properties"
                  :key="name"
                  :is="componentForInput(action)"
                  :action="action"
                  :actuator="ActionActuator"
                  :baseURL="baseURL"
                  @input="actionInput"
                  v-bind="input">
        </component>
      </div>

      <div>
        <component v-for="(event, name) in properties"
                  :key="name"
                  :is="componentForInput(event)"
                  :event="event"
                  :actuator="EventActuator"
                  :baseURL="baseURL"
                  @input="eventInput"
                  v-bind="input">
        </component>
      </div>


  </div>
</template>

<script>
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import ActionMixin from './mixins/actionMixin';

export default {
  components: { NumberInput, SelectInput, TextInput },
  props: ['td'],
  data() {
    return {
      formData: this.value || {},
      baseURL: 'http://192.168.0.48',
    };
  },
  mounted() {

  },

  methods: {
    propertyInput(property) {

    },
    actionInput(action) {

    },
    eventInput(event) {

    },
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit('input', this.formData);
    },
  },
};
</script>
