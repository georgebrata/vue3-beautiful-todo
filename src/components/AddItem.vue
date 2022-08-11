<template>
  <form
    class="w-full bg-white rounded-lg px-8 pt-2"
    @submit.prevent="() => add(title)"
  >
    <div class="flex flex-wrap -mx-3 mb-6">
      <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new todo item</h2>
      <div class="w-full md:w-full px-3 mb-2 mt-2">
        <input
          type="text"
          v-model="title"
          class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          name="title"
          placeholder="Title"
          required
        />
      </div>
      <div class="w-full md:w-full flex items-start md:w-full px-3">
        <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
          <svg
            fill="none"
            class="w-5 h-5 text-gray-600 mr-1"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="text-xs md:text-sm pt-px">Be concise.</p>
        </div>
        <div class="-mr-1">
          <button
            class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray rounded-lg tracking-wide mr-1 hover:bg-gray cursor-pointer hover:font-bold"
            value="Add item"
          >
            Add item
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["add"]);
const title = ref("");

const add = () => {
  emit("add", title.value);
  title.value = "";
};
</script>
