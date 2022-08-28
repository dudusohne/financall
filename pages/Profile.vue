<template>
    <div class="profile">
        <div class="triangle"></div>
        <fin-header />
        <tabs />
        <div class="container">
            <img :src="user?.photoURL" alt="user" />
            <span>{{ user?.displayName }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuthUser } from '~~/composables/useAuthUser';
const user: any = useAuthUser()
</script>

<style lang="scss" scoped>
.profile {

    .container {
        display: flex;
        flex-direction: column;

        img { 
            max-width: 15rem;
        }
    }
}
</style>