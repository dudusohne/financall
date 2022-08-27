<template>
    <div class="register">
        <fin-header />
        <tabs />
        <div class="container" as="form">
            <span class="container-title">REGISTER A NEW BILL</span>

            <span class="name label" style="margin-top: 5rem;">NAME</span>
            <fin-input v-model="name" />

            <span class="description label">DESCRIPTION</span>
            <fin-input v-model="description" />

            <span class="value label">VALUE</span>
            <fin-input v-model="value" />

            <span class="date label">DATE</span>
            <fin-input v-model="date" />

            <div class="container-checkbox">
                <span class="date label">PAID</span>
                <input type="checkbox" class="checkbox" v-model="payd" />
            </div>

            <div style="display: flex; flex-direction: row; margin-top: 2rem;">
                <button class="button-clear" @click="resetForm">LIMPAR</button>
                <button class="button-send" type="submit" @click="handleRegisterBill()">REGISTRAR</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getDatabase, ref as Ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';

const auth = getAuth();
const db = getDatabase();

const router = useRouter()

const name = ref<string>()
const description = ref<string>()
const value = ref<string>()
const date = ref<string>()
const payd = ref<boolean>()
const userId = ref<string>()
const user = ref()

onMounted(() => {
    user.value = auth.currentUser;
    userId.value = auth.currentUser.uid;
})

async function handleRegisterBill() {
    const id = uuidv4();

    if (!name.value) {
        alert('name field is required')
        return
    }

    try {
        await set(Ref(db, `users/${userId.value}/bills/${id}`), {
            name: name.value,
            description: description.value ?? '',
            value: value.value ?? '',
            date: date.value ?? '',
            payd: payd.value ?? false
        });

        resetForm()
        alert('BOLETO GUARDADO!')
    } catch (e) {
        console.log(e);
    }
}

function resetForm() {
    name.value = ''
    description.value = ''
    value.value = ''
    date.value = ''
    payd.value = false
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

            margin-top: 1rem;

            .checkbox {
                border: 1px solid #333;
                border-radius: 12px;
                height: 2rem;
                width: 2rem;
            }
        }


        button {
            height: 3rem;
            border-radius: 8px;
            border: 1px solid;
            font-size: 16px;
            font-weight: bold;
            border-color: rgb(182, 182, 182);
            color: rgba(59, 59, 59, 0.925);

        }

        button:hover {
            opacity: 0.7;
            cursor: pointer;
        }

        .button-clear {
            background-color: rgb(224, 224, 224);
        }

        .button-send {
            background-color: rgb(151, 211, 102);

            margin-left: 0.4rem;
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
        letter-spacing: 0.9px;
        color: rgb(75, 75, 75);
    }
}
</style>