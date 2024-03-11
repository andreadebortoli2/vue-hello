// console.log('test');

const { createApp } = Vue

const app = createApp({
  data() {
    return {
        greatings: 'hello world.',
        imageSrc: './img/hello-world.jpg',
        imgWidth: 500,
        ib: 'inline-block',
        isActive: true,
    }
  },
}).mount('#app')