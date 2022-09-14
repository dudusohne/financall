import { User } from "~~/types";

export default defineNuxtRouteMiddleware((to, from) => {
  const userCookie = useCookie<User>("userCookie");

  if (to.path !== "/" && !userCookie.value?.stsTokenManager?.accessToken) {
    navigateTo("/");
  }
});
