import { MINUTES_IN_HOUR, SECONDS_IN_MINUTE, MILLISECONDS_IN_SECOND } from './constans'
import { isNull } from './validators'

export function currentHour() {
  return new Date().getHours()
}

export function formatSeconds(seconds) {
  const date = new Date()

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)

  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function normolizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = [
    15, 30, 45, 60, 90, 120, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480
  ]

  return periodsInMinutes.map((periodInMinutes) => {
    return {
      value: periodInMinutes * SECONDS_IN_MINUTE,
      label: generatePeriodSelectOptionsLabel(periodInMinutes)
    }
  })
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hours = Math.floor(periodInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0)

  return `${hours}:${minutes}`
}
