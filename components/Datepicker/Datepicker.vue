<template>
    <datepicker v-model="test" inputFormat="dd-MM-yyyy" :style="style" />
</template>

<script setup lang="ts">
import './css.json'
import Datepicker from 'vue3-datepicker'

const test = ref(new Date())

const style = {
    border: '2px solid #333',
    borderRadius: '6px',
    height: '30px',
    fontSize: '18px',
    paddingLeft: '5px',
    fontWeight: 'bold',
    backgroundColor: '#333',
    color: '#fff',

    "--vdp-bg-color": "#262626",
    "--vdp-text-color": "#dedede",
    "--vdp-box-shadow": "2px 4px 10px 4px #888",
    "--vdp-border-radius": "8px",
    "--vdp-heading-size": "2.5em",
    "--vdp-heading-weight": "bold",
    "--vdp-heading-hover-color": "#eeeeee",
    "--vdp-arrow-color": "currentColor",
    "--vdp-elem-color": "currentColor",
    "--vdp-disabled-color": "#d5d9e0",
    "--vdp-hover-color": "currentColor",
    "--vdp-hover-bg-color": "#0baf74",
    "--vdp-selected-color": "#ffffff",
    "--vdp-selected-bg-color": "#0baf74",
    "--vdp-elem-font-size": "1em",
    "--vdp-elem-border-radius": "3px",
    "--vdp-divider-color": "#d5d9e0"
}
</script>