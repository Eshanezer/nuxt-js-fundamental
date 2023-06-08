<template>
    <div>
        <p>Product Id {{ id }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
    layout: 'products'
});
</script>

<style lang="scss" scoped></style>