<template>
  <div>
    등급
    <GradeSlotMachine :salaryGrade="salaryGrade" :eventBus="eventBus" @get-grade="startPickingRestaurant"/>
    점수
    <RestaurantSlotMachine :eventBus="eventBus"/>
    <div>
      <button @click="start">Start</button>
    </div>
  </div>
</template>

<script>
import GradeSlotMachine from "./GradeSlotMachine.vue";
import RestaurantSlotMachine from './RestaurantSlotMachine.vue';
import pTable from "../constant/ProbabilityTable";
import Vue from "vue";


export default {
  name: "SlotMachine",
  components: { GradeSlotMachine, RestaurantSlotMachine },
  props: {},
  data() {
    return {
      salaryGrade: pTable.bronze,
      eventBus: new Vue(),
    };
  },
  methods: {
    start() {
        this.eventBus.$emit('pickGrade');
    },
    startPickingRestaurant(grade) {
      console.log(grade);
      this.eventBus.$emit('pickRestaurant', grade);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
