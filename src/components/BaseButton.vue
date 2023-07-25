<script>
import { BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_DANGER } from '../constans'
import { isButtonTypeValid } from '../validators'

const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: 'text-white bg-red-500 enabled:hover:bg-red-600 '
}
</script>

<script setup>
defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validator: isButtonTypeValid
  }
})
</script>
<template>
  <button
    :class="`${typeClasses[type]}rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot></slot>
  </button>
</template>
