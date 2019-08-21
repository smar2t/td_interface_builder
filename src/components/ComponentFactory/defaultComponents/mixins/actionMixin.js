import resourceMixin from './resourceMixin';

export default {
  mixins: [resourceMixin],
  data: () => ({
    submitting: false,
    inputValues: {},
  }),
  props: ['action', 'customTextInput', 'customNumberInput', 'customSelectInput'],
  computed: {
    action() {
      return this.$props.action;
    },
    actuator() {
      return this.$props.actuator;
    },
    description() {
      return this.action.description;
    },
    inputs() {
      return this.action.inputs;
    },
  },
  methods: {
    submit() {
      this.submitting = true;
      this.actuator.setValue(this.inputValues).then((result) => {
        console.log(result);
        this.submitting = false;
      });
    },
  },
};
