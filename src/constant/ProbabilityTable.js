const b_grade_restaurants = [
    new Restaurant(1, "홍마떡 (서울 마포구 홍익로5안길 24)", 0.15),
    new Restaurant(2, "하카다분코 (서울 마포구 독막로19길 43)", 0.15),
    new Restaurant(3, "돈까스잔치 (서울 마포구 어울마당로 35)", 0.2),
    new Restaurant(4, "진짜파스타 (서울 마포구 와우산로 64 전원빌딩 2층)", 0.15),
    new Restaurant(5, "한양중식 (서울 마포구 와우산로13길 9)", 0.2),
    new Restaurant(6, "난 (서울 마포구 토정로3길 22 지층)", 0.15)
];

const a_grade_restaurants = [
    new Restaurant(1, "이공족발 (서울 마포구 어울마당로 70 2층)", 0.1),
    new Restaurant(2, "이차돌 (서울 마포구 잔다리로6길 36 동천빌딩 1층)", 0.125),
    new Restaurant(3, "정돈 (서울 마포구 어울마당로 46)", 0.1),
    new Restaurant(4, "카와카츠 (서울 마포구 동교로 126 1층 102호)", 0.1),
    new Restaurant(5, "수제버거", 0.125),
    new Restaurant(6, "감성타코 (서울 마포구 와우산로21길 20-11 2층)", 0.15),
    new Restaurant(7, "피자네버슬립스 (서울 마포구 양화로6길 73 4층 피자네버슬립스)", 0.15),
    new Restaurant(8, "왕왕 (서울 서대문구 연희맛로 27)", 0.15)
];

const s_grade_restaurants = [
    new Restaurant(1, "360 (서울 마포구 독막로7길 26)", 0.1),
    new Restaurant(2, "진저피그 (서울 마포구 양화로 128)", 0.15),
    new Restaurant(3, "스파카 나폴리 (서울 마포구 양화로6길 28)", 0.1),
    new Restaurant(4, "웃사브 (서울 마포구 와우산로11길 10 1,2층)", 0.15),
    new Restaurant(5, "은행골 (서울 마포구 와우산로15길 34)", 0.15),
    new Restaurant(6, "육몽 (서울 마포구 양화로16길 19 1-3층)", 0.15),
    new Restaurant(7, "구공탄곱창 (서울 마포구 양화로6길 77)", 0.1),
    new Restaurant(8, "파파초밥 (서울 마포구 와우산로21길 28-10)", 0.1)
];

const ss_grade_restaurants = [
    new Restaurant(1, "이치류 (서울 마포구 잔다리로3안길 44)", 0.25),
    new Restaurant(2, "야스노야 (서울 용산구 후암로 8-1)", 0.25),
    new Restaurant(3, "한우명가 (서울 서대문구 연희로 46-1)", 0.20),
    new Restaurant(4, "아웃백", 0.30)
];

const sss_grade_restaurants = [
    new Restaurant(1, "붓처스컷 (서울 중구 세종대로 136 서울파이낸스센터 지하2층)", 0.3),
    new Restaurant(2, "빅가이즈씨푸드 (서울 마포구 양화로 141 롯데호텔 L7 1F)", 0.3),
    new Restaurant(3, "텍사스데브라질 (서울 강남구 논현로 854 안다즈 호텔 지하 1층)", 0.4),
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
            new RestaurantGrade("B", 0.08, b_grade_restaurants),
            new RestaurantGrade("A", 0.35, a_grade_restaurants),
            new RestaurantGrade("S", 0.40, s_grade_restaurants),
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

function pick(probArr) {
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