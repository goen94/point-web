<script setup lang="ts">
import { ref } from 'vue'
import BaseSwitch from '@/components/base-switch.vue'
import { codeExample } from './example-horizontal'

const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Horizontal</h2>
      <component :is="BaseSwitch" v-model="codeToggle" label="code" />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex">
        <div
          class="h-20 w-full flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-500"
        >
          <p class="text-xl">Sample Content</p>
        </div>
        <div class="divider-horizontal">
          <div class="divider-horizontal-line"></div>
        </div>
        <div
          class="h-20 w-full flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-500"
        >
          <p class="text-xl">Sample Content</p>
        </div>
      </div>
    </div>
    <div
      class="card-code"
      :class="{
        'card-code-active': codeToggle,
        'card-code-inactive': !codeToggle
      }"
    >
      <div class="card-code-label">vue</div>
      <highlightjs autodetect :code="codeExample" />
    </div>
  </div>
</template>
