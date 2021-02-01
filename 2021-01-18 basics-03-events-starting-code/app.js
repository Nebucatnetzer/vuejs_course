const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: "",
        };
    },
    methods: {
        confirmName() {
            this.confirmedName = this.name;
        },
        submitForm() {
            alert("Submitted");
        },
        setName(event, lastName) {
            this.name = event.target.value + " " + lastName;
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
