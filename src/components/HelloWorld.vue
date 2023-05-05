<template>
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
    <vxe-button content="默认尺寸" />
    <vxe-form :data="demo1.formData1" @submit="searchEvent" @reset="resetEvent">
      <vxe-form-item title="名称" field="name" :item-render="{}">
        <template #default="{ data }">
          <vxe-input v-model="data.name" placeholder="请输入名称" clearable />
        </template>
      </vxe-form-item>
      <vxe-form-item title="昵称" field="nickname" :item-render="{}">
        <template #default="{ data }">
          <vxe-input v-model="data.nickname" placeholder="请输入昵称" />
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" :item-render="{}" :folding="show" :visible="false">
        <template #default="{ data }">
          <vxe-select v-model="data.sex" placeholder="请选择性别" clearable>
            <vxe-option value="1" label="女" />
            <vxe-option value="2" label="男" />
          </vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item>
        <template #default>
          <vxe-button type="submit" status="primary" content="默认尺寸" />
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from "vue";
  import { message } from "ant-design-vue";
  import { testStore } from "@/store/testStore";
  const store = testStore();

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
  const demo1 = reactive({
    formData1: {
      name: "",
      nickname: "",
      sex: "1",
    },
  });
  const show = ref(true);
  const searchEvent = () => {
    show.value = false;
  };
  const resetEvent = () => {};
</script>

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
