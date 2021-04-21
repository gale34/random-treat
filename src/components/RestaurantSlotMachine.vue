<template>
  <div>
    <slot-machine
      :list="restaurantLabels"
      :trigger="restaurantTrigger"
      :height="300"
      :width="300"
      :currentIndex="restaurantResult"
    ></slot-machine>
  </div>
</template>

<script>
import { SlotMachine } from "@puckwang/vue-slot-machine";
import pTable from "../constant/ProbabilityTable";

export default {
  name: "SlotMachine",
  components: { "slot-machine": SlotMachine },
  props: ["eventBus"],
  data() {
    return {
      restaurantlist: [],
      restaurantLabels: [
        { text: "?", color: "#000000" },
        { text: "?", color: "#000000" },
        { text: "?", color: "#000000" },
      ],
      restaurantTrigger: null,
      restaurantResult: -1,
    };
  },
  mounted() {
    this.eventBus.$on("pickRestaurant", (grade) => {
      this.init(grade);
      console.log('what')
      this.start();
    });
  },
  methods: {
    init(grade) {
      console.log("init", grade);
      this.restaurantlist = grade.restaurants;
      this.restaurantLabels = this.restaurantlist.map((r) => {
        const temp = {};
        temp.text = r.idx;
        temp.color = "#000000";
        return temp;
      });
    },
    start() {
      this.restaurantResult = pTable.restaurantPick(this.restaurantlist);
      this.restaurantTrigger = new Date();
    },
    onGradeComplete() {
      alert("결과! : " + this.restaurantlist[this.restaurantResult].name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
