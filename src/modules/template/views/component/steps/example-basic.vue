<script setup lang="ts">
import { ref } from 'vue'
import BaseSwitch from '@/components/base-switch.vue'
import { codeExample } from './example-basic'

const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Example</h2>
      <component :is="BaseSwitch" v-model="codeToggle" label="code" />
    </div>
    <div class="flex w-full gap-4">
      <div class="step-container">
        <div class="step-body">
          <div class="step-icon-container active">
            <i class="h-6 w-6 block i-far-user"></i>
          </div>
          <p class="step-text">Step 1</p>
        </div>
        <div class="step-line active"></div>
        <div class="step-body">
          <div class="step-icon-container active">
            <i class="h-6 w-6 block i-far-map"></i>
          </div>
          <p class="step-text">Step 2</p>
        </div>
        <div class="step-line active"></div>
        <div class="step-body">
          <div class="step-icon-container active">
            <i class="h-6 w-6 block i-far-calendar"></i>
          </div>
          <p class="step-text">Step 3</p>
        </div>
        <div class="step-line"></div>
        <div class="step-body">
          <div class="step-icon-container">
            <i class="h-6 w-6 block i-far-lock"></i>
          </div>
          <p class="step-text">Step 4</p>
        </div>
        <div class="step-line"></div>
        <div class="step-body">
          <div class="step-icon-container">
            <i class="h-6 w-6 block i-far-check"></i>
          </div>
          <p class="step-text">Step 5</p>
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
