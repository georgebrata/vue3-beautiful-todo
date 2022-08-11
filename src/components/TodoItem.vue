<template>
  <div
    class="bg-white shadow-m p-4 rounded-2xl border-2 border-gray-50 my-2 w-full overflow-hidden"
  >
    <div class="flex flex-col">
      <div>
        <h2 class="font-bold text-gray-600 text-left">{{ title }}</h2>
      </div>
      <div class="flex justify-between">
        <span class="text-xs font-medium py-2">{{ humanDate(date) }}</span>
        <div class="w-1/2 place-items-end text-right">
          <button
            @click="$emit('done')"
            class="hover:text-blue text-sm font-medium mr-4"
          >
            Complete
          </button>
          <button
            @click="$emit('delete')"
            class="hover:text-red text-sm font-medium"
          >
            Delete
          </button>
        </div>
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
  date: [String, Date],
});

const humanDate = (date) => {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en-US", options);
};
</script>
