"use strict";

const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newTask: "",
            showTasks: true,
        };
    },
    computed: {
        buttonText() {
            if (this.showTasks) {
                return "Hide Tasks";
            } else if (!this.showTasks) {
                return "Show Tasks";
            }
        },
    },
    methods: {
        addTask(newTask) {
            this.tasks.push(this.newTask);
        },
        toggleTasks() {
            this.showTasks = !this.showTasks;
        },
    },
});

app.mount("#assignment");
