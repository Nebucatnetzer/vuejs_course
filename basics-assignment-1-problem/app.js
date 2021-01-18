"use strict";

const app = Vue.createApp({
    data() {
        return {
            person: {
                name: "Max Muster",
                age: 32,
                ageInFiveYears() {
                    return this.age + 5;
                },
            },
            imageUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Feral_cat_Virginia_crop.jpg/1200px-Feral_cat_Virginia_crop.jpg",
        };
    },
    methods: {
        randomNumber() {
            return Math.random();
        },
        ageInFiveYears(age) {
            return age + 5;
        },
    },
});

app.mount("#assignment");
