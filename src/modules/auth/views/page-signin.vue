<template>
  <div class="h-screen flex">
    <div class="w-3/5 rounded-br-full rounded-tr-full bg-green-600 p-16">
      <img class="max-h-8" src="https://assets.pointhub.net/assets/images/logo/primary/logo.png" />
      <h1 class="mt-4 font-bold text-white">Solusi Sistem Software</h1>
      <h1 class="font-bold text-yellow-400">Fleksibel & Terintegrasi</h1>
      <img class="mr-auto h-65vh" src="@/assets/images/Thumbnail-Icon.png" />
    </div>
    <div class="mr-32 w-2/5 py-16 pl-26 space-y-4">
      <h1 class="mt-4 text-lg font-bold text-black">Sign Up to Pointhub</h1>
      <button
        type="button"
        class="mx-auto w-full inline-flex items-center border border-green-600 rounded-8 bg-white px-5 py-3 text-center text-sm font-bold"
      >
        <img class="ml-auto h-6" src="@/assets/images/icons8-google-48.png" />
        <span class="ml-4 mr-auto">Sign Up with Google</span>
      </button>
      <button
        type="button"
        class="mx-auto w-full inline-flex items-center border border-green-600 rounded-8 bg-white px-5 py-3 text-center text-sm font-bold"
      >
        <img class="ml-auto h-6" src="@/assets/images/github-mark.png" />
        <span class="ml-4 mr-auto">Sign Up with Github</span>
      </button>
      <h5 class="text-center">or use your email for registration</h5>
      <div class="space-y-2">
        <h2 class="ml-2 text-sm font-bold">Name</h2>
        <input type="text" class="block w-full border rounded-8 bg-gray-200 px-5 py-2" />
      </div>
      <div class="space-y-2">
        <h2 class="ml-2 text-sm font-bold">Email</h2>
        <input type="text" class="block w-full border rounded-8 bg-gray-200 px-5 py-2" />
      </div>
      <div class="space-y-2">
        <h2 class="ml-2 text-sm font-bold">Password</h2>
        <input type="password" class="block w-full border rounded-8 bg-gray-200 px-5 py-2" />
      </div>
      <div class="flex">
        <input class="mx-2 mt-1" type="radio" />
        <p class="text-xs">
          Creating an account means you're okay with our
          <span class="text-green-600">Terms of Service, Privacy Policy,</span> and our default
          <span class="text-green-600">Notification Settings</span>
        </p>
      </div>
      <button
        type="button"
        class="mt-8 rounded-8 from-green-600 to-green-400 bg-gradient-to-r px-10 py-3 text-lg font-bold text-white"
      >
        SIGN UP
      </button>
    </div>
  </div>
</template>

<style>
.clip {
  clip-path: ellipse(80% 60% at left);
  background-color: green;
}
</style>
