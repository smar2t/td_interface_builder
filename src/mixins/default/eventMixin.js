import axios from 'axios';
import resourceMixin from './resourceMixin';

export default {
  mixins: [resourceMixin],
  data: () => ({
    shownValue: false,
  }),
  props: ['eventProp'],
  computed: {
    event() {
      return this.$props.event;
    },
    actuator() {
      return this.$props.actuator;
    },
    description() {
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
    if (this.links) {
      Object.values(this.links).forEach((link) => {
        if (link) {
          axios
            .get(link)
            .then((response) => {
              this.shownValue = response;
            });
        }
      });
    }
  },
};
