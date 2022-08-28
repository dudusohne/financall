<template>
    <div class="fin-tabs">
        <div style="display: flex; flex-direction: row;">
            <NuxtLink to="/register">
                <div class="item item-add" :class="actualRoute === '/register' ? 'is-active' : ''">
                    <MaterialIconPlusCircleOutline class="icon" />
                </div>
            </NuxtLink>
            <NuxtLink to="/home">
                <div class="item item-home" :class="actualRoute === '/home' ? 'is-active' : ''">
                    <MaterialIconHomeVariant class="icon" />
                </div>
            </NuxtLink>
            <NuxtLink to="/profile">
                <div class="item item-profile" :class="actualRoute === '/profile' ? 'is-active' : ''">
                    <MaterialIconAccount class="icon" />
                </div>
            </NuxtLink>
            <NuxtLink to="/wallet">
                <div class="item item-wallet" :class="actualRoute === '/wallet' ? 'is-active' : ''">
                    <MaterialIconWalletPlusOutline class="icon" />
                </div>
            </NuxtLink>
            <NuxtLink to="/dashboard">
                <div class="item item-dashboard" :class="actualRoute === '/dashboard' ? 'is-active' : ''">
                    <MaterialIconViewDashboard class="icon" />
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { StyleValue } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const actualRoute = ref(route.fullPath)
const routeMin = actualRoute.value.replace('/', '')
const color = ref()

onBeforeMount(() => {
    resolveColor()
})

function resolveColor() {
    if (routeMin === 'home') {
        color.value = '#b9b9b9'
    }
    if (routeMin === 'profile') {
        color.value = '#c9d48a'
    }
    if (routeMin === 'dashboard') {
        color.value = '#8ad4c8'
    }
    if (routeMin === 'wallet') {
        color.value = '#d4b68a'
    }
}

const style = computed<StyleValue>(() => ({
    'color': color.value
}))
</script>

<style lang="scss" scoped>
.fin-tabs {
    display: flex;
    flex-direction: row;
    height: 2.2rem;
    padding-left: 3rem;
    justify-content: space-between;

    span {
        font-size: 18px;
        font-family: "Roboto";
        margin-right: 1%;
        margin-top: 8px;
        font-weight: bold;
        letter-spacing: 2px;
    }

    .item {
        height: 2.5rem;
        width: 3rem;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        box-shadow: 1px 1px rgb(175, 175, 175);
        transition: all 0.3s ease-in-out;
        text-align: center;

        margin-left: 3px;
        margin-top: -10px;
        padding-top: 10px;

        .icon {
            font-size: 2rem;
            align-self: flex-end;
            color: rgb(26, 26, 26);
        }
    }

    div.item.is-active {
        background-color: #1a1919;
        transform: translateY(5px);

        .icon {
            color: white;
        }
    }

    div.item:hover {
        transform: translateY(5px);
        cursor: pointer;
    }

    .item-home {
        background-color: rgb(217, 235, 211);
    }

    .item-profile {
        background-color: rgb(201, 212, 138);
    }

    .item-wallet {
        background-color: rgb(212, 182, 138);
    }

    .item-dashboard {
        background-color: rgb(138, 212, 200);
    }

    .item-add {
        background-color: rgb(97, 226, 161);
    }
}
</style>