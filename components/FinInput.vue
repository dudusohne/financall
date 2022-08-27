<template>
    <input class="fin-input" :type="props.type" v-model="value" />
</template>

<script setup lang="ts">
import { useVModel } from '~~/helpers/useVModel';

interface Props {
    modelValue?: string
    placeholder?: string
    required?: boolean
    mask?: string
    regex?: string | RegExp
    disabled?: boolean
    type?: string
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: '',
    mask: '',
    regex: '',
    modelValue: '',
    required: false,
    type: 'text',
})
const emit = defineEmits<{
    (_event: 'update:modelValue', _value: string): void
}>()

const value = useVModel<string>(props, emit, 'modelValue')
</script>

<style lang="scss" scoped>
.fin-input {
    height: 2rem;
    width: 100%;
    max-width: 400px;

    background-color: rgba(238, 238, 238, 0.562);

    border: 1px solid rgb(177, 177, 177);
    border-radius: 4px;

    font-size: 1.4rem;
    font-family: 'Roboto';
    font-weight: bold;

    @media only screen and (max-device-width: 480px) {
        width: 90%;
        max-width: 400px;
    }
}
.fin-input:focus {
    background-color: rgba(185, 185, 185, 0.562);
    border: 1px solid #333;
}
</style>