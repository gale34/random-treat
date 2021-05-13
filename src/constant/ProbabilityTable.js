const b_grade_restaurants = [
    new Restaurant(1, "단디 (서울 송파구 백제고분로45길 7)", 0.2),
    new Restaurant(2, "청와옥 (서울 송파구 삼학사로 96)", 0.2),
    new Restaurant(3, "오레노라멘 (서울 송파구 송파동 42-6 일층)", 0.2),
    new Restaurant(4, "마싯내 (서울 송파구 석촌호수로18길 7 수정빌딩 102호)", 0.2),
    new Restaurant(5, "팔각동 (서울 송파구 오금로17길 6 1층 팔각동)", 0.2),
];

const a_grade_restaurants = [
    new Restaurant(1, "갓잇 (서울 송파구 백제고분로45길 4-14)", 0.05),
    new Restaurant(2, "다운타우너 잠실 (서울 송파구 백제고분로45길 3 1층 다운타우너)", 0.05),
    new Restaurant(3, "돈부리파스타 (서울 송파구 백제고분로45길 15)", 0.08),
    new Restaurant(4, "온량 (서울 송파구 백제고분로43길 4 1층)", 0.07),
    new Restaurant(5, "동경산책 (서울 송파구 백제고분로45길 15 1층 102호)", 0.1),
    new Restaurant(6, "미자식당 (서울 송파구 오금로18길 14)", 0.08),
    new Restaurant(7, "빠레뜨한남 (서울 송파구 오금로16길 10 1층 빠레뜨한남)", 0.07),
    new Restaurant(8, "팀호완 (서울 송파구 올림픽로 240 롯데백화점 잠실점 2층)", 0.1),
    new Restaurant(9, "더 마칸 (서울 송파구 올림픽로32길 37-4 1층)", 0.1),
    new Restaurant(10, "돈이찌 (서울 송파구 올림픽로32길 41 1층)", 0.08),
    new Restaurant(11, "잠수교집 (서울 송파구 송파대로49길 51 1층 잠수교집)", 0.05),
    new Restaurant(12, "모터시티바이매니멀 (서울 송파구 백제고분로45길 17-3 2층)", 0.7),
    new Restaurant(13, "대갈곱창&막창송파점 (서울 송파구 백제고분로45길 21-1)", 0.1)
];

const s_grade_restaurants = [
    new Restaurant(1, "오쓰세이로무시 (서울 송파구 백제고분로45길 30)", 0.1),
    new Restaurant(2, "아그라 (서울 송파구 올림픽로 300 롯데백화점에비뉴엘월드타워점 6층)", 0.1),
    new Restaurant(3, "엘리스리틀이태리 (서울 송파구 백제고분로41길 43-21)", 0.1),
    new Restaurant(4, "고도식 (서울 송파구 백제고분로45길 28)", 0.1),
    new Restaurant(5, "차만다 (서울 송파구 오금로18길 6)", 0.1),
    new Restaurant(6, "일일양 (서울 송파구 송파대로49길 52 나인파크 A-107호)", 0.1),
    new Restaurant(7, "송계옥 (서울 송파구 올림픽로32길 38 1층 103,104호)", 0.1),
    new Restaurant(8, "다케오호르몬데판야끼 (서울 송파구 백제고분로45길 8 1층)", 0.1),
    new Restaurant(9, "피자네버슬립스 (서울 송파구 백제고분로45길 6 지층)", 0.1),
    new Restaurant(10, "글로리식당 (서울 송파구 백제고분로42길 4-13 102호)", 0.1),
];

const ss_grade_restaurants = [
    new Restaurant(1, "아웃백 (서울 송파구 송파대로 466)", 0.20),
    new Restaurant(2, "갓덴스시 (서울 송파구 올림픽로 300 롯데월드몰 캐주얼동 5층)", 0.20),
    new Restaurant(3, "냠냠물고기 (서울 송파구 송파대로30길 41-21)", 0.20),
    new Restaurant(4, "진대감 (서울 송파구 오금로13길 6 오선빌딩)", 0.20),
    new Restaurant(5, "빅가이즈랍스터 (서울 송파구 올림픽로 300 롯데월드몰 B1F)", 0.20),

];

const sss_grade_restaurants = [
    new Restaurant(1, "붓처스컷 (서울 중구 세종대로 136 서울파이낸스센터 지하2층)", 0.3),
    new Restaurant(2, "태인일식 (서울 송파구 송파대로28길 11)", 0.3),
    new Restaurant(3, "엠스테이크하우스 (서울 송파구 올림픽로 300 롯데백화점 에비뉴엘월드타워점 6층)", 0.4),
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