"use strict";

const app = Vue.createApp({
    data() {
        return {
            inputClass: "",
            paragraphVisible: true,
            inputColor: "",
        };
    },
    computed: {
        classFromUserInput() {
            return {
                user1: this.inputClass === "user1",
                user2: this.inputClass === "user2",
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible,
            };
        },
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphVisible = !this.paragraphVisible;
        },
    },
});

app.mount("#assignment");
