const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      // fullname: '',
      lastName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = ''
    //   } else {
    //     this.fullname = value + ' ' + 'last name';
    //   }
    // }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    // outputFullname() {
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Last name';
    // },
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
