<script setup lang="ts">
import { ref } from 'vue'
import BaseSwitch from '@/components/base-switch.vue'
import BaseModal, { type SizeType } from '@/components/base-modal.vue'
import { codeExample } from './example-size'

const showModal = ref(false)
const sizeModal = ref<SizeType>('md')
const codeToggle = ref(false)
const openModal = (size: SizeType) => {
  sizeModal.value = size
  showModal.value = true
}
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Size</h2>
      <component :is="BaseSwitch" v-model="codeToggle" label="code" />
    </div>
    <div class="flex gap-4">
      <button class="btn btn-base btn-primary" @click="openModal('sm')">SM</button>
      <button class="btn btn-base btn-primary" @click="openModal('md')">MD</button>
      <button class="btn btn-base btn-primary" @click="openModal('lg')">LG</button>
      <button class="btn btn-base btn-primary" @click="openModal('xl')">XL</button>
      <button class="btn btn-base btn-primary" @click="openModal('full')">Full</button>
      <button class="btn btn-base btn-primary" @click="openModal('maximize')">Maximize</button>
      <component
        :is="BaseModal"
        :is-open="showModal"
        @on-close="showModal = false"
        :size="sizeModal"
      >
        <template #content>
          <div class="max-h-90vh overflow-auto p-4">
            <h2 class="py-4 text-2xl font-bold">Lorem Ipsum</h2>
            <div class="space-y-8">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium provident,
                blanditiis quam pariatur repellat? Animi ducimus fugit, similique libero et rem,
                quod repellat sunt itaque voluptas nihil saepe laboriosam?
              </p>
              <button class="btn btn-primary btn-block" @click="showModal = false">Close</button>
            </div>
          </div>
        </template>
      </component>
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
