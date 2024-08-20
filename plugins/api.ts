import { useUserStore } from "../store/user.js"
export default defineNuxtPlugin((nuxtApp) => {
    // const { session } = useUserSession()
    const userStore = useUserStore()
    const token = 'xxxx'
    const api = $fetch.create({
        baseURL: 'http://localhost:10087',
        onRequest({ request, options, error }) {
            if (true) {
            // if (userStore.userInfo.token) {
              const headers = options.headers ||= {}
              if (Array.isArray(headers)) {
                headers.push(['Authorization', `Bearer ${token}`])
              } else if (headers instanceof Headers) {
                headers.set('Authorization', `Bearer ${token}`)
              } else {
                headers.Authorization = `Bearer ${token}`
              }
            }
            if ((userStore.userInfo as any).token) {
                console.log("999999999999999")
            }
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                await nuxtApp.runWithContext(() => navigateTo('/login'))
            }
        }
    })

    // Expose to useNuxtApp().$api
    return {
        provide: {
            api
        }
    }
})
