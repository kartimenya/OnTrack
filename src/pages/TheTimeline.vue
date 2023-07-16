<script setup>
import TimelineItemVue from '../components/TimelineItem.vue'
import { generateTimelineItems } from '../function'

const timelineItems = generateTimelineItems()
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItemVue
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>
