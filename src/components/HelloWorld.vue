<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{ msg: string }>();

  const count = ref(0);
  const array = [1, 2, 3];

  console.log(array);
  const ob = {
    a: 1,
    b: 'aaa',
    c: 123,
  };
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <img src="/src/assets/baobao.png" />
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
  img {
    width: 600px;
    height: 300px;
  }
</style>
