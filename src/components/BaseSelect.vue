<script setup>
import BaseButton from './BaseButton.vue'
import { validateSelectOptions, IsSelectValueValid, isUndefinedOrNull } from '../validators'
import { normolizeSelectValue } from '../function'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '../constans'

const props = defineProps({
  selected: [String, Number],
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  placeholder: { required: true, type: String }
})

const emit = defineEmits({
  select: IsSelectValueValid
})

function select(value) {
  emit('select', normolizeSelectValue(value))
}

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>
<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
      @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
