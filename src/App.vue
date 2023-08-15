<script setup>
import { provide, readonly } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constans'
import { generatePeriodSelectOptions } from './function'
import {
  setActivitySecondsToComplete,
  activitySelectOptions,
  createActivity,
  deleteActivity
} from './activities'
import {
  setTimelineItemActivity,
  updateTimelineActivitySeconds,
  resetTimelineItemActivities
} from './timeline-items'
import { currentPage, timelineRef } from './router'
import * as keys from './key'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'

provide(keys.updateTimelineActivitySecondsKey, updateTimelineActivitySeconds)
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, (activity) => {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
})
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions))
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :current-page="currentPage"
      ref="timelineRef"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>

<style scoped></style>
