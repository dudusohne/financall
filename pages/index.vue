<template>
    <main>
        <div class="container">
            <img src="../assets/images/fncall-logo.png" />
            <logo />
            <button class="auth-button" @click="authIn" :loading="isLoading">ENTRAR</button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { logIn } from '~~/composables/useAuth'
import { useRouter } from "vue-router";

const isLoading = ref()
const router = useRouter()

async function authIn() {
    try {
        await logIn()
    } catch (e) {
        console.log(e)
    } finally {
        router.push('/home')
    }
}
</script>

<style lang="scss">
body {
    margin: 0;
}

main {
    margin: 0;
    height: 100vh;

    .container {
        display: flex;
        flex-direction: column;
        height: calc(100% - 50px);
        align-items: center;
        justify-content: center;

        @media only screen and (max-device-width: 480px) {
            height: calc(100% - 50px);
        }

        img {
            height: 15rem;
            margin-left: 3rem;
        }

        .auth-button {
            min-width: 6rem;
            height: 2.4rem;
            background-color: rgb(26, 25, 25);
            color: white;

            border: 1px solid #333;
            border-radius: 8px;
        }
    }
}
</style>