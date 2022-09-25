<template>
    <div class="home">
        <fin-header />
        <fin-tabs />
        <div class="container">
            <div class="input-wrapper">
                <input />
                <MaterialIconMagnify class="icon" />
            </div>
            <div class="list">
                <fin-entry-dark :key="bill.id" v-for="bill in bills" :name="bill.name" :desc="bill.description"
                    :date="bill.date" :value="bill.value" :payd="bill.payd" @remove="handleRemoveItem(bill)"
                    @check="handleCheckItem(bill)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getFirestore, collection, query, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { Bill, User } from '~~/types';

const auth = useCookie<User>('userCookie')

const bills = ref<Bill[]>([])

const dbFire = getFirestore()

onBeforeMount(() => handleGetBills())

async function handleGetBills() {
    try {
        const q = query(collection(dbFire, `users/${auth.value?.uid}/bills/`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const item: Bill = {
                    ...doc.data(),
                    id: doc.data().id,
                    name: doc.data().name,
                    value: doc.data().value,
                    date: doc.data().date?.toDate()?.toLocaleDateString()
                }
                bills.value.push(item);
            });
            console.log(bills)
        });
    } catch (e) {
        console.log(e)
    } finally {
    }
}

async function handleRemoveItem(item: Bill) {
    try {
        await deleteDoc(doc(dbFire, `users/${auth.value?.uid}/bills/`, `${item.id}`));
    } catch (e) {
        console.log(e)
    }
}

async function handleCheckItem(item: Bill) {
    const billRef = doc(dbFire, `users/${auth.value?.uid}/bills/`, `${item.id}`);

    await updateDoc(billRef, {
        payd: true
    });
}
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
                border: 1px solid $tertiary;
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