<template>
    <div class="fin-header">
        <div class="logo">
            <span>financ</span>
            <p>ALL</p>
        </div>
        <img :src="user?.photoURL" alt="user" />
    </div>
</template>

<script setup lang="ts">
import { useAuthUser } from '~~/composables/useAuthUser'

const user: any = useAuthUser()
console.log(user.value)
</script>

<style lang="scss">
.fin-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;

    align-items: center;
    justify-content: space-between;

    background-color:
        #1a1919;

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

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

    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: rgb(85, 85, 85);

        margin-right: 3%;
    }
}
</style>