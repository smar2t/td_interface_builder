export const propertyMixin = {
  data: () => ({
    submitting: false,
  }),
  props: ['actuator'],
  computed: {
    actuator() {
      return this.$props.actuator;
    },
    label() {
      return this.property.title;
    },
    links() {
      return this.property.links;
    },
  },
};
