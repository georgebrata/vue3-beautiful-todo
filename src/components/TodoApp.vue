<template>
  <header class="h-10 my-5 text-2xl">
    //TODO
    <p class="text-sm">{{ doneCount }} done</p>
  </header>
  <TodoList
    id="list"
    :items="list"
    @delete="deleteItem"
    @done="doneItem"
  ></TodoList>
  <AddItem @add="addItem"></AddItem>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TodoList from "./TodoList.vue";
import AddItem from "./AddItem.vue";

const store = useStore();
const list = computed(() => store.state.items);
const doneCount = computed(() => store.state.doneCount);

const addItem = (item) => {
  store.dispatch("add", {
    title: item,
    date: new Date(),
  });
  scrollListToTop();
};
const deleteItem = (index) => {
  store.dispatch("delete", index);
};
const doneItem = (index) => {
  store.dispatch("done", index);
};
const scrollListToTop = () => {
  document.getElementById("list").scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
