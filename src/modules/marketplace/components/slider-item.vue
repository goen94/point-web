<template>
  <div class="w-full">
    <div class="overflow-hidden">
      <div ref="inner" :style="innerStyles" class="inner">
        <div v-for="card in cards" :key="card" class="inline-flex whitespace-normal py-8">
          <div class="ml-1 max-w-300px flex-col overflow-hidden rounded-lg shadow-lg md:mr-4">
            <img
              class="max-h-250px w-full object-cover"
              src="@/assets/images/No_Image_Available.jpg"
            />
            <div class="p-4">
              <h1 class="text-lg font-bold">Nama Aplikasi</h1>
              <h3 class="text-sm text-gray">
                <i>oleh</i> <span class="font-medium">Nama Pengembang</span>
              </h3>
              <h1 class="mt-2 break-all text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </h1>
              <div class="grid grid-cols-2 mt-2">
                <div>
                  <h1 class="text-lg font-bold">Rp. 000.000</h1>
                  <div class="flex items-center space-x-4">
                    <p class="text-2.5 font-bold text-green-700">Detail Software</p>
                    <div class="i-mdi-chevron-right text-green-700"></div>
                  </div>
                </div>
                <div class="mt-auto text-end">
                  <button
                    type="button"
                    class="border border-orange-500 rounded-8 bg-white px-4 py-2 text-sm font-bold text-orange-500"
                  >
                    COBA GRATIS!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    class="absolute top-0 z-0 h-full flex cursor-pointer items-center justify-center px-4 -left-3 md:left-15 focus:outline-none"
    @click="prev"
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
    </span>
  </button>
  <button
    class="absolute -right-4 md:right-15 top-0 z-30 h-full flex cursor-pointer items-center justify-center px-4 focus:outline-none"
    @click="next"
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
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const cards = ref([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8])
const innerStyles = ref({})
const step = ref('')
const transitioning = ref(false)
const inner = ref()

function setStep() {
  const innerWidth = inner.value.scrollWidth
  const totalCards = cards.value.length
  step.value = `${innerWidth / totalCards}px`
}

function next() {
  if (transitioning.value) return
  transitioning.value = true

  moveLeft()
  afterTransition(() => {
    const card = cards.value.shift()
    cards.value.push(card as number)
    resetTranslate()
    transitioning.value = false
  })
}

function prev() {
  if (transitioning.value) return
  transitioning.value = true

  moveRight()
  afterTransition(() => {
    const card = cards.value.pop()
    cards.value.unshift(card as number)
    resetTranslate()
    transitioning.value = false
  })
}

function moveLeft() {
  innerStyles.value = {
    transform: `translateX(-${step.value})
                  translateX(-${step.value})`
  }
}

function moveRight() {
  innerStyles.value = {
    transform: `translateX(${step.value})
                  translateX(-${step.value})`
  }
}

function afterTransition(callback: any) {
  const listener = () => {
    callback()
    inner.value.removeEventListener('transitionend', listener)
  }
  inner.value.addEventListener('transitionend', listener)
}

function resetTranslate() {
  innerStyles.value = {
    transition: 'none',
    transform: `translateX(-${step.value})`
  }
}

onMounted(() => {
  setStep()
  resetTranslate()
})
</script>

<style scoped>
.carousel {
  width: 170px;
  overflow: hidden;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;
  /* optional */
  height: 40px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
