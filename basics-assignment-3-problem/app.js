"use strict";

const app = Vue.createApp({
    data() {
        return {
            result: 0,
        };
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function () {
                that.result = 0;
            }, 5000);
        },
    },
    computed: {
        status() {
            if (this.result < 37) {
                return "Not there yet";
            } else if (this.result > 37) {
                return "Too much!";
            } else if (this.result === 37) {
                return this.result;
            }
        },
    },
    methods: {
        increaseCounter(value) {
            this.result += value;
        },
    },
});

app.mount("#assignment");
