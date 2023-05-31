<script setup lang="ts"></script>

<template>
  <footer>
    <div class="bg-footer">
      <div class="container">
        <div class="relative flex flex-wrap py-8 md:flex-nowrap space-y-4 md:space-x-6">
          <div class="flex-col md:w-1/3 space-y-4">
            <img class="max-h-8" src="@/assets/images/logo.png" />
            <p class="text-sm text-white">
              Point adalah Startup Milenial, tetapi bisnis modelnya konvensional. Point membangun
              teknologi dengan sistem Open Source.
            </p>
          </div>
          <div class="flex flex-wrap md:w-2/3 md:flex-nowrap space-y-4 md:space-x-4 md:space-y-0">
            <div class="w-full flex flex-col md:w-1/3 space-y-4">
              <router-link class="text-sm text-white md:text-lg hover:text-yellow-400" :to="'/'">
                Beranda
              </router-link>
              <router-link class="text-sm text-white md:text-lg hover:text-yellow-400" :to="'/'">
                Develv
              </router-link>
              <router-link
                class="text-sm text-white md:text-lg hover:text-yellow-400"
                :to="'/marketplace'"
              >
                Marketplace
              </router-link>
              <router-link
                class="text-sm text-white md:text-lg hover:text-yellow-400"
                :to="'/investor'"
              >
                Investor
              </router-link>
            </div>
            <div class="w-full flex flex-col md:w-1/3 space-y-4">
              <router-link
                class="text-sm text-white md:text-lg hover:text-yellow-400"
                :to="'/about'"
              >
                Tentang Kami
              </router-link>
              <router-link
                class="text-sm text-white md:text-lg hover:text-yellow-400"
                :to="'/help'"
              >
                Bantuan
              </router-link>
              <router-link
                class="text-sm text-white md:text-lg hover:text-yellow-400"
                :to="'/contact'"
              >
                Kontak
              </router-link>
            </div>
            <div class="w-full flex flex-col md:w-1/3 space-y-4">
              <p class="text-sm text-white md:text-lg">We are in Social</p>
              <div class="flex text-sm text-green-600 space-x-6 md:text-xl">
                <div class="i-cib-facebook-f"></div>
                <div class="i-cib-instagram"></div>
                <div class="i-cib-twitter"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black">
      <div class="flex-1 py-4">
        <h1 class="text-center text-xs text-white md:text-sm">
          Copyright ©2023 Point. All Right Reserved. <br class="md:hidden" />Please send bug report
          and feedback to: Gradin Digital Agency
        </h1>
      </div>
    </div>
  </footer>
</template>

<style>
.bg-footer {
  background-image: url('@/assets/images/Footer-Web-Point.jpg');
  background-size: cover;
  background-position: center;
}
</style>
