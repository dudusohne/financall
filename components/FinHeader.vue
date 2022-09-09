<template>
    <div class="fin-header">
        <div class="logo">
            <span>financ</span>
            <p>ALL</p>
        </div>
        <div class="user">
            <img :src="user?.photoURL" alt="user" />
            <MaterialIconLogout class="icon" @click="userLogOut" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { logOut } from '~~/composables/useAuth'

const user = useCookie<any>('userCookie')

async function userLogOut() {
    try {
        logOut()
    } catch (e) {
        console.log(e)
    } finally {
        navigateTo('/')
    }
}
</script>

<style lang="scss" scoped>
.fin-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: sticky;
    top: 0;
    height: 7vh;

    align-items: center;
    justify-content: space-between;

    background-color:
        #1a1919;

    z-index: 10;

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        max-height: 10px;

        margin-left: 1rem;

        span {
            font-size: 27px;
            font-family: "Roboto";
            font-weight: medium;
            letter-spacing: 1.2px;
            color: #ffffff;
        }

        p {
            font-size: 32px;
            font-family: "Roboto";
            font-weight: bold;
            letter-spacing: 1px;
            color: #50a261;
        }
    }

    .user {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-right: 1%;

        .icon {
            color: rgb(226, 226, 226);
        }

        .icon:hover {
            cursor: pointer;
            opacity: 0.8;
        }

        img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: rgb(85, 85, 85);
        }
    }

}
</style>