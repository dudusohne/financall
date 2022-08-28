<template>
    <div class="fin-entry-dark" :class="!!props.payd ? 'payd' : ''">
        <div class="left-items">
            <span class="name" :class="!!props.payd ? 'text-payd' : ''">{{ props.name }}</span>
            <span class="desc" :class="!!props.payd ? 'text-payd' : ''">{{ props.desc }}</span>
        </div>
        <div class="right-items">
            <span class="value" :class="!!props.payd ? 'text-payd' : ''">{{ props.value }}</span>
            <span class="date" :class="!!props.payd ? 'text-payd' : ''">{{ props.date }}</span>
        </div>
        <div class="buttons">
            <button @click="$emit('check')" v-show="!props.payd" class="green">
                <MaterialIconCheckCircleOutline class="icon-2" />
            </button>
            <button @click="$emit('remove')" class="red">
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
    payd?: boolean;
    remove?: any;
    check?: any;
}

const props = withDefaults(defineProps<EntryProps>(), {
    desc: '',
    payd: false
});
</script>

<style lang="scss" scoped>
.fin-entry-dark {
    display: flex;
    flex-direction: row;
    min-height: 3.5rem;
    max-height: 3.5rem;
    width: 90%;

    padding-left: 1rem;

    justify-content: space-between;
    align-items: center;

    border-radius: 12px;
    border: 1px solid rgb(184, 184, 184);

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
            font-size: 1.3rem;
            font-family: "Roboto";
            color: #1a1919;
            letter-spacing: 1.5px;
            font-weight: bold;
            font-variant: small-caps;
        }

        .name.text-payd {
            font-size: 1.2rem;
            font-family: "Roboto";
            color: #8b8b8b;
            text-decoration: line-through solid #8b8b8b;
        }

        .desc {
            font-size: 1.1rem;
            font-weight: medium;
            font-family: "Roboto";
            color: #1a1919;
            letter-spacing: 2.2px;
            font-variant: small-caps;
            text-transform: lowercase;
        }

        .desc.text-payd {
            font-size: 1.2rem;
            font-weight: bold;
            font-family: "Roboto";
            letter-spacing: 2px;
            color: #8b8b8b;
            text-decoration: line-through solid #8b8b8b;
        }
    }

    .right-items {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;

        .value {
            font-size: 1.3rem;
            font-family: "Roboto";
            color: #1a1919;
            letter-spacing: 2.2px;
            font-weight: bold;
            font-variant: small-caps;
        }

        .value.text-payd {
            font-size: 1.2rem;
            font-weight: bold;
            font-family: "Roboto";
            letter-spacing: 2px;
            color: #9e9c9c;
            text-decoration: line-through solid #8b8b8b;
        }

        .date {
            font-size: 1.3rem;
            font-family: "Roboto";
            color: #333232;
            letter-spacing: 2.2px;
            font-weight: bold;
            font-variant: small-caps;
        }

        .date.text-payd {
            font-size: 1.2rem;
            font-weight: bold;
            font-family: "Roboto";
            letter-spacing: 2px;
            color: #8b8b8b;
            text-decoration: line-through solid #8b8b8b;
        }
    }

    .buttons {
        display: flex;
        flex-direction: row;

        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;

        :hover {
            transform: scale(1.03);
            cursor: pointer;
        }

        button {
            height: 5.7vh;
            background-color: #eeeeee;
            margin-right: 4px;

            border-radius: 8px;
            border: 1px solid #333;

            .icon {
                color: red;
            }


            .icon-2 {
                color: green;
            }
        }

        button.green {
            border-color: rgba(55, 158, 55, 0.192);
            background-color: rgba(55, 158, 55, 0.192);
            width: 2.8rem;
        }

        button.green:hover {
            border-color: rgba(0, 0, 0, 0.192);
            background-color: rgba(255, 255, 255, 0.192);
        }

        button.red {
            border-color: rgba(158, 55, 55, 0.192);
            background-color: rgba(158, 55, 55, 0.192);
        }

        button.red:hover {
            border-color: rgba(0, 0, 0, 0.192);
            background-color: rgba(255, 255, 255, 0.192);
        }
    }
}

div.fin-entry-dark:hover {
    background-image: linear-gradient(25deg, #4cd68a, #47ee6b 50%);
    cursor: pointer;
    transition: 0.3s ease;
    border-color: rgb(241, 241, 241);
}

div.fin-entry-dark.payd {
    background-image: linear-gradient(25deg, #e2e4e0, #e2e4e0 50%);
    font-style: italic;
    border-radius: 5px;
    border: none;
}

div.fin-entry-dark.payd:hover {
    cursor: default;
}
</style>