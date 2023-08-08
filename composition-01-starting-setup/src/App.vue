<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
      <p>{{ uName }}</p>
    </div>
  </section>
</template>

<script>
import { reactive, ref, computed } from 'vue';

export default {
  setup() {
    // const uName = ref('Maximilian');
    // const uAge = ref(31);

    const firstName = ref('');
    const lastName = ref('');

    const user = reactive({
      name: 'Maximilian',
      age: 31,
    });

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    function setNewData() {
      user.age = 32;
      // uAge.value = 33;
    }

    function setFirstName(e) {
      firstName.value = e.target.value;
    }

    function setLastName(e) {
      lastName.value = e.target.value;
    }

    // console.log(isRef(uAge));
    // console.log(isReactive(user));

    // setTimeout(function () {
    //   // uName.value = 'Max';
    //   // uAge.value = 32;

    //   // user.value.name = 'Max';
    //   // user.value.age = 32;

    //   user.name = 'Max';
    //   user.age = 32;
    // }, 2000);

    // const userRefs = toRefs(user);

    return {
      // userName: user.value.name,
      // age: user.value.age,
      user,
      setAge: setNewData,
      // userName: userRefs.name,
      // userAge: userRefs.age,
      setFirstName,
      setLastName,
      uName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
