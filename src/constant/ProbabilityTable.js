const b_grade_restaurants = [
    new Restaurant(1, "홍마떡", 0.2),
    new Restaurant(2, "하카다분코", 0.2),
    new Restaurant(3, "돈잔", 0.2),
    new Restaurant(4, "착한파스타", 0.2),
    new Restaurant(5, "중국집", 0.2)
];

const a_grade_restaurants = [
    new Restaurant(1, "이공족발", 0.125),
    new Restaurant(2, "이차돌", 0.125),
    new Restaurant(3, "정돈프리미엄", 0.125),
    new Restaurant(4, "카와카츠", 0.125),
    new Restaurant(5, "수제버거", 0.125),
    new Restaurant(6, "감성타코", 0.125),
    new Restaurant(7, "훌리오", 0.125),
    new Restaurant(8, "중국집요리", 0.125)
];

const s_grade_restaurants = [
    new Restaurant(1, "돼지고기", 0.25),
    new Restaurant(2, "스시", 0.25),
    new Restaurant(3, "웃사브", 0.25),
    new Restaurant(4, "곱창", 0.25)
];

const ss_grade_restaurants = [
    new Restaurant(1, "빅가이즈씨푸드", 0.25),
    new Restaurant(2, "야스노야", 0.25),
    new Restaurant(3, "한우식당", 0.25),
    new Restaurant(4, "이치류", 0.25),
];

const sss_grade_restaurants = [
    new Restaurant(1, "한우오마카세", 0.5),
    new Restaurant(2, "스시오마카세", 0.5)
]

export default {
    iron: new SalaryGrade("iron",
        [
            new RestaurantGrade("B", 0.20, b_grade_restaurants),
            new RestaurantGrade("A", 0.40, a_grade_restaurants),
            new RestaurantGrade("S", 0.30, s_grade_restaurants),
            new RestaurantGrade("SS", 0.095, ss_grade_restaurants),
            new RestaurantGrade("SSS", 0.005, sss_grade_restaurants)
        ]
    ),
    bronze: new SalaryGrade("bronze",
        [
            new RestaurantGrade("B", 0.15, b_grade_restaurants),
            new RestaurantGrade("A", 0.35, a_grade_restaurants),
            new RestaurantGrade("S", 0.33, s_grade_restaurants),
            new RestaurantGrade("SS", 0.15, ss_grade_restaurants),
            new RestaurantGrade("SSS", 0.02, sss_grade_restaurants)
        ]
    ),
    silver: new SalaryGrade("silver",
        [
            new RestaurantGrade("B", 0.10, b_grade_restaurants),
            new RestaurantGrade("A", 0.30, a_grade_restaurants),
            new RestaurantGrade("S", 0.36, s_grade_restaurants),
            new RestaurantGrade("SS", 0.20, ss_grade_restaurants),
            new RestaurantGrade("SSS", 0.04, sss_grade_restaurants)
        ]
    ),
    gold: new SalaryGrade("gold",
        [
            new RestaurantGrade("B", 0.05, b_grade_restaurants),
            new RestaurantGrade("A", 0.25, a_grade_restaurants),
            new RestaurantGrade("S", 0.39, s_grade_restaurants),
            new RestaurantGrade("SS", 0.25, ss_grade_restaurants),
            new RestaurantGrade("SSS", 0.06, sss_grade_restaurants)
        ]
    ),
    platinum: new SalaryGrade("platinum",
        [
            new RestaurantGrade("B", 0.005, b_grade_restaurants),
            new RestaurantGrade("A", 0.15, a_grade_restaurants),
            new RestaurantGrade("S", 0.40, s_grade_restaurants),
            new RestaurantGrade("SS", 0.365, ss_grade_restaurants),
            new RestaurantGrade("SSS", 0.08, sss_grade_restaurants)
        ]
    ),

    gradePick: function (restaurantGrades) {
        console.log(restaurantGrades)
        let gradeProbArr = restaurantGrades
            .map(g => g.prob);

        const result = pick(gradeProbArr);
        console.log('grade', result)
        return result;
    },
    restaurantPick: function (restaurants) {
        console.log(restaurants)
        let restaurantProbArr = restaurants.map(r => r.prob);

        const result = pick(restaurantProbArr);
        console.log('restaurant', result)
        return result;
    }
}

function SalaryGrade(name, restaurantGrades) {
    this.name = name;
    this.restaurantGrades = restaurantGrades;

    this.validate = function () {
        let total = 0;
        for (let grade of restaurantGrades) {
            total += grade.prob;
        }

        return total == 1 ? true : false;
    }
}

function RestaurantGrade(name, prob, restaurants) {
    this.name = name;
    this.prob = prob;
    this.restaurants = restaurants;

    this.validate = function () {
        let total = 0;
        for (let restaurant of restaurants) {
            total += restaurant.prob;
        }

        return total == 1 ? true : false;
    }
}

function Restaurant(idx, name, prob) {
    this.idx = idx;
    this.name = name;
    this.prob = prob;
}

function pick(probArr) { // eslint-disable-line no-unused-vars
    let num = Math.random();
    let s = 0;
    let lastIndex = probArr.length - 1;

    for (let i = 0; i < lastIndex; i++) {
        s += probArr[i];
        if (num < s) {
            return i;
        }
    }

    return lastIndex;
}