<script setup lang="ts">
  import { ref } from "vue";
  import { message } from "ant-design-vue";
  import { testStore } from "@/store/testStore";
  const store = testStore();

  defineProps<{ msg: string }>();

  const count = ref(0);
  const array = [1, 2, 3];

  console.log(array);
  const ob = {
    a: 1,
    b: "aaa",
    c: 123,
  };

  const testAnt = () => {
    message.success("Test Message");
    store.$patch({
      id: "123456",
      name: "zoushen",
    });
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
  <img @click="testAnt" src="/src/assets/baobao.png" />
  <div class="m-t-15 box">
    <span>{{ store.id }}，{{ store.name }}</span>
    <a-button
      class="m-l-15"
      @click="
        () => {
          store.$patch({
            id: '123456',
            name: 'zoushen',
          });
        }
      "
      >修改store</a-button
    >
    <a-button
      class="m-l-15"
      @click="
        () => {
          store.$reset();
        }
      "
      >重置store</a-button
    >
  </div>
</template>

<style scoped lang="less">
  .read-the-docs {
    color: #888;
  }
  img {
    width: 600px;
    height: 300px;
  }
  .box {
    span {
      color: pink;
    }
  }
</style>
