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
          ></component>
          <component
            :is="BaseInput"
            layout="horizontal"
            v-model="form.email"
            label="Email"
            type="email"
            placeholder="johndoe@example.com"
            helper="this is helper message"
          ></component>
          <component
            :is="BaseInput"
            layout="horizontal"
            v-model="form.phone"
            label="Phone"
            type="tel"
          ></component>
          <component
            :is="BaseInput"
            layout="horizontal"
            v-model="form.number"
            label="Age"
            type="number"
          ></component>
          <component
            :is="BaseInput"
            layout="horizontal"
            v-model="form.password"
            label="Password"
            type="password"
            error="this is error message"
          ></component>
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
