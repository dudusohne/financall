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
                <fin-entry-dark :key="bill.id" v-for="bill in bills" :name="bill.name" :desc="bill.description" :date="bill.date"
                    :value="bill.value" :payd="bill.payd" @remove="handleRemoveItem(bill)" @check="handleCheckItem(bill)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref as Ref, remove, onValue, update } from "firebase/database";
import { useRouter } from "vue-router";

const auth = getAuth();

const router = useRouter()

const db = getDatabase();

const bills = ref()

onBeforeMount(() => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            router.push('/')
        }
        handleGetBills()
    })
})

async function handleGetBills() {
    try {
        const starCountRef = Ref(db, `users/${auth.currentUser.uid}/bills`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            bills.value = data
        });
    } catch (e) {
        console.log(e)
    }
}

async function handleRemoveItem(item) {
    try {
        await remove(Ref(db, `users/${auth.currentUser.uid}/bills/${item.id}`))
    } catch (e) {
        console.log(e)
    }
}

function handleCheckItem(item) {
    const updates = {};
    const itemUpdated = {
        ...item,
        payd: true
    }
    updates[`users/${auth.currentUser.uid}/bills/${item.id}`] = itemUpdated;
    update(Ref(db), updates);
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