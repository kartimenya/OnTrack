<script setup>
import BaseButton from './BaseButton.vue'
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  MILLISECONDS_IN_SECOND
} from '../constans'
import BaseIcon from './BaseIcon.vue'
import { isTimelineItemValid } from '../validators'
import { currentHour, formatSeconds } from '../function'
import { ref, watch } from 'vue'
import { updateTimelineItem } from '../timeline-items'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '../icons'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)

const isStartButtonDisabled = props.timelineItem.hour !== currentHour()

watch(
  () => props.timelineItem.activityId,
  () => {
    updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
  }
)

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItem(props.timelineItem, {
      activitySeconds: props.timelineItem.activitySeconds + 1
    })
    seconds.value++
  }, MILLISECONDS_IN_SECOND)
}

function stop() {
  clearInterval(isRunning.value)

  isRunning.value = false
}

function reset() {
  stop()
  updateTimelineItem(props.timelineItem, {
    activitySeconds: props.timelineItem.activitySeconds - seconds.value
  })

  seconds.value = 0
}
</script>
<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER" :disabled="!seconds" @click="reset">
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="font-momo flex flex-grow items-center rounded bg-gray-100 px-2 text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton v-else :type="BUTTON_TYPE_SUCCESS" :disabled="isStartButtonDisabled" @click="start">
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
