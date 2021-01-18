const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
        };
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
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
