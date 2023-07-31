import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { generatePeriodSelectOptions } from './function'

export const BUTTON_TYPE_PRIMARY = 'primary'
export const BUTTON_TYPE_SUCCESS = 'success'
export const BUTTON_TYPE_WARNING = 'warning'
export const BUTTON_TYPE_DANGER = 'danger'
export const BUTTON_TYPE_NEUTRAL = 'neutral'

export const BUTTON_TYPES = [
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY
]

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const MILLISECONDS_IN_SECOND = 1000
export const SECONDS_IN_MINUTE = 60
export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE
export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}

export const NULLABLE_ACTIVITY = { id: null }

const PERIODS_IN_MINUTE = [
  15, 30, 45, 60, 90, 120, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480
]

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions(PERIODS_IN_MINUTE)
