<template>
    <div class="fin-header">
        <span>financALL</span>
        <img src="" />
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.fin-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;

    align-items: center;
    justify-content: space-between;

    padding-inline: 15px;

    background-color: rgb(104, 187, 104);

    span {
        font-size: 22px;
        font-family: "Roboto";
        font-weight: medium;

        letter-spacing: 1.2px;
    }

    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: rgb(85, 85, 85);
    }
}
</style>