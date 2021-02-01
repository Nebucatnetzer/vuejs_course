"use strict";

const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    computed: {
        classesBoxA() {
            return { active: this.boxASelected };
        },
        classesBoxB() {
            return { active: this.boxBSelected };
        },
        classesBoxC() {
            return { active: this.boxCSelected };
        },
    },
    methods: {
        boxSelected(box) {
            if (box === "A") {
                this.boxASelected = !this.boxASelected;
            } else if (box === "B") {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === "C") {
                this.boxCSelected = !this.boxCSelected;
            }
        },
    },
});

app.mount("#styling");
