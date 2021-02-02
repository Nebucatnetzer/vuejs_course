<template>
    <div>
        <form @submit.prevent="returnData">
            <div>
                <label>Username: </label>
                <input type="text" v-model="enteredUsername" />
            </div>
            <div>
                <label>Age: </label>
                <input type="number" v-model="enteredAge" />
            </div>
            <div><button>Add User</button></div>
        </form>
    </div>
</template>

<script>
export default {
    emits: ["active-user"],
    data() {
        return {
            enteredUsername: "",
            enteredAge: "",
        };
    },
    methods: {
        returnData() {
            const user = {
                username: this.enteredUsername,
                age: Number(this.enteredAge),
            };
            this.$emit("active-user", user);
        },
    },
};
</script>
