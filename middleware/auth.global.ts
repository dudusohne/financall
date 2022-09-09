export default defineNuxtRouteMiddleware((to, from) => {
  const userCookie = useCookie<any>("userCookie");

  if (to.path !== "/" && !userCookie.value?.stsTokenManager?.accessToken) {
    navigateTo("/");
  }
});
