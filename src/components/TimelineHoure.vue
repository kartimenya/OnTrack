<script setup>
import { currentHour } from '../function'
import { isHourValid } from '../validators'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid
  }
})

const classes = [
  'font-momo absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 text-lg ',
  props.hour === currentHour() ? 'bg-purple-900 font-black text-white' : 'bg-gray-100 text-gray-500'
]

const formattedHour = `${props.hour.toString().padStart(2, 0)}:00`
</script>

<template>
  <a href="" :class="classes">{{ formattedHour }}</a>
</template>
