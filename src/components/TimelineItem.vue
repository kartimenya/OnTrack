<script setup>
import { setTimelineItemActivity } from '../timeline-items'
import { activitySelectOptions } from '../activities'
import { isTimelineItemValid, isUndefined } from '../validators'
import BaseSelect from './BaseSelect.vue'
import TimelineHoure from './TimelineHoure.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const emit = defineEmits({
  scrollToHour: isUndefined
})
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHoure :hour="timelineItem.hour" @click.prevent="emit('scrollToHour')" />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="setTimelineItemActivity(timelineItem, $event)"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>
