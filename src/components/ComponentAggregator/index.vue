<template>
  <div>
      <div id="properties">
        <component v-for="(aggregatedObject, key) in propertyComponents"
                  :key="key"
                  :propertyKey="key"
                  :is="$props.customComponent(aggregatedObject.defaultComponent, aggregatedObject.property) || aggregatedObject.defaultComponent"
                  :propertyProp="aggregatedObject.property"
                  :baseURL="baseURL"
                  @input="propertyInput"
                  @submit="propertySubmitted">
        </component>
      </div>
  </div>
</template>

<script>
import ComponentFactory from '../ComponentFactory';

export default {
  props: ['td', 'customComponent', 'baseURL'],

  data: () => ({
    propertyComponents: [],
    actionComponents: [],
    eventComponents: [],
  }),

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
    thingDescription: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal) {
          this.propertyComponents = ComponentFactory.generatePropertyComponents(newVal);
        }
      },
    },
  },

  methods: {
    propertyInput(property, value) {
      console.log(`${property.key}:${value}`);
      console.log(`property: ${JSON.stringify(property)}`);
    },
    propertySubmitted(property, value) {
      console.log(`${property.key}:${value}`);
    },
  },
};
</script>
