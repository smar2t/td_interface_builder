import resourceMixin from './resourceMixin';

export const propertyMixin = {
  mixins: [resourceMixin],
  data: () => ({
    shownValue: null,
  }),
  props: ['property'],
  computed: {
    property() {
      return this.$props.property;
    },
    placeholder() {
      return this.property.description;
    },
    min() {
      return this.property.minimum;
    },
    max() {
      return this.property.maximum;
    },
    options() {
      return this.property.enum;
    },
    type() {
      return this.property.type;
    },
    editable() {
      return this.property.readOnly;
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
