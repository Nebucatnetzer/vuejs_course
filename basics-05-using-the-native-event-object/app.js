const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            fullName: "",
        };
    },
    watch: {
        name(value) {
            if (value === "") {
                this.fullName = "";
            } else {
                this.fullName = value + " " + this.lastName;
            }
        },
        lastName(value) {
            if (value === "") {
                this.fullName = "";
            } else {
                this.fullName = this.name + " " + value;
            }
        },
    },
    computed: {
        // fullName() {
        //     if (this.name === "") {
        //         return "";
        //     }
        //     return this.name + " " + "Muster";
        // },
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
        },
    },
});

app.mount("#events");
