<script setup>
import NavItem from './NavItem.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constans'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

defineProps(['currentPage'])

const emit = defineEmits(['navigate'])

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}
</script>

<template>
  <nav class="text-3x1 sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" />{{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
