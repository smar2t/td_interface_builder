<template>
  <div>
      <p>{{baseURL}}</p>
      <div id="properties">
        <component v-for="(component, name) in propertyComponents"
                  :key="name"
                  :is="component.input"
                  :propertyProp="component.property"
                  :actuatorProp="PropertyActuator"
                  :baseURL="baseURL"
                  @input="propertyInput"
                  v-bind="component.input">
        </component>
      </div>

      <div>
        <component v-for="(action, name) in actionComponents"
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
        <component v-for="(event, name) in eventComponents"
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
import NumberInput from '../ComponentFactory/defaultComponents/NumberInput.vue';
import SelectInput from '../ComponentFactory/defaultComponents/SelectInput.vue';
import TextInput from '../ComponentFactory/defaultComponents/TextInput.vue';
import ComponentFactory from '../ComponentFactory/index.js';
import PropertyActuator from "./actuators/propertyActuator"

export default {
  data: () => ({
    formData: {},
    baseURL: 'http://192.168.0.48',
    propertyComponents: [],
    actionComponents: [],
    eventComponents: [],
  }),
  mounted() {
    this.propertyComponents = ComponentFactory.generatePropertyComponents(this.$props.td);
  },
  components: { NumberInput, SelectInput, TextInput, PropertyActuator },
  props: ['td'],
  computed: {
    thingDescription: {
      get() {
        return this.$props.td;
      },
      set(v) {
        this.$emit('tdChanged', v);
      },
    },
  },
  watch: {
    thingDescription(val) {
      this.propertyComponents = ComponentFactory.generatePropertyComponents(val);
    },
  },
  methods: {
    propertyInput(property) {
      console.log(property);
    },
    actionInput(action) {
      console.log(action);
    },
    eventInput(event) {
      console.log(event);
    },
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit('input', this.formData);
    },
  },
};
</script>
