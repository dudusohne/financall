import { Ref } from "vue";
import { User } from "~~/types";

export const useAuthUser: () => Ref<User> = () => useState('authUser', () => null)