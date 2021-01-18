"use strict";

const app = Vue.createApp({
    data() {
        return {
            user1: false,
            user2: false,
            inputClass: "",
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
        toggleParagraphVisibility() {
            this.paragraphVisible = !this.paragraphVisible;
            this.paragraphHidden = !this.paragraphHidden;
        },
    },
});

app.mount("#assignment");
