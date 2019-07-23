import resourceMixin from './resourceMixin';

export const propertyMixin = {
  mixins: [resourceMixin],
  data: () => ({
    shownValue: false,
  }),
  props: ['event', 'actuator'],
  computed: {
    event() {
      return this.$props.event;
    },
    actuator() {
      return this.$props.actuator;
    },
    placeholder() {
      return this.event.description;
    },
    computedValue: {
      get() {
        return this.value;
      },
      set(v) {
        if (!this.readOnly) {
          this.submitting = true;
          this.actuator.setValue(v).then((result) => {
            this.value = result;
            this.submitting = false;
          });
        }
      },
    },
  },
  methods: {
    submit() {
      this.computedValue = this.shownValue;
    },
  },
  async mounted() {
    const finishedSetup = false;
    for (const link in this.links) {
      if (finishedSetup) {
        break;
      }
      await axios
        .get(link)
        .then((response) => {
          this.shownValue = response;
        });
    }
  },
};
