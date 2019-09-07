<template>
  <div>
    <h3>{{label}}: {{shownValue || 0}}s</h3>
    <span>
    <button class="redBG" v-on:click="shownValue = (shownValue || 0) - 1; submit()">-</button>
    <button class="greenBG" v-on:click="shownValue = (shownValue || 0) + 1; submit()">+</button>
    </span>

  </div>
</template>
<script>
import propertyMixin from '@/mixins/default/propertyMixin';

export default {
  name: 'NumberStepper',
  mixins: [propertyMixin],
};
</script>

<style scoped>

button{
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 8px;
  font-weight: bold;
}

.redBG{
  background-color: crimson;
  color: white;
  font-size: 1em;
}

.greenBG{
  background-color: #42b983;
  color: white;
  font-size: 1em;
}

div{
  width: 150px;
  position: relative;
  float: left;
  text-align: center;
}

span{
  display: inline-block;
  position: relative;
  margin: 0 auto;
}

h3{
  margin: 0px;
  text-align: center;
}

h5{
  margin: 0px;
  text-align: center;
}

input {
  visibility: hidden;
  height: 0px;
  margin: 0;
}
</style>
