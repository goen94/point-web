<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import cardItem from './card-item.vue'
let windowWidth = ref(window.innerWidth)

const onWidthChange = () => (windowWidth.value = window.innerWidth)
onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))

const width = computed(() => windowWidth.value)
</script>

<template>
  <div>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <div class="grid mt-10" v-if="width < 550">
        <cardItem />
      </div>
      <div class="grid mt-10 justify-between gap-x-6 gap-y-8 md:grid-cols-3" v-else>
        <cardItem />
        <cardItem />
        <cardItem />
      </div>
      <button
        type="button"
        class="group absolute top-0 z-30 h-full flex cursor-pointer items-center justify-center px-4 -left-13 focus:outline-none md:-left-25"
        data-carousel-prev
      >
        <span
          class="h-8 w-8 inline-flex items-center justify-center rounded-full bg-gray-200 md:h-16 md:w-16"
        >
          <svg
            aria-hidden="true"
            class="h-8 w-8 text-white sm:h-6 sm:w-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="group absolute top-0 z-30 h-full flex cursor-pointer items-center justify-center px-4 -right-13 focus:outline-none md:-right-25"
        data-carousel-next
      >
        <span
          class="h-8 w-8 inline-flex items-center justify-center rounded-full bg-gray-200 md:h-16 md:w-16"
        >
          <svg
            aria-hidden="true"
            class="h-8 w-8 text-white sm:h-6 sm:w-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
</template>
