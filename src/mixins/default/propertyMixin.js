import resourceMixin from './resourceMixin';
import actuator from '@/actuators/propertyActuator';

export default {
  mixins: [resourceMixin],
  data: () => ({
    shownValue: null,
    editingValue: null,
  }),
  props: ['propertyProp', 'propertyKey', 'actuatorProp'],
  computed: {
    property() {
      return this.$props.propertyProp;
    },
    label() {
      return this.property.title || this.$props.propertyKey;
    },
    multi() {
      return this.property.multiple;
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
  },
  mounted() {
    actuator.getUpdatedValue(this.property).then((result) => {
      console.log(result);
      this.shownValue = result.data[this.property.key];
    });
  },
  methods: {
    submit() {
      if (!this.readOnly) {
        this.submitting = true;
        this.$emit('submit', this.property, this.shownValue);
        actuator.setValue(this.property, this.shownValue).then((result) => {
          console.log(result);
          this.shownValue = result.data[this.property.key];
          this.submitting = false;
        });
      }
    },
  },
};
