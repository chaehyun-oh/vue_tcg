<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['userName', 'age'],
  setup() {
    const uName = computed(function () {
      return;
    });
    return {
      userName: uName,
    };
  },
};
</script>
