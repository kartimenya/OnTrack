<script setup>
import { ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constans'
import { normilizePageHash, generateTimelineItems } from './function'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'

const currentPage = ref(normilizePageHash())

const timelineItems = generateTimelineItems()

const activities = ['Coding', 'Reading', 'Traning']

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<style scoped></style>
