<script setup lang="ts">
import type { IMarketplaceItem } from '@/stores/marketplace-item'

const props = defineProps<{
  item: IMarketplaceItem
}>()
</script>

<template>
  <div class="grid overflow-hidden rounded-lg shadow-lg">
    <img
      class="max-h-150px w-full object-cover lg:max-h-250px"
      src="@/assets/images/No_Image_Available.jpg"
    />
    <div class="p-3 lg:p-8">
      <h1 class="text-sm font-bold text-black lg:text-lg">{{ props.item.name }}</h1>
      <h3 class="text-xs text-gray lg:text-sm">
        <i>oleh</i> <span class="font-medium">{{ props.item.developer }}</span>
      </h3>
      <p class="mt-2 text-xs text-gray-5 lg:text-sm">
        {{ props.item.detail }}
      </p>
      <div class="grid grid-cols-2 mt-2">
        <div>
          <h1 class="text-xs font-bold text-black lg:text-lg">
            Rp. {{ props.item.price.toLocaleString('id-ID') }}
          </h1>
          <div class="flex items-center lg:space-x-4">
            <router-link :to="'/detail'">
              <p class="text-2 font-bold text-green-700 lg:text-2.5">Detail Software</p>
            </router-link>
            <div class="i-mdi-chevron-right text-green-700"></div>
          </div>
        </div>
        <div class="mt-auto text-end">
          <router-link :to="'/signup'">
            <button
              type="button"
              class="border border-orange-500 rounded-8 bg-white px-2 py-2 text-2 font-bold text-orange-500 lg:text-xs"
            >
              COBA GRATIS!
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
