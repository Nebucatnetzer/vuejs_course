<template>
    <li>
        <h2>{{ name }} {{ isFavoriteText }}</h2>
        <button @click="toggleDetails()">{{ buttonDetailsText }}</button>
        <button @click="toggleFavorite()">Mark as Favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    //props: ["name", "emailAddress", "phoneNumber"],
    props: {
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            detailsAreVisible: false,
            friendIsFavorite: this.isFavorite,
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
        isFavoriteText() {
            if (this.friendIsFavorite) {
                return "(Favorite)";
            } else {
                return "";
            }
        },
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.friendIsFavorite = !this.friendIsFavorite;
        },
    },
};
</script>
