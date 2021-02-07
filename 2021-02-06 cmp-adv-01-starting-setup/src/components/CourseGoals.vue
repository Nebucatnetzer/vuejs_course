<template>
    <div>
        <ul v-for="goal in goals" :key="goal">
            <slot :item="goal"></slot>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goals: ["Finish the course", "Learn Vue"],
        };
    },
};
</script>

<style></style>
