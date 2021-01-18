const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
        };
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
        },
        increaseCounter(inputNumber) {
            this.counter = this.counter + inputNumber;
        },
        decreaseCounter(inputNumber) {
            this.counter = this.counter - inputNumber;
        },
    },
});

app.mount("#events");
