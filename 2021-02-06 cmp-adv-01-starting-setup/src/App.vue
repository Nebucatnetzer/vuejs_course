<template>
    <div>
        <the-header></the-header>
        <button @click="setSelectedComponent('active-goals')">
            Active Goals
        </button>
        <button @click="setSelectedComponent('manage-goals')">
            Manage Goals
        </button>
        <!-- <manage-goals
            v-if="selectedComponent === 'manage-goals'"
        ></manage-goals>
        <active-goals
            v-if="selectedComponent === 'active-goals'"
        ></active-goals> -->
        <component :is="selectedComponent"></component>
    </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ManageGoals from "./components/ManageGoals";
import ActiveGoals from "./components/ActiveGoals";

export default {
    components: {
        TheHeader,
        ManageGoals,
        ActiveGoals,
    },
    data() {
        return {
            selectedComponent: "active-goals",
            activeUser: {
                name: "Maximilian Schwarzmüller",
                description: "Site owner and admin",
                role: "admin",
            },
        };
    },
    methods: {
        setSelectedComponent(cmp) {
            this.selectedComponent = cmp;
        },
    },
};
</script>

<style>
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
