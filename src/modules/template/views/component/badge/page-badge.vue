<script setup lang="ts">
import BaseBreadcrumb from '@/components/base-breadcrumb.vue'
import BaseDivider from '@/components/base-divider.vue'
import ExampleSolid from './example-solid.vue'
import ExampleOutline from './example-outline.vue'
import ExampleWithIcon from './example-with-icon.vue'
</script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Badge</h1>
      <base-divider orientation="horizontal" />
      <component
        :is="BaseBreadcrumb"
        :breadcrumbs="[
          { name: 'Template', path: '/template' },
          { name: 'Component', path: '/template/component' },
          { name: 'Badge' }
        ]"
      />
    </div>
    <div class="main-content-body">
      <p>Badges are used to inform user of the status of specific data.</p>
      <component :is="ExampleSolid" />
      <component :is="ExampleOutline" />
      <component :is="ExampleWithIcon" />
    </div>
  </div>
</template>
