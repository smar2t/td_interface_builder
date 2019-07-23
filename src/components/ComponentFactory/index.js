import NumberInput from './defaultComponents/NumberInput.vue';
import SelectInput from './defaultComponents/SelectInput.vue';
import TextInput from './defaultComponents/TextInput.vue';

export default {
  generatePropertyComponents(data) {
    const propertyComponents = {};

    for (propertyKey in data.properties) {
      const property = data.properties[propertyKey];
      let input = TextInput;
      if (property.enum) {
        input = SelectInput;
      }
      if (property.type === 'number' || property.type === 'integer') {
        input = NumberInput;
      }

      propertyComponents[propertyKey]({ input, property });
    }

    return propertyComponents;
  },

  generateActionComponents(data) {
    const actionComponents = {};

    for (actionKey in data.actions) {
      const action = data.actions[actionKey];
      const input = ActionInput;

      actionComponents[propertyKey]({ input, action });
    }

    return actionComponents;
  },

  generateEventComponents(data) {
    const eventComponents = {};

    for (eventKey in data.events) {
      const event = data.events[eventKey];
      const input = EventInput;

      actionComponents[propertyKey]({ input, action });
    }

    return actionComponents;
  },
};
