<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
import ExampleBasic from './example-basic.vue'
import ExampleSize from './example-size.vue'
import ExampleIcon from './example-icon.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Spinner</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Component', path: '/template/component' },
          { name: 'Spinner' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <component :is="ExampleBasic" />
      <component :is="ExampleSize" />
      <component :is="ExampleIcon" />
    </div>
  </div>
</template>
