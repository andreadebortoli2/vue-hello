// console.log('test');

const { createApp } = Vue

const app = createApp({
  data() {
    return {
        greatings: 'hello'
    }
  }
}).mount('#app')