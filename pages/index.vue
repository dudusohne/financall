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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref as Ref, set } from "firebase/database";
import { logIn } from '~~/composables/useAuth'
import { useRouter } from 'vue-router'

const db = getDatabase();
const auth = getAuth();

const isLoading = ref()
const router = useRouter()

async function authIn() {
    try {
        await logIn()
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                updateUserInDatabase(auth)
            }
        })
    } catch (e) {
        console.log(e)
    }
}

async function updateUserInDatabase(user) {
    //this will maintain the user data from auth always updated.

    try {
        set(Ref(db, `users/${user.currentUser?.uid}`,), {
            name: user.currentUser?.displayName,
            email: user.currentUser?.email,
            photo: user.currentUser?.photoURL,
        });
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
            transition: all 0.4s ease-in-out;
        }

        button.auth-button:hover {
            cursor: pointer;
            border-color: orange;
            background-color: rgb(88, 88, 88);
            border-radius: 6px;
            transform: scale(1.03);
        }
    }
}
</style>