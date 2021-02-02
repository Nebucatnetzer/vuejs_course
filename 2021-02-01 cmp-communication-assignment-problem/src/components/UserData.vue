<template>
    <div>
        <form @submit.prevent="returnData">
            <div>
                <label>Username: </label>
                <input type="text" />
            </div>
            <div>
                <label>Age: </label>
                <input type="number" />
            </div>
            <div><button>Add User</button></div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        returnData() {},
    },
};
</script>
