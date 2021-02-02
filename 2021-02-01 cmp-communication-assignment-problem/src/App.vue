<template>
    <div>
        <h1>User App</h1>
        <active-user :username="user.username" :age="user.age"></active-user>
        <user-data @active-user="setActiveUser"></user-data>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: "Peter Paul",
                age: 18,
            },
        };
    },
    methods: {
        setActiveUser(user) {
            this.user = user;
        },
    },
};
</script>

<style></style>
