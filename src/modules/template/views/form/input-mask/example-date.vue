<script setup lang="ts">
import { ref } from 'vue'
import BaseSwitch from '@/components/base-switch.vue'
import BaseInputMask from '@/components/base-input-mask.vue'
import { codeExample } from './example-credit-card'

const input = ref()
const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Date</h2>
      <component :is="BaseSwitch" v-model="codeToggle" label="code" />
    </div>
    <div>
      <p>
        The accordion component allows the user to show and hide sections of related content on a
        page.
      </p>
    </div>
    <div class="flex gap-4">
      <component
        :is="BaseInputMask"
        v-model="input"
        :options="{ date: true, delimiter: '-', datePattern: ['d', 'm', 'Y'] }"
        label="Date"
        placeholder="DD-MM-YYYY"
      ></component>
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
