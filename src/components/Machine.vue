<template>
  <div id="machines">
    <slot-machine
        :list="restaurantGradeLabels"
        :trigger="restaurantGradeTrigger"
        :height="300"
        :width="300"
        :currentIndex="restaurantGradeResult"
        @onComplete="onGradeComplete"
        class="single-machine"
    ></slot-machine>
    <slot-machine
        :list="restaurantLabels"
        :trigger="restaurantTrigger"
        :height="300"
        :width="300"
        :currentIndex="restaurantResult"
        class="single-machine"
    ></slot-machine>
    <div>
      <button @click="start">Start</button>
    </div>
  </div>
</template>

<script>
  import {SlotMachine} from '@puckwang/vue-slot-machine';
  import pTable from '../constant/ProbabilityTable';

  export default {

    name: "SlotMachine",
    components: {"slot-machine": SlotMachine},
    props: {},
    data() {
      return {
        salaryGrade: null,
        restaurantGradelist: [],
        restaurantGradeLabels: [],
        restaurantGradeTrigger: null,
        restaurantGradeResult: -1,

        restaurantGrade: null,
        restaurantlist: [],
        restaurantLabels: [
          {text: '?', color: '#000000'},
          {text: '?', color: '#000000'},
          {text: '?', color: '#000000'},
        ],
        restaurantTrigger: null,
        restaurantResult: -1,
      };
    },
    created() {
      this.salaryGrade = pTable.bronze;
      this.restaurantGradelist = this.salaryGrade.restaurantGrades;
      this.restaurantGradeLabels = this.restaurantGradelist
        .map(r => {
          const temp = {};
          temp.text = r.name;
          temp.color = '#000000';
          return temp;
        });

    },
    mounted() {
    },
    methods: {
      start() {
        this.startRestaurantGrade();
      },
      startRestaurantGrade() {
        this.restaurantGradeResult = pTable.gradePick(this.restaurantGradelist)
        this.restaurantGradeTrigger = new Date();

        this.restaurantGrade = this.salaryGrade.restaurantGrades[this.restaurantGradeResult];
      },
      onGradeComplete() {
        this.restaurantlist = this.restaurantGrade.restaurants;
        this.restaurantLabels = this.restaurantlist
          .map(r => {
            const temp = {};
            temp.text = r.idx;
            temp.color = '#000000';
            return temp;
          })

        setTimeout(() => this.startRestaurant(), 1000);
      },
      startRestaurant() {
        this.restaurantResult = pTable.restaurantPick(this.restaurantlist)
        this.restaurantTrigger = new Date();
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #machines {
    width: 90%;
    margin: 10px auto;

    .single-machine {
      float: left;
      width: 50%;
    }
    > > > .konvajs-content {
      display: inline-block !important;
    }
  }
</style>
