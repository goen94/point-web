<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
import ExampleBasic from './example-basic.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Card</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Component', path: '/template/component' },
          { name: 'Card' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <p>
        Use these responsive card components to show data entries and information to your users in
        multiple forms and contexts such as for your blog, application, user profiles, and more.
      </p>
      <component :is="ExampleBasic" />
    </div>
  </div>
</template>
