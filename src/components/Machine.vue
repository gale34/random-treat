<template>
  <div id="machines">
    등급
    <slot-machine
      :list="restaurantGradeLabels"
      :trigger="restaurantGradeTrigger"
      :height="200"
      :width="200"
      :currentIndex="restaurantGradeResult"
      @onComplete="onGradeComplete"
      class="single-machine"
    ></slot-machine>
    식당
    <ul v-if="restaurantReady">
      <li v-for="(item,index) in restaurantlist" :key="index">
        {{item.idx}} {{item.name}}
      </li>
    </ul>
    <slot-machine
      :list="restaurantLabels"
      :trigger="restaurantTrigger"
      :height="200"
      :width="200"
      :currentIndex="restaurantResult"
      @onComplete="onRestaurantComplete"
      class="single-machine"
    ></slot-machine>
    <div>
      <button @click="start">Start</button>
    </div>
  </div>
</template>

<script>
import { SlotMachine } from "@puckwang/vue-slot-machine";
import pTable from "../constant/ProbabilityTable";

export default {
  name: "SlotMachine",
  components: { "slot-machine": SlotMachine },
  props: {},
  data() {
    return {
      salaryGrade: null,
      restaurantGradelist: [],
      restaurantGradeLabels: [],
      restaurantGradeTrigger: null,
      restaurantGradeResult: -1,

      restaurantReady: false,
      restaurantGrade: null,
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
  created() {
    this.salaryGrade = pTable.bronze;
    this.restaurantGradelist = this.salaryGrade.restaurantGrades;
    this.restaurantGradeLabels = this.restaurantGradelist.map((r) => {
      const temp = {};
      temp.text = r.name;
      temp.color = "#000000";
      return temp;
    });
  },
  mounted() {},
  methods: {
    start() {
      this.restaurantReady = false;
      this.startRestaurantGrade();
    },
    startRestaurantGrade() {
      this.restaurantGradeResult = pTable.gradePick(this.restaurantGradelist);
      this.restaurantGradeTrigger = new Date();

      this.restaurantGrade = this.salaryGrade.restaurantGrades[
        this.restaurantGradeResult
      ];
    },
    onGradeComplete() {
      this.restaurantlist = this.restaurantGrade.restaurants;
      this.restaurantReady = true;
      this.restaurantLabels = this.restaurantlist.map((r) => {
        const temp = {};
        temp.text = r.idx;
        temp.color = "#000000";
        return temp;
      });

      setTimeout(() => this.startRestaurant(), 1000);
    },
    startRestaurant() {
      this.restaurantResult = pTable.restaurantPick(this.restaurantlist);
      this.restaurantTrigger = new Date();
    },
    onRestaurantComplete() {
      setTimeout(() => alert('당첨 ! ' + this.restaurantlist[this.restaurantResult].name), 100);
    }
  },
};
</script>

<style lang="scss">
#machines {
  margin: 10px auto;
  display: block;

  .single-machine {
    display: block;
    margin: 0 auto;
    width: 80%;
    padding: 10px 0;
  }
}

.konvajs-content {
  width: 100%;
  display: block;
  margin: 0 auto !important;
}

ul {
  list-style:none;
  text-align: left;
}

</style>
