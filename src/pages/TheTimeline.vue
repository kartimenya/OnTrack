<script setup>
import { nextTick, watchPostEffect } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import {
  scrollToHour,
  timelineItems,
  timelineItemRefs,
  scrollToCurrentHour
} from '../timeline-items'
import { PAGE_TIMELINE } from '../constans'
import { currentPage } from '../router'

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()
    scrollToCurrentHour(false)
  }
})
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>
