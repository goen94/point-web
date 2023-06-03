<script setup lang="ts"></script>

<template>
  <div class="grid mx-4 overflow-hidden rounded-lg shadow-lg">
    <img class="max-h-250px w-full object-cover" src="@/assets/images/No_Image_Available.jpg" />
    <div class="p-6 md:p-8">
      <h1 class="text-lg font-bold">Nama Aplikasi</h1>
      <h3 class="text-sm text-gray">
        <i>oleh</i> <span class="font-medium">Nama Pengembang</span>
      </h3>
      <p class="mt-2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
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
            class="border border-orange-500 rounded-8 bg-white px-2 py-2 text-xs font-bold text-orange-500"
          >
            COBA GRATIS!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
