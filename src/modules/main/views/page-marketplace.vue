<script setup lang="ts"></script>

<template>
  <section class="-mt-120px">
    <div class="bg-header relative">
      <div class="relative container">
        <div class="flex space-x-4">
          <div class="relative w-1/2 flex">
            <h1 class="pt-16 text-4xl font-bold text-white">
              Jelajahi Software Sesuai Dengan Kebutuhan Anda
            </h1>
          </div>
          <div class="w-1/2 flex-col">
            <img src="@/assets/images/Thumbnail-Marketplace.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-[#edf9f0]">
    <div class="mx-auto w-[60%]">
      <div class="flex-col py-10 text-center space-x-4 space-y-6">
        <h1 class="items-center text-center text-5xl font-medium text-black">
          Pointhub <span class="text-orange-500">Marketplace</span>
        </h1>
        <h6 class="mt-4 text-center">
          Jelajahi software yang dibuat oleh para developer/pengembang global, dengan jaminan bahwa
          software tersebut telah melalui peninjauan Tim Pointhub.
        </h6>
        <div class="relative mt-8 w-full">
          <input
            type="text"
            id="search"
            class="block w-full border border-green-300 rounded-8 bg-white px-5 py-3 text-xl text-gray-900 focus:outline-none"
            placeholder="Cari Software"
          />
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-green"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white">
    <div class="mx-auto w-[75%]">
      <div class="flex pt-8 divide-x-2 divide-gray">
        <div class="w-1/4 flex-col divide-y">
          <div class="flex items-center py-2 text-green">
            <svg
              class="mr-2 h-5 w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
              />
            </svg>
            Filter
          </div>
          <div class="flex-col py-4">
            Kategori Software
            <div class="mt-4 flex-col space-y-4">
              <div class="mb-4 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-green-500"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-black dark:text-gray-300"
                  >Kategori 1</label
                >
              </div>
              <div class="mb-4 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-green-500"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-black dark:text-gray-300"
                  >Kategori 1</label
                >
              </div>
              <div class="mb-4 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-green-500"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-medium text-black dark:text-gray-300"
                  >Kategori 1</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="w-3/4 flex-col">
          <div class="flex">
            <div class="ml-auto">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white dark:bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Dropdown button
                <svg
                  class="ml-2 h-4 w-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="ml-10 mt-10 flex justify-between space-x-10">
            <div class="w-1/2 flex-col overflow-hidden rounded-lg shadow-lg">
              <img
                class="max-h-[250px] w-full object-cover"
                src="@/assets/images/No_Image_Available.jpg"
              />
              <div class="p-4">
                <h1 class="text-sm">Nama Aplikasi</h1>
                <h3 class="text-sm">Oleh Nama Pengembang</h3>
                <h5 class="mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </h5>
                <div class="grid grid-cols-2 mt-2">
                  <div>
                    <span class="text-lg font-bold">Rp. 000.000</span>
                    <div class="flex items-center space-x-4">
                      <span class="text-2.5 font-bold text-green-700">Detail Software</span>
                      <div class="i-mdi-chevron-right text-green-700"></div>
                    </div>
                  </div>
                  <div class="mt-auto text-end">
                    <button
                      type="button"
                      class="border border-orange-100 rounded-8 bg-white px-4 py-2 text-sm font-bold text-orange-100"
                    >
                      COBA GRATIS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-1/2 flex-col overflow-hidden rounded-lg shadow-lg">
              <img
                class="max-h-[250px] w-full object-cover"
                src="@/assets/images/No_Image_Available.jpg"
              />
              <div class="p-4">
                <h1 class="text-sm">Nama Aplikasi</h1>
                <h3 class="text-sm">Oleh Nama Pengembang</h3>
                <h5 class="mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </h5>
                <div class="grid grid-cols-2 mt-2">
                  <div>
                    <span class="text-lg font-bold">Rp. 000.000</span>
                    <div class="flex items-center space-x-4">
                      <span class="text-2.5 font-bold text-green-700">Detail Software</span>
                      <div class="i-mdi-chevron-right text-green-700"></div>
                    </div>
                  </div>
                  <div class="mt-auto text-end">
                    <button
                      type="button"
                      class="border border-orange-100 rounded-8 bg-white px-4 py-2 text-sm font-bold text-orange-100"
                    >
                      COBA GRATIS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-header {
  background-image: url('@/assets/images/Banner-About.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.bubble {
  width: 100%;
  background: gray;
  position: relative;
  cursor: pointer;
  border: 3px double black;
  border-radius: 10px;
}
.bubble:before {
  content: '';
  position: absolute;
  top: -webkit-calc(100% - 10px); /*may require prefix for old browser support*/
  top: calc(100% - 10px); /*i.e. half the height*/
  left: 20px;
  height: 20px;
  width: 20px;
  background: gray;
  transform: rotate(45deg);
  border-bottom: inherit;
  border-right: inherit;
  box-shadow: inherit;
}

#spin:after {
  content: 'UMKM';
  animation: spin infinite 3s;
}
@keyframes spin {
  0% {
    content: 'UMKM';
  }
  50% {
    content: 'Distribusi';
  }
  75% {
    content: 'Produksi';
  }
}
</style>
