<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
import ExampleBasic from './example-basic.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Range</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Form', path: '/template/form' },
          { name: 'Range' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <component :is="ExampleBasic" />
    </div>
  </div>
</template>
