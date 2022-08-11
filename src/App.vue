<template>
  <div class="flex flex-col h-screen justify-between">
    <TodoApp></TodoApp>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
import TodoApp from "./components/TodoApp.vue";

const store = useStore();

onMounted(() => {
  store.commit("INIT_FROM_LOCAL");
});
</script>
