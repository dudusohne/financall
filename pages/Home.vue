<template>
    <div class="home">
        <fin-header />
        <tabs />
        <div class="container">
            <div class="input-wrapper">
                <input />
                <MaterialIconMagnify class="icon" />
            </div>
            <div class="list">
                <fin-entry-dark name="LUZ" desc="description" date="10/05" value="305,00" />
                <fin-entry-dark name="LUZ" desc="description" date="10/05" value="305,00" />
                <fin-entry-dark name="LUZ" desc="description" date="10/05" value="305,00" />
                <fin-entry-dark name="LUZ" desc="description" date="10/05" value="305,00" />
                <fin-entry-dark name="LUZ" desc="description" date="10/05" value="305,00" />
                <fin-entry-dark name="LUZ" desc="description" date="10/05" value="305,00" />
                <fin-entry-dark name="LUZ" desc="description" date="10/05" value="305,00" />
                <fin-entry-dark name="LUZ" desc="description" date="10/05" value="305,00" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.home {

    .container {
        display: flex;
        flex-direction: column;
        height: calc(100% - 50px);
        align-items: center;

        @media only screen and (max-device-width: 480px) {
            height: calc(100% - 50px);
        }

        .input-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;

            .icon {
                margin-top: 23px;
            }

            input {
                width: 90%;
                height: 2rem;
                max-width: 560px;

                border-radius: 9px;

                border: 1px solid #333;
                margin-top: 1rem;

                @media only screen and (max-device-width: 480px) {
                    margin-top: 3px;
                    max-width: 300px;
                }
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;

            margin-top: 5px;
        }
    }
}
</style>