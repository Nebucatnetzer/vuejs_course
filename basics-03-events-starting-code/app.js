const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        increaseCounter(inputNumber) {
            this.counter = this.counter + inputNumber;
        },
        decreaseCounter(inputNumber) {
            this.counter = this.counter - inputNumber;
        },
    },
});

app.mount("#events");
