import axios from 'axios';
import resourceMixin from './resourceMixin';

export default {
  mixins: [resourceMixin],
  data: () => ({
    shownValue: null,
  }),
  props: ['propertyProp'],
  computed: {
    property() {
      return this.$props.propertyProp;
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
    if (this.links){
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
