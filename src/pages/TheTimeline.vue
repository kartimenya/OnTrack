<script setup>
import { onActivated } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import {
  scrollToHour,
  timelineItems,
  timelineItemRefs,
  scrollToCurrentHour
} from '../timeline-items'

onActivated(scrollToCurrentHour)
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
