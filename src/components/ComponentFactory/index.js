
import ActionMixin from './defaultComponents/mixins/actionMixin'
import PropertyMixin from './defaultComponents/mixins/propertyMixin'
import EventMixin from './defaultComponents/mixins/eventMixin'

import NumberInput from './defaultComponents/NumberInput.vue';
import SelectList from './defaultComponents/SelectList.vue';
import TextInput from './defaultComponents/TextInput.vue';

export default {
    generatePropertyComponents(data){
        var propertyComponents = {}
        
        for (propertyKey in data.properties){
            const property = data.properties[propertyKey]
            var component = TextInput
            if (property.enum){
                component = SelectList
            }
            if (property.type ===  'number' || property.type ===  'integer'){
                component = NumberInput
            }

            propertyComponents[propertyKey]( {component, property, mixin: PropertyMixin})
        }

        return propertyComponents
    },

    generateActionComponents(data){
        var actionComponents = {}
        
        for (actionKey in data.actions){
            const action = data.actions[actionKey]
            var component = ActionInput
            
            actionComponents[propertyKey]( {component, action})
        }

        return actionComponents
    }
};
