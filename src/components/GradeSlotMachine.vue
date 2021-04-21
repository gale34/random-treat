<template>
  <div>
    <slot-machine
      :list="restaurantGradeLabels"
      :trigger="restaurantGradeTrigger"
      :height="300"
      :width="300"
      :currentIndex="restaurantGradeResult"
      @onComplete="onGradeComplete"
    ></slot-machine>
  </div>
</template>

<script>
import { SlotMachine } from "@puckwang/vue-slot-machine";
import pTable from "../constant/ProbabilityTable";

export default {
  name: "SlotMachine",
  components: { "slot-machine": SlotMachine },
  props: ['salaryGrade', 'eventBus'],
  data() {
    return {
      restaurantGradelist: [],
      restaurantGradeLabels: [],
      restaurantGradeTrigger: null,
      restaurantGradeResult: -1,
    };
  },
  created() {
    this.restaurantGradelist = this.salaryGrade.restaurantGrades;
    this.restaurantGradeLabels = this.restaurantGradelist.map((r) => {
      const temp = {};
      temp.text = r.name;
      temp.color = "#000000";
      return temp;
    });
  },
  mounted() {
      this.eventBus.$on('pickGrade', () => {
          this.start();
      })
  },
  methods: {
    start() {
      this.restaurantGradeResult = pTable.gradePick(this.restaurantGradelist);
      this.restaurantGradeTrigger = new Date();
    },
    onGradeComplete() {
      this.$emit('get-grade', this.salaryGrade.restaurantGrades[this.restaurantGradeResult]) ;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
