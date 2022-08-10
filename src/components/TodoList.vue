<template>
  <div class="overflow-auto">
    <div
      class="todo-list flex flex-col items-center justify-center overflow-auto pt-8"
      v-if="items.length === 0"
    >
      <p class="text-xl">You are zen for now ...</p>
    </div>
    <div
      v-else
      class="todo-list flex flex-col items-center justify-center overflow-auto pt-8"
    >
      <TodoItem
        v-for="(item, index) in items"
        :key="item.title"
        :title="item.title"
        :text="item.text"
        @delete="$emit('delete', index)"
        @done="$emit('done', index)"
      ></TodoItem>
    </div>
  </div>
</template>

<script setup>
import TodoItem from "./TodoItem";
import { defineProps } from "vue";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.todo-list {
  /* max-height: calc(100vh - 500px); */
}
</style>
