<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
import ExampleBasic from './example-basic.vue'
import ExampleSize from './example-size.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Modal</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Component', path: '/template/component' },
          { name: 'Modal' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <p>
        The modal component can be used as an interactive dialog on top of the main content area of
        the website to show notifications and gather information using form elements from your
        website users.
      </p>
      <component :is="ExampleBasic" />
      <component :is="ExampleSize" />
    </div>
  </div>
</template>
