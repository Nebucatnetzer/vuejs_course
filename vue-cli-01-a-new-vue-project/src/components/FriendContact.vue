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
        id: {
            type: String,
            required: true,
        },
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
    emits: {
        "toggle-favorite": function(id) {
            if (id) {
                return true;
            } else {
                console.warn("ID is missing!");
                return false;
            }
        },
    },
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
        isFavoriteText() {
            if (this.isFavorite) {
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
            this.$emit("toggle-favorite", this.id);
        },
    },
};
</script>
