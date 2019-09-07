<template>
  <div>
    <h3>{{shownValue ? "On" : "Off"}}</h3>
    <label class="switch">

    <input type="checkbox"
           v-model="shownValue"
           @change="submit"
           :placeholder="placeholder">
      <span class="slider round"></span>
    </label>
  </div>
</template>
<script>
import propertyMixin from '@/mixins/default/propertyMixin';

export default {
  name: 'BoolInput',
  mixins: [propertyMixin],
};
</script>

<style scoped>

div{
  width: 100px;
  position: relative;
  display: block;
  float: left;
}

h3{
  margin: 0px;
  text-align: center;
}
.switch {
  position: relative;
  display: block;
  width: 60px;
  height: 34px;
  margin: 0 auto;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #42b983;
}

input:focus + .slider {
  box-shadow: 0 0 1px #42b983;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
