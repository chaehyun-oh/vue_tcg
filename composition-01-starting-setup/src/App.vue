<template>
  <section class="container">
    <user-data :user-name="uName" :age="age"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <!-- <p>{{ uName }}</p> -->
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { reactive, ref, computed, watch } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: { UserData },
  setup() {
    // const uName = ref('Maximilian');
    const uAge = ref(31);

    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    const user = reactive({
      name: 'Maximilian',
      age: 31,
    });

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], function (newVals, oldVals) {
      // console.log('Old age:' + oldVal);
      // console.log('New age:' + newVal);
      console.log('Old age:' + oldVals[0]);
      console.log('New age:' + newVals[0]);

      console.log('Old name:' + oldVals[1]);
      console.log('New name:' + newVals[1]);
    });

    function setNewData() {
      user.age = 32;
      // uAge.value = 33;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    function setFirstName(e) {
      firstName.value = e.target.value;
    }

    // function setLastName(e) {
    //   lastName.value = e.target.value;
    // }

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
      // setLastName,
      uName,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
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
