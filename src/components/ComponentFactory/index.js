import NumberInput from './defaultComponents/NumberInput.vue';
import BoolInput from './defaultComponents/BoolInput.vue';
import SelectInput from './defaultComponents/SelectInput.vue';
import TextInput from './defaultComponents/TextInput.vue';
import ActionInput from './defaultComponents/ActionInput.vue';
import EventInput from './defaultComponents/EventInput.vue';

export default {
  generatePropertyComponents(data) {
    const propertyComponents = {};

    if (data.properties) {
      Object.keys(data.properties).forEach((propertyKey) => {
        const property = data.properties[propertyKey];
        property.key = propertyKey;

        let defaultComponent = TextInput;

        if (property.type === 'number' || property.type === 'integer') {
          defaultComponent = NumberInput;
        }

        if (property.type === 'boolean') {
          defaultComponent = BoolInput;
        }

        if (property.enum) {
          defaultComponent = SelectInput;
        }
        propertyComponents[propertyKey] = { defaultComponent, property };
      });
    }

    return propertyComponents;
  },

  generateActionComponents(data) {
    const actionComponents = {};

    if (data.actions) {
      Object.values(data.actions).forEach((actionKey) => {
        const action = data.actions[actionKey];
        const input = ActionInput;
        actionComponents[actionKey]({ input, action });
      });
    }

    return actionComponents;
  },

  generateEventComponents(data) {
    const eventComponents = {};

    if (data.events) {
      Object.keys(data.events).forEach((eventKey) => {
        const event = data.actions[eventKey];
        const input = EventInput;
        eventComponents[eventKey]({ input, event });
      });
    }

    return eventComponents;
  },
};
