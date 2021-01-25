<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">{{ buttonDetailsText }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "01234 5678 991",
                email: "manuel@localhost.com",
            },
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
