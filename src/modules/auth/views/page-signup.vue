<template>
  <div class="flex flex-wrap bg-white md:h-screen md:flex-nowrap">
    <div
      class="m-w-screen rounded-b-[50%] bg-green-600 p-8 px-30 text-center -mx-30 md:mx-0 md:w-3/5 md:rounded-b-0 md:rounded-br-full md:rounded-tr-full md:px-0 md:px-10 md:pt-10 md:text-start"
    >
      <img class="mx-auto max-h-8 md:mx-0" src="@/assets/images/logo.png" />
      <h1 class="mt-4 text-2xl font-bold text-white md:text-4xl">Solusi Sistem Software</h1>
      <h1 class="text-2xl font-bold text-yellow-400 md:text-4xl">Fleksibel & Terintegrasi</h1>
      <img class="mr-auto h-50vh md:h-65vh" src="@/assets/images/signup/thumbnail-icon.png" />
    </div>
    <div
      class="w-full bg-white p-8 text-center md:mr-32 md:w-2/5 space-y-4 md:py-16 md:pl-26 md:text-start"
    >
      <h1 class="mt-4 text-lg font-bold text-black">Sign Up to Pointhub</h1>
      <button
        type="button"
        class="mx-auto w-full inline-flex items-center border border-green-600 rounded-8 bg-white px-5 py-3 text-center text-sm font-bold"
      >
        <img class="ml-auto h-6" src="@/assets/images/signup/icons8-google-48.png" />
        <span class="ml-4 mr-auto text-black">Sign Up with Google</span>
      </button>
      <button
        type="button"
        class="mx-auto w-full inline-flex items-center border border-green-600 rounded-8 bg-white px-5 py-3 text-center text-sm font-bold"
      >
        <img class="ml-auto h-6" src="@/assets/images/signup/github-mark.png" />
        <span class="ml-4 mr-auto text-black">Sign Up with Github</span>
      </button>
      <h5 class="text-center text-black">or use your email for registration</h5>
      <div class="space-y-2">
        <h2 class="ml-2 text-sm font-bold text-black">Name</h2>
        <input type="text" class="block w-full border rounded-8 bg-gray-200 px-5 py-2 text-black" />
      </div>
      <div class="space-y-2">
        <h2 class="ml-2 text-sm font-bold text-black">Email</h2>
        <input type="text" class="block w-full border rounded-8 bg-gray-200 px-5 py-2 text-black" />
      </div>
      <div class="space-y-2">
        <h2 class="ml-2 text-sm font-bold text-black">Password</h2>
        <input
          type="password"
          class="block w-full border rounded-8 bg-gray-200 px-5 py-2 text-black"
        />
      </div>
      <div class="flex">
        <input id="policy" class="mx-2 mt-1" type="radio" />
        <label class="text-xs text-black" for="policy">
          Creating an account means you're okay with our
          <span class="text-green-600">Terms of Service, Privacy Policy,</span> and our default
          <span class="text-green-600">Notification Settings</span>
        </label>
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
