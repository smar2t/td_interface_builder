export default {
  data: () => ({
    submitting: false,
  }),
  props: ['actuatorProp'],
  computed: {
    actuator() {
      return this.$props.actuatorProp;
    },
    label() {
      return this.property.title;
    },
    links() {
      return this.property.links;
    },
  },
};
