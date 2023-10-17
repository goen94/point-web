<script setup lang="ts">
import { usePointSoftware } from '@/stores/point-software'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

const pointSoftwareStore = usePointSoftware()

const { softwares } = storeToRefs(pointSoftwareStore)

const activeSoftware = ref<number>(0)

const selectSoftware = (index: number) => {
  activeSoftware.value = index
  pointSoftwareStore.setSelected(index)
}

const detail = computed(() => {
  return pointSoftwareStore.getSelectedSoftware();
});
</script>

<template>
  <div class="flex-1 pt-8 space-y-4 md:pt-16 md:space-y-12">
    <h1 class="text-center text-3xl font-bold text-orange-400 lg:text-5xl">
      Coba Gratis <span class="text-black">Software Kami!</span>
    </h1>
    <div
      class="grid grid-cols-1 w-full gap-y-8 md:grid-cols-5 md:gap-5 md:divide-x-2 md:divide-green-700"
    >
      <div class="md:col-span-2 space-y-2 md:px-8 md:space-y-5">
        <h1 class="text-center text-lg font-bold text-green-700 md:ml-6 md:text-left lg:text-2xl">
          Point Software
        </h1>
        <div class="h-150px overflow-auto px-10 md:h-full space-y-4 md:px-0">
          <h1 v-for="(item, index) in softwares" :key="index">
            <h1
              :class="[
                activeSoftware == index
                  ? 'md:w-full rounded-8 from-green-700 to-green-500 bg-gradient-to-r text-center md:text-left py-3 md:pl-6 text-xs lg:text-lg font-bold text-white'
                  : 'md:ml-6 text-xs text-center md:text-left lg:text-lg font-medium text-black hover:cursor-pointer'
              ]"
              @click="selectSoftware(index)"
            >
              {{ item.title }}
            </h1>
          </h1>
        </div>
      </div>
      <div class="col-span-3 space-y-2 md:px-10 md:space-y-5">
        <h1 class="text-center text-lg font-bold text-black md:text-left lg:text-3xl">
          {{ detail.title }}
        </h1>
        <h1 class="text-center text-sm font-bold text-green-700 md:text-left lg:text-lg">
          {{ detail.subTitle }}
        </h1>
        <p class="text-center text-xs text-gray-5 md:text-left md:text-sm">
          {{ detail.detail }}
        </p>
        <div class="flex pt-6 space-x-2 md:pt-0 md:space-x-4">
          <div class="w-1/3 flex flex-col" v-for="(img, index) in detail.images" :key="index">
            <img class="rounded" src="@/assets/images/no_image_available.jpg" />
          </div>
        </div>
        <router-link :to="detail.link">
          <div class="mt-4 flex items-center text-center md:space-x-8">
            <h1 class="ml-auto mr-2 text-sm font-bold text-green-700 md:ml-0 md:mr-0">
              Pelajari Lebih Lanjut
            </h1>
            <div class="i-mdi-chevron-right mr-auto text-green-700"></div>
          </div>
        </router-link>
        <div class="flex">
          <router-link :to="'/signup'" class="mx-auto text-center">
            <button
              type="button"
              class="mx-auto mt-2 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white md:mx-0"
            >
              COBA GRATIS!
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
