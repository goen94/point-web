<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
import ExampleBasic from './example-basic.vue'
import ExampleSeparator from './example-separator.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Breadcrumb</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Component', path: '/template/component' },
          { name: 'Breadcrumb' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <p>
        The breadcrumb component is an important part of any website or application that can be used
        to show the current location of a page in a hierarchical structure of pages.
      </p>
      <component :is="ExampleBasic" />
      <component :is="ExampleSeparator" />
    </div>
  </div>
</template>
