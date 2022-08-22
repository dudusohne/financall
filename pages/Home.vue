<template>
    <div class="home">
        <fin-header />
        <div class="container">
            <input />
            <div class="list">
                <fin-entry name="ALUGUEL --AASD" date="10/05" value="305,00" />
                <fin-entry name="LUZ" desc="description" date="10/05" value="305,00" />
                <fin-entry name="AGUA" date="10/05" value="305,00" />
                <fin-entry name="CARTÃO 1" date="10/05" value="305,00" />
                <fin-entry name="ALUGUEL --AASD" date="10/05" value="305,00" />
                <fin-entry name="LUZ" date="10/05" value="305,00" />
                <fin-entry name="AGUA" date="10/05" value="305,00" />
                <fin-entry name="CARTÃO 1" date="10/05" value="305,00" />
                <fin-entry name="ALUGUEL --AASD" date="10/05" value="305,00" />
                <fin-entry name="LUZ" desc="description" date="10/05" value="305,00" />
                <fin-entry name="AGUA" date="10/05" value="305,00" />
                <fin-entry name="CARTÃO 1" date="10/05" value="305,00" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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

        input {
            width: 80%;
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

        .list {
            display: flex;
            flex-direction: column;

            margin-top: 5px;
        }
    }
}
</style>