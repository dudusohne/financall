<template>
    <div class="loading"></div>
</template>

<style lang="scss" scoped>
.loading {
    width: 20px;
    height: 20px;
    border: 4px solid $tertiary;
    border-top: 4px solid $primary;
    border-radius: 50%;
    transition-property: transform;
    animation-name: rotate;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>