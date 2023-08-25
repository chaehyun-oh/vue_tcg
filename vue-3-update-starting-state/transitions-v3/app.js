Vue.createApp({
  data: {
    isVisible: true
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    }
  },
}).mount('#app');
