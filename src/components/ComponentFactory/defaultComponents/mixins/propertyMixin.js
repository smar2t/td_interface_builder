import axios from 'axios';
import resourceMixin from './resourceMixin';

export default {
  mixins: [resourceMixin],
  data: () => ({
    shownValue: null,
    editingValue: null
  }),
  props: ['propertyProp'],
  computed: {
    property() {
      return this.$props.propertyProp;
    },
    label(){
      return this.property.title;
    },
    multi(){
      return this.property.multiple
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
    }
  },
  methods: {
    submit(actuator) {
      if (!this.readOnly) {
        this.submitting = true;
        this.$emit('submitted', this.property, this.editingValue);
        actuator.setValue(this.editingValue).then((result) => {
          this.shownValue = result;
          this.submitting = false;
        });
      }
    },
    update() {
      if (this.links) {
        axios.
          Object.values(this.links).forEach((link) => {
            if (link) {
              axios
                .get(link)
                .then((response) => {
                  this.shownValue = response;
                  this.editingValue = response;
                });
            }
          });
      }
    },
    mounted() {
      update()
    }
  },
};
