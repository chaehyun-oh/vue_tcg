<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'greate' }">
      <button type="button" @click="activate('greate')">Greate</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  //   data() {
  //     return {
  //       activeOption: this.modelValue,
  //     };
  //   },
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(opt) {
      this.$emit('update:modelValue', opt);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #0076bb;
}
.active button {
  color: #0076bb;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
