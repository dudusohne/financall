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
            <button>
                <MaterialIconCheckCircleOutline class="icon-2" />
            </button>
            <button>
                <MaterialIconCloseCircleOutline class="icon" />
            </button>
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
    width: 90%;

    padding-left: 1rem;

    box-shadow: 1px 1px rgb(175, 175, 175);

    justify-content: space-between;
    align-items: center;

    border-radius: 12px;

    background-image:
        linear-gradient(205deg,
            rgb(161, 238, 171) 0%,
            rgb(170, 231, 178) 8.1%,
            rgb(203, 248, 209) 15.5%,
            rgb(175, 240, 184) 22.5%,
            rgb(174, 243, 185) 29%,
            rgb(159, 233, 171) 35.3%,
            rgb(164, 236, 176) 41.2%,
            rgb(180, 240, 191) 47.1%,
            rgb(179, 236, 191) 52.9%,
            rgb(173, 240, 188) 58.8%,
            rgb(161, 230, 177) 64.7%,
            rgb(154, 228, 173) 71%,
            rgb(151, 228, 172) 77.5%,
            rgb(164, 226, 181) 84.5%,
            rgb(185, 241, 200) 91.9%,
            rgb(210, 250, 221) 100%);

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
        /* justify-content: space-between;
        padding: 10px;
        height: 2.3rem; */

        background-color: #e4e4e4;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;

        box-shadow: 1px 1px rgb(175, 175, 175);

        button {
            border: none;
            background: none;

            :hover {
                transform: scale(1.03)
            }

            .icon {
                color: red;
            }

            .icon-2 {
                color: green;
            }
        }
    }
}
</style>