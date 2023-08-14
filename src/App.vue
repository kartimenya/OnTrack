<script setup>
import { provide, readonly, ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constans'
import { generateTimelineItems, generatePeriodSelectOptions } from './function'
import {
  setActivitySecondsToComplete,
  activitySelectOptions,
  createActivity,
  deleteActivity,
  activities
} from './activities'
import { currentPage, timelineRef } from './router'
import * as keys from './key'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'

const timelineItems = ref(generateTimelineItems(activities.value))

function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

function updateTimelineActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}

provide(keys.updateTimelineActivitySecondsKey, updateTimelineActivitySeconds)
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, deleteActivity)
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions))
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(keys.timelineItemsKey, readonly(timelineItems))
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :current-page="currentPage"
      ref="timelineRef"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>

<style scoped></style>
