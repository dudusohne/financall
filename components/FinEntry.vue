<template>
    <div class="fin-entry">
        <div class="left-items">
            <span class="name">{{ props.name }}</span>
            <span class="desc">{{ props.desc }}</span>
        </div>
        <div class="right-items">
            <span class="value">{{ props.value }}</span>
            <span class="date">{{ props.date }}</span>
        </div>
        <div class="buttons">
            <button>x</button>
            <button>v</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface EntryProps {
    name: string;
    desc?: string;
    date: string;
    value: string;
    done?: boolean;
}

const props = withDefaults(defineProps<EntryProps>(), {
    desc: '',
    done: false
});
</script>

<style lang="scss" scoped>
.fin-entry {
    display: flex;
    flex-direction: row;
    min-height: 3.2rem;
    max-height: 3.3rem;
    min-width: 20rem;

    justify-content: space-between;
    align-items: center;

    border-radius: 12px;

    background-image:
        linear-gradient(205deg,
            rgb(92, 194, 106) 0%,
            rgb(109, 185, 119) 8.1%,
            hsl(128.02, 70.83%, 76.28%) 15.5%,
            hsl(128.42, 65.06%, 74.28%) 22.5%,
            hsl(128.95, 58.85%, 71.72%) 29%,
            hsl(129.58, 52.88%, 68.73%) 35.3%,
            hsl(130.31, 47.53%, 65.44%) 41.2%,
            hsl(131.1, 42.91%, 61.98%) 47.1%,
            hsl(131.93, 39.04%, 58.48%) 52.9%,
            hsl(132.79, 35.86%, 55.07%) 58.8%,
            rgb(99, 185, 119) 64.7%,
            rgb(93, 180, 115) 71%,
            rgb(92, 179, 115) 77.5%,
            rgb(97, 177, 118) 84.5%,
            rgb(96, 182, 119) 91.9%,
            rgb(97, 182, 120) 100%);

    margin-top: 10px;

    .left-items {
        display: flex;
        flex-direction: column;
        max-width: 15rem;
        justify-content: space-between;
        padding: 5px;

        @media only screen and (max-device-width: 480px) {
            max-width: 8rem;
        }

        .name {
            font-size: 1rem;
            font-weight: bold;
            font-family: "Roboto";
            color: #1a1919;
        }

        .desc {
            font-size: 1rem;
            font-weight: medium;
            font-family: "Roboto";
            color: #1a1919;
        }
    }

    .right-items {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;

        .value {
            font-size: 1rem;
            font-weight: bold;
            font-family: "Roboto";
            color: #1a1919;
        }

        .date {
            font-size: 1rem;
            font-weight: bold;
            font-family: "Roboto";
            color: #1a1919;
        }
    }

    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        height: 2.3rem;

        background-color: #1a1919;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;

        button {
            border: none;
            background-color: none;
        }
    }
}
</style>