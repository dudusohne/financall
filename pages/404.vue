<template>
    <div class="not-found">
        <div class="container">
            <img class="robot" src="../assets/images/robot404.png" />
            <span class="container-title">Error 404</span>
            <span class="container-description">PAGE NOT FOUND.</span>
            <button @click="$router.go(-1)">VOLTAR</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
const auth = useAuthUser()
</script>

<style lang="scss" scoped>
.not-found {
    display: flex;
    flex-direction: column;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        justify-content: center;
        height: fit-content;
        max-width: 450px;
        width: 100%;

        margin-top: 8rem;

        .container-title {
            color: #333;
            font-weight: bold;
            font-size: 1.3rem;
            font-family: 'Roboto';
        }

        .container-description {
            color: #333;
            font-weight: bold;
            font-size: 1.8rem;
            font-family: 'Roboto';
            margin-top: 0.5rem;
        }

        .robot {
            width: 300px;
            margin-left: 70px;
        }

        button {
            display: flex;
            padding: 15px;
            background-color: #61e2a1;
            border-radius: 12px;
            border: none;
            margin-top: 3rem;
            font-weight: bold;
            color: #333;
        }

        button:hover {
            opacity: 0.9;
            cursor: pointer;
        }
    }


}
</style>