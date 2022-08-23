<template>
    <div class="fin-entry-dark">
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
.fin-entry-dark {
    display: flex;
    flex-direction: row;
    min-height: 3.2rem;
    max-height: 3.3rem;
    width: 90%;

    padding-left: 1rem;

    justify-content: space-between;
    align-items: center;

    border-radius: 12px;
    border: 1px solid rgb(184, 184, 184);

    /* background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d); */
    /* background-image: linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% ); */
    background-image: linear-gradient(95.2deg, rgb(237, 252, 173) 26.8%, rgb(234, 246, 192) 64%);
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
            font-size: 1.2rem;
            font-weight: bold;
            font-family: "Roboto";
            letter-spacing: 2px;
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
            font-size: 1.2rem;
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
        flex-direction: row;

        /* background-color: #161616; */
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;

        /* box-shadow: 1px 1px rgb(175, 175, 175); */

        button {
            height: 5vh;
            background-color: #eeeeee;
            margin-right: 4px;

            border-radius: 8px;
            border: 1px solid #333;

            :hover {
                transform: scale(1.03);
                cursor: pointer;
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

div.fin-entry-dark:hover {
    /* background: linear-gradient(to right, #c6ffcd, #fbfcb5, #79f77f); */
    background-image: linear-gradient(25deg,#4cd68a,#47ee6b 50%);
    cursor: pointer;
    transition: 0.3s ease;
    border-color: rgb(241, 241, 241);
}
</style>