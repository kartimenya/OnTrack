<script setup>
import { NAV_ITEMS } from '../constans'

import NavItem from './NavItem.vue'
</script>

<template>
  <nav class="text-3x1 sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem v-for="navItem in NAV_ITEMS" :key="navItem.page" :nav-item="navItem" />
    </ul>
  </nav>
</template>
