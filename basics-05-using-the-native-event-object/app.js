const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            // fullName: "",
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000);
            }
        },
    },
    computed: {
        fullName() {
            if (this.name === "" || this.lastName === "") {
                return "";
            }
            return this.name + " " + this.lastName;
        },
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = "";
            this.lastName = "";
        },
    },
});

app.mount("#events");
