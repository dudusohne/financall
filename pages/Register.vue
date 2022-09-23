<template>
    <div class="register">
        <fin-header />
        <fin-tabs />
        <div class="container" as="form">
            <span class="container-title">REGISTRE UMA NOVA CONTA</span>

            <span class="name label" style="margin-top: 5rem;">NOME</span>
            <fin-input v-model="name" />

            <span class="description label">DESCRIÇÃO (opcional)</span>
            <fin-input v-model="description" />

            <span class="value label">VALOR</span>
            <fin-input v-model="value" />

            <div style="display: flex; flex-direction: row; margin-top: 1.5rem; align-items: center;">

                <span class="date label" style="margin-top: 8px; margin-right: 2px;">VENCIMENTO:</span>
                <datepicker v-model="date" />
            </div>

            <div class="container-checkbox">
                <span class="date label">PAID</span>
                <input type="checkbox" class="checkbox" v-model="payd" />
            </div>

            <div style="display: flex; flex-direction: row; margin-top: 2rem;">
                <button class="button-clear" @click="resetForm">
                    <MaterialIconBroom class="icon" />
                </button>
                <button class="button-send" type="submit" @click="handleRegisterBill()">
                    SAVE
                    <MaterialIconContentSavePlusOutline class="icon" style="margin-left: 5px" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref as Ref, set, getDatabase } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import Datepicker from '../components/Datepicker/Datepicker.vue'
import { doc, setDoc } from "firebase/firestore";

const auth = useCookie<any>('userCookie')

const name = ref<string>()
const description = ref<string>()
const value = ref<string>()
const date = ref<Date>(new Date())
const payd = ref<boolean>()

// const db = this?.$fireModule.firestore?.collection('users')

async function handleRegisterBill() {
    const id = uuidv4();

    if (!name.value) {
        alert('name field is required')
        return
    }
    console.log(date.value)
    try {
        //realtime database query
        // await set(Ref(db, `users/${auth.value?.uid}/bills/${id}`), {
        //     id: id,
        //     name: name.value,
        //     description: description.value ?? '',
        //     value: value.value ?? '',
        //     date: date.value ?? '',
        //     payd: payd.value ?? false
        // });

        //firestore database query
        // await setDoc(doc(db, "SF"), {
        //     name: "San Francisco", state: "CA", country: "USA",
        //     capital: false, population: 860000,
        //     regions: ["west_coast", "norcal"]
        // });

        resetForm()
        alert('BOLETO SALVO COM SUCESSO!')
    } catch (e) {
        console.log(e);
    }
}

function resetForm() {
    name.value = ''
    description.value = ''
    value.value = ''
    payd.value = false
    date.value = new Date()
}
</script>

<style lang="scss" scoped>
.register {
    display: flex;
    flex-direction: column;
    height: 100vh;

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
            color: $secondary;
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
                border: 1px solid $secondary;
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
            opacity: 0.8;
            cursor: pointer;
        }

        .button-clear {
            background-color: rgb(224, 224, 224);
        }

        .button-send {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: $primary;
            color: $secondary;
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
        color: $secondary;
    }
}
</style>