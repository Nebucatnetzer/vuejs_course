<template>
    <section>
        <base-card>
            <template #header>
                <h3>{{ fullName }}</h3>
                <base-badge
                    :type="role"
                    :caption="role.toUpperCase()"
                ></base-badge>
            </template>

            <template #default>
                <p>{{ infoText }}</p>
            </template>
        </base-card>
    </section>
</template>

<script scoped>
export default {
    props: ["fullName", "infoText", "role"],
};
</script>
