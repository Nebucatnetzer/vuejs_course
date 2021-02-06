<template>
    <section>
        <base-card>
            <h3>{{ fullName }}</h3>
            <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
            <p>{{ infoText }}</p>
        </base-card>
    </section>
</template>

<script scoped>
export default {
    props: ["fullName", "infoText", "role"],
};
</script>

<style>
section header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
