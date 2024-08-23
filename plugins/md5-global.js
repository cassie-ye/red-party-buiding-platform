import md5 from 'md5';

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    window.md5 = md5;
  }
});
