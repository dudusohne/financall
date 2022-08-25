<template>
    <div class="register">
        <fin-header />
        <tabs />
        <div class="container" as="form">
            <span class="container-title">REGISTER A NEW BILL</span>

            <span class="name label" style="margin-top: 5rem;">Bill's tag name</span>
            <fin-input v-model="name" />

            <span class="description label">Bill's
                description</span>
            <fin-input v-model="description" />

            <span class="value label">Value</span>
            <fin-input v-model="value" />

            <span class="date label">Date</span>
            <fin-input v-model="date" />

            <div class="container-checkbox">
                <span class="date label">Paid</span>
                <fin-input type="checkbox" />
            </div>

            <div style="display: flex; flex-direction: row;">
                <button>LIMPAR</button>
                <button type="submit" @click="handleRegister">REGISTRAR</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Bill } from '~~/types';
import { getDatabase, ref as Ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { uuid as v4 } from 'uuid'

const name = ref<Bill>()
const description = ref<Bill>()
const value = ref<Bill>()
const date = ref<Bill>()

const auth = getAuth();

const router = useRouter()

function handleRegister() {
    const user = auth.currentUser;
    const userId: any = user?.uid;
    const userEmail: string | any = user?.email;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;

    const db = getDatabase();

    try {
        set(Ref(db, `users/` + userId), {
            email: userEmail,
            name: userName,
            photo: userPhoto,
        });

        set(Ref(db, `users/` + userId), {
            id: 1,
            name,
            description,
            value,
            date,
        });

        router.push('/homes')
        alert('REGISTER SAVED')
    } catch (e) {
        console.log(e);
    }
}
</script>

<style lang="scss" scoped>
.register {
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

        margin-top: 2rem;

        .container-title {
            color: #333;
            font-weight: bold;
            font-size: 1.3rem;
        }

        .container-checkbox {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }

    span {
        font-family: 'Roboto';
    }

    .label {
        font-weight: bold;
        align-self: flex-start;
        margin-left: 2rem;
        margin-top: 1rem;
    }
}
</style>