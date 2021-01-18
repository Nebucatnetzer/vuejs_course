"use strict";

const app = Vue.createApp({
    data() {
        return {
            firstInputValue: "",
            secondInputValue: "",
        };
    },
    methods: {
        showAlert() {
            alert("Some alert");
        },
        updateFirstOutput(event) {
            this.firstInputValue = event.target.value;
        },
        updateSecondOutput(event) {
            this.secondInputValue = event.target.value;
        },
    },
});

app.mount("#assignment");
