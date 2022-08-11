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
import { computed } from "vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import TodoList from "./components/TodoList.vue";
import AddItem from "./components/AddItem.vue";
const store = useStore();
const list = computed(() => store.state.items);
const doneCount = computed(() => store.state.doneCount);
const addItem = (item) => {
  store.dispatch("add", {
    title: item,
    date: new Date(),
  });
};
const deleteItem = (index) => {
  store.dispatch("delete", index);
};
const doneItem = (index) => {
  store.dispatch("done", index);
};

onMounted(() => {
  store.commit("INIT");
});
</script>
