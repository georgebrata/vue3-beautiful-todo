<template>
  <div class="flex flex-col h-screen justify-between">
    <header class="h-10 my-10 text-2xl">
      //TODO
      <p class="text-sm">{{ doneCount }} done</p>
    </header>
    <TodoList :items="list" @delete="deleteItem" @done="doneItem"></TodoList>
    <AddItem @add="addItem"></AddItem>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import TodoList from "./components/TodoList.vue";
import AddItem from "./components/AddItem.vue";

const doneCount = ref(0);

const list = reactive([
  {
    title: "Initial item",
  },
]);

const addItem = (item) => {
  list.unshift(item);
};

const deleteItem = (index) => {
  list.splice(index, 1);
};

const doneItem = (index) => {
  doneCount.value++;
  list.splice(index, 1);
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
