<template>
    <div class="profile">
        <fin-header />
        <fin-tabs />
        <div class="container">
            <img :src="user?.photoURL" alt="user" />
            <span class="user-name">{{ user?.displayName }}</span>
            <span class="user-email">{{ user?.email }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>import { User } from '~~/types';

const user = useCookie<User>('userCookie')
</script>

<style lang="scss" scoped>
.profile {
    display: flex;
    flex-direction: column;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4rem;

        img {
            max-width: 6rem;
            border-radius: 50px;
            border: 4px solid #1a1919;
        }

        span {
            font-weight: bold;
            font-family: "Roboto";
        }

        span.user-name {
            font-weight: bold;
            font-size: 28px;
            color: #1a1919;

            margin-top: 1rem;
        }

        span.user-email {
            font-weight: medium;
            font-size: 16px;
            color: #3a3a3a;

            margin-top: 0.3rem;
        }
    }
}
</style>