<script setup lang="ts">
import { ref } from 'vue'
import BaseSwitch from '@/components/base-switch.vue'
import { codeExample } from './example-basic'
import BaseInput from '@/components/base-input.vue'

const form = ref({
  email: '',
  phone: '',
  number: '',
  username: '',
  password: ''
})
const codeToggle = ref(false)
</script>

<template>
  <div class="card card-template">
    <div class="card-header">
      <h2>Horizontal</h2>
      <component :is="BaseSwitch" v-model="codeToggle" label="code" />
    </div>
    <div>
      <p>
        The accordion component allows the user to show and hide sections of related content on a
        page.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <form action="" method="post" class="space-y-5">
        <div class="space-y-2">
          <component
            :is="BaseInput"
            v-model="form.username"
            required
            label="Username"
            placeholder="John Doe"
            type="text"
            layout="horizontal"
            description="This is description for label"
          >
            <template #prefix>
              <i class="i-far-user block mx-3"></i>
            </template>
          </component>
          <component
            :is="BaseInput"
            layout="horizontal"
            v-model="form.email"
            label="Email"
            type="email"
            placeholder="johndoe@example.com"
            helper="this is helper message"
          >
            <template #prefix>
              <i class="i-far-envelope block mx-3"></i>
            </template>
          </component>
          <component
            :is="BaseInput"
            layout="horizontal"
            v-model="form.phone"
            label="Phone"
            type="tel"
          >
            <template #prefix>
              <div class="mx-3">+62</div>
            </template>
          </component>
          <component
            :is="BaseInput"
            layout="horizontal"
            v-model="form.number"
            label="Age"
            type="number"
          >
            <template #suffix>
              <div class="mx-3">Years old</div>
            </template>
          </component>
          <component
            :is="BaseInput"
            layout="horizontal"
            v-model="form.password"
            label="Password"
            type="password"
            error="this is error message"
          >
            <template #suffix>
              <i class="block i-far-eye mx-3"></i>
            </template>
          </component>
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
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
