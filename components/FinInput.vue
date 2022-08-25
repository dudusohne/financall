<template>
    <input class="fin-input" :type="props.type" />
</template>

<script setup lang="ts">
interface Props {
    type?: string
}
const props = withDefaults(defineProps<Props>(), {
    type: 'text'
})
</script>

<style lang="scss" scoped>
.fin-input {
    height: 2rem;
    width: 100%;
    max-width: 400px;

    background-color: rgb(238, 238, 238);

    border: 1px solid #333;
    border-radius: 3px;

    font-size: 1rem;
    font-family: 'Roboto';
}
</style>