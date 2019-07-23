<script>
import NumberInput from "./NumberInput";
import SelectList from "./SelectList";
import TextInput from "./TextInput";
import ActionMixin from "./mixins/actionMixin"

export default {
  components: { NumberInput, SelectList, TextInput },
  mixins: [ActionMixin],
  data() {
    return {
      formData: this.value || {}
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    }
  }
}
</script>
