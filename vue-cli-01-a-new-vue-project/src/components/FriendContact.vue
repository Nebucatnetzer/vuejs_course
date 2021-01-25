<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails()">{{ buttonDetailsText }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ["name", "emailAddress", "phoneNumber"],
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    computed: {
        buttonDetailsText() {
            if (this.detailsAreVisible) {
                return "Hide Details";
            } else {
                return "Show Details";
            }
        },
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
};
</script>
