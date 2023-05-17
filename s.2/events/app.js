const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Last name';
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(e) {
      alert('Submited.')
    },
    setName(e, lastName) {
      this.name = e.target.value;
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  },
});

app.mount('#events');
