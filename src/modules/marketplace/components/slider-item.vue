<template>
  <div class="flex">
    <div class="flex-none">
      <button
        class="top-0 z-0 h-full flex cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span
          class="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-200"
          @click="prev"
        >
          <div class="i-mdi-chevron-left text-white"></div>
        </span>
      </button>
    </div>
    <div
      class="no-scrollbar inner max-w-screen inline-flex grow snap-x gap-x-5 overflow-x-scroll scroll-smooth py-4"
      ref="inner"
    >
      <div
        v-for="card in 15"
        :id="'card_' + card"
        :key="card"
        class="max-w-200px flex flex-none snap-center lg:max-w-365px"
      >
        <cardItem :item="items[0]" />
      </div>
    </div>
    <div class="hidden flex-none md:block">
      <button
        class="top-0 z-30 h-full flex cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span
          class="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-200"
          @click="next"
        >
          <div class="i-mdi-chevron-right text-white"></div>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMarketplaceItem } from '@/stores/marketplace-item'
import cardItem from './card-item.vue'
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const inner = ref()

const itemStore = useMarketplaceItem()

const { items } = storeToRefs(itemStore)

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
