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

<script lang="ts" setup>
import { User } from '~~/types';

const user = useCookie<User>('userCookie')
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

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
            border: 4px solid $primary;
        }

        span {
            font-weight: bold;
            font-family: $font;
        }

        span.user-name {
            font-weight: bold;
            font-size: 28px;
            color: $primary;

            margin-top: 1rem;
        }

        span.user-email {
            font-weight: medium;
            font-size: 16px;
            color: $secondary;

            margin-top: 0.3rem;
        }
    }
}
</style>