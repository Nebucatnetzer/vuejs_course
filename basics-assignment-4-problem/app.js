"use strict";

const app = Vue.createApp({
    data() {
        return {
            user1: false,
            user2: false,
            paragraphVisible: true,
            paragraphHidden: false,
            inputColor: "",
        };
    },
    computed: {
        classFromUserInput() {
            return {
                user1: this.user1,
                user2: this.user2,
                visible: this.paragraphVisible,
                hidden: this.paragraphHidden,
            };
        },
    },
    methods: {
        getUserInput(event) {
            const inputValue = event.target.value;
            if (inputValue === "user1") {
                this.user1 = true;
            } else if (inputValue === "user2") {
                this.user2 = true;
            } else {
                this.user1 = false;
                this.user2 = false;
            }
        },
        toggleParagraphVisibility() {
            this.paragraphVisible = !this.paragraphVisible;
            this.paragraphHidden = !this.paragraphHidden;
        },
        setBackgroundColor(event) {
            console.log(event.target.value);
            this.inputColor = event.target.value;
        },
    },
});

app.mount("#assignment");
