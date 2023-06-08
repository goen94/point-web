<template>
  <div class="flex py-10">
    <div class="flex-col">
      <div class="container">
        <h5 class="mx-auto text-center text-3xl font-bold text-black md:text-4xl">
          Sudah Dipercaya <span class="text-orange-400">2000+</span> Pemilik Bisnis
        </h5>
        <div class="mt-8 flex overflow-hidden border-b border-b-gray-200">
          <ul
            class="no-scrollbar max-w-screen inline-flex items-center overflow-x-scroll scroll-smooth text-center text-sm font-bold -mb-px space-x-15 md:space-x-25"
          >
            <li class="flex-1" v-for="(tab, index) in tabs" :key="index">
              <a
                class="relative flex items-center justify-center gap-2 border-b-2 px-1 py-3 hover:cursor-pointer hover:text-green-700"
                :class="[
                  activeTab === index
                    ? 'border-green-700 text-green-700'
                    : 'text-gray-5 border-transparent'
                ]"
                @click="selectedTab(index)"
              >
                {{ tab }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mx-auto max-w-screen flex md:max-w-90%">
        <div class="flex-none">
          <button
            class="top-0 z-0 mx-4 h-full flex cursor-pointer items-center justify-center focus:outline-none"
            @click="prev"
          >
            <span
              class="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-200"
            >
              <div class="i-mdi-chevron-left text-white"></div>
            </span>
          </button>
        </div>
        <div
          class="no-scrollbar inner inline-flex grow snap-x gap-x-5 overflow-x-scroll scroll-smooth py-4"
          ref="inner"
        >
          <div
            v-for="card in 3"
            :id="'card_' + card"
            :key="card"
            class="max-w-full flex flex-none snap-center"
          >
            <div
              class="mt-10 flex flex-wrap justify-between gap-x-6 gap-y-4 text-center md:flex-nowrap md:text-left"
            >
              <h1 class="w-full text-lg font-bold md:hidden">Kopi Bara</h1>
              <div class="w-full items-center md:w-1/2">
                <img class="mx-auto max-h-50" src="@/assets/images/kopibara.png" />
              </div>
              <div class="w-full flex-col md:w-1/2 space-y-2">
                <h1 class="hidden text-lg font-bold text-black md:block">Kopi Bara</h1>
                <h1 class="text-lg font-bold text-green-700">Solusi Pointhub:</h1>
                <p class="text-sm text-gray-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-none">
          <button
            class="top-0 z-0 h-full flex cursor-pointer items-center justify-center px-4 focus:outline-none"
            @click="next"
          >
            <span
              class="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-200"
            >
              <div class="i-mdi-chevron-right text-white"></div>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const inner = ref()
const tabs = ref([
  'Food & Beverage',
  'Kategori Bisnis 1',
  'Kategori Bisnis 2',
  'Kategori Bisnis 3',
  'Kategori Bisnis 4'
])
const activeTab = ref(0)

const selectedTab = (index: number) => {
  activeTab.value = index
}

function calculate() {
  const innerWidth = inner.value
  console.log(innerWidth.clientWidth)
  console.log(innerWidth.getBoundingClientRect().left)
}

function next() {
  const container = inner.value
  const left = container.getBoundingClientRect().left
  const x = left + container.clientWidth * 1 + 2.5
  const element = findNextSlot(x)

  if (element) {
    const width = element.getBoundingClientRect().left - left
    if (width > 2.5) {
      container.scrollTo({ left: container.scrollLeft + width, behavior: 'smooth' })
      return
    }
  }

  const width = container.clientWidth * 1
  container.scrollTo({ left: container.scrollLeft + width, behavior: 'smooth' })
}

function prev() {
  const container = inner.value
  const left = container.getBoundingClientRect().left
  const x = left + container.clientWidth * -1 + 2.5
  const element = findPrevSlot(x)

  if (element) {
    const width = element.getBoundingClientRect().left - left
    container.scrollTo({ left: container.scrollLeft + width, behavior: 'smooth' })
    return
  }

  const width = container.clientWidth * 1
  container.scrollTo({ left: container.scrollLeft - width, behavior: 'smooth' })
}

function findNextSlot(x: number) {
  const children = inner.value.children

  for (let i = 0; i < children.length; i++) {
    const rect = children[i].getBoundingClientRect()

    if (rect.right <= x) {
      continue
    } else if (rect.left <= x) {
      return children[i]
    }

    if (x <= rect.left) {
      return children[i]
    }
  }
}

function findPrevSlot(x: number) {
  const children = inner.value.children

  for (let i = 0; i < children.length; i++) {
    const rect = children[i].getBoundingClientRect()

    if (rect.left <= x && x <= rect.right) {
      return children[i]
    }

    if (x <= rect.left) {
      return children[i]
    }
  }
}

onMounted(() => {
  calculate()
})
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.inner {
  transition: transform 0.2s;
}
</style>
