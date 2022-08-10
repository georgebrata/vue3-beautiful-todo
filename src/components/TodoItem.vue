<template>
  <div
    class="bg-white shadow-m p-4 rounded-2xl border-2 border-gray-50 my-2 w-2/3 overflow-hidden"
  >
    <div class="flex flex-col">
      <div>
        <h2 class="font-bold text-gray-600 text-left">{{ title }}</h2>
      </div>
      <div class="w-full place-items-end text-right">
        <button
          @click="$emit('done')"
          class="hover:text-blue text-xs font-medium mr-4"
        >
          Complete
        </button>
        <button
          @click="$emit('delete')"
          class="hover:text-red text-xs font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "title",
  },
  text: {
    type: String,
    default: "text",
  },
});
</script>
