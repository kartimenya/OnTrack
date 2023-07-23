<script setup>
import { ref } from 'vue'
import { isTimelineItemValid } from '../validators'
import BaseSelect from './BaseSelect.vue'
import TimelineHoure from './TimelineHoure.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Traning' }
]

const selectedActivityId = ref(1)
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHoure :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectedActivityId"
      :options="options"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
