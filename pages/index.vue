<template>
    <main>
        <fin-header />
        <div class="container">
            <input />
        </div>
    </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
main {
    height: 97vh;
    width: 100%;

    .container {
        height: calc(100% - 50px);

        @media only screen and (max-device-width: 480px) {
            height: calc(100% - 50px);
        }

        input {
            width: 100%;
        }
    }
}
</style>