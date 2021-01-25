<template>
    <h2>My Friends</h2>
    <ul>
        <friend-contact></friend-contact>
        <friend-contact></friend-contact>
    </ul>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
    components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "0123 4567 890",
                    email: "manuel@localhost.com",
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "9876 5432 210",
                    email: "julie@localhost.com",
                },
            ],
        };
    },
};
</script>
