import NumberInput from './defaultComponents/NumberInput.vue';
import SelectInput from './defaultComponents/SelectInput.vue';
import TextInput from './defaultComponents/TextInput.vue';
import ActionInput from './defaultComponents/ActionInput.vue';
import EventInput from './defaultComponents/EventInput.vue';

export default {
  generatePropertyComponents(data) {
    let propertyComponents = {};

    Object.keys(data.properties).forEach((propertyKey) => {
      const property = data.properties[propertyKey];
      let input = TextInput;
      if (property.enum) {
        input = SelectInput;
      }
      if (property.type === 'number' || property.type === 'integer') {
        input = NumberInput;
      }
      console.log(property.type)
      propertyComponents[propertyKey] = { input, property };
    });

    return propertyComponents;
  },

  generateActionComponents(data) {
    const actionComponents = {};

    if (data.actions){
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

    Object.keys(data.events).forEach((eventKey) => {
      const event = data.actions[eventKey];
      const input = EventInput;
      eventComponents[eventKey]({ input, event });
    });

    return eventComponents;
  },
};
