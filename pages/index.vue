<template>
    <main>
        <div class="container">
            <img src="../assets/images/fncall-logo.png" />
            <logo />
            <button class="auth-button" @click="authIn">
                <span v-show="!isLoading">ENTRAR</span>
                <FinSpinner v-show="isLoading" />
            </button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logIn } from '~~/composables/useAuth'
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";

const dbFire = getFirestore()
const isLoading = ref()

const auth = getAuth();

async function authIn() {
    isLoading.value = true
    try {
        await logIn()

        initUser()

        onAuthStateChanged(auth, (user) => {
            if (user) {
                checkIfUserExists(auth)
            }
        })
    } catch (e) {
        console.log(e.message)
    }
}

async function createUserInDB(user: any) {
    try {
        await setDoc(doc(dbFire, "users", `${user.currentUser?.uid}`), {
            name: user.currentUser?.displayName,
            email: user.currentUser?.email,
            photo: user.currentUser?.photoURL,
        });

        navigateTo("/home");
    } catch (e) {
        console.log(e.message);
    }
}

async function checkIfUserExists(user: any) {
    const docRef = doc(dbFire, "users", `${user.currentUser?.uid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        navigateTo("/home");
    } else {
        createUserInDB(user);
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
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 6rem;
            height: 2.4rem;
            background-color: $secondary;
            color: white;
            border: 1px solid $tertiary;
            border-radius: 8px;
            transition: all 0.4s ease-in-out;
            font-weight: bold;
            font-family: $font;
            letter-spacing: 1px;
        }

        button.auth-button:hover {
            cursor: pointer;
            border-color: orange;
            background-color: #fff;
            color: $secondary;
            transform: scale(1.03);
            letter-spacing: 2px;
        }
    }
}
</style>