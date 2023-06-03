<template>
  <div class="w-full flex">
    <div class="flex-none md:ml-10">
      <button
        type="button"
        class="h-full flex cursor-pointer items-center justify-center px-4"
        data-carousel-prev
      >
        <span class="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-200">
          <div class="i-mdi-chevron-left text-white"></div>
        </span>
      </button>
    </div>
    <div class="max-w-60vw grow md:max-w-100vw md:px-20">
      <div class="flex-col py-10 md:p-10">
        <h1 class="mx-auto text-center text-3xl font-bold text-black md:text-4xl">
          Sudah Dipercaya <span class="text-orange-400">2000+</span> Pemilik Bisnis
        </h1>
        <div class="mt-8 overflow-hidden border-b border-b-gray-200">
          <ul class="flex items-center text-center text-sm font-bold -mb-px space-x-20">
            <li class="flex-1">
              <a
                href="#"
                class="relative flex items-center justify-center gap-2 border-b-2 border-green-700 px-1 py-3 text-green-700 hover:text-green-700"
              >
                Food & Beverage
              </a>
            </li>
            <li class="flex-1">
              <a
                href="#"
                class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-green-700"
              >
                Kategori Bisnis 1
              </a>
            </li>
            <li class="flex-1">
              <a
                href="#"
                class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-green-700"
              >
                Kategori Bisnis 2
              </a>
            </li>
            <li class="flex-1">
              <a
                href="#"
                class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-green-700"
              >
                Kategori Bisnis 3
              </a>
            </li>
            <li class="flex-1">
              <a
                href="#"
                class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-green-700"
                >Kategori Bisnis 4
              </a>
            </li>
          </ul>
        </div>
        <div id="default-carousel" class="relative w-full" data-carousel="slide">
          <div
            class="mt-10 flex flex-wrap justify-between gap-x-6 gap-y-4 text-center md:flex-nowrap md:text-left"
          >
            <h1 class="w-full text-lg font-bold md:hidden">Kopi Bara</h1>
            <div class="w-full items-center md:w-1/2">
              <img class="mx-auto max-h-50" src="@/assets/images/kopibara.png" />
            </div>
            <div class="w-full flex-col md:w-1/2 space-y-2">
              <h1 class="hidden text-lg font-bold md:block">Kopi Bara</h1>
              <h1 class="text-lg font-bold text-green-700">Solusi Pointhub:</h1>
              <p class="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-none md:mr-10">
      <button
        type="button"
        class="h-full flex cursor-pointer items-center justify-center px-4"
        data-carousel-prev
      >
        <span class="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-200">
          <div class="i-mdi-chevron-right text-white"></div>
        </span>
      </button>
    </div>
  </div>
</template>
