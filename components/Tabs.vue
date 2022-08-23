<template>
    <div class="tabs">
        <div class="item">
            <MaterialIconPlusCircleOutline class="icon" />
        </div>
        <div class="item-2">
            <MaterialIconAccount class="icon" />
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.tabs {
    display: flex;
    flex-direction: row;
    height: 3rem;
    padding-left: 3rem;

    .item {
        width: 3rem;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: rgb(155, 212, 138);
        text-align: center;

        box-shadow: 1px 1px rgb(175, 175, 175);

        margin-left: 3px;

        .icon {
            align-self: center;
            color: rgb(31, 30, 30);
            font-size: 2rem;
        }
    }

    .item-2 {
        width: 3rem;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: rgb(201, 212, 138);
        text-align: center;

        box-shadow: 1px 1px rgb(175, 175, 175);

        margin-left: 3px;

        .icon {
            align-self: center;
            color: rgb(31, 30, 30);
            font-size: 2rem;
        }
    }
}
</style>