<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { toLocalISOString } from '../utils/calendar.js'

const props = defineProps({
  modelValue: { type: Date, default: () => new Date() },
  events: { type: Array, default: () => [] },
  accentColor: { type: String, default: '#dc2626' },
  headerTitle: { type: String, default: '' },
  readonly: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'select-date', 'select-event'])

const currentDate = ref(new Date(props.modelValue))
const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
  emit('update:modelValue', currentDate.value)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
  emit('update:modelValue', currentDate.value)
}

const goToday = () => {
  currentDate.value = new Date()
  emit('update:modelValue', currentDate.value)
}

const calendarGrid = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDayIndex = firstDay.getDay()
  const daysInMonth = lastDay.getDate()

  const todayStr = toLocalISOString(new Date())
  const grid = []

  const prevLastDay = new Date(year, month, 0).getDate()
  for (let i = startDayIndex - 1; i >= 0; i--) {
    const num = prevLastDay - i
    const dateObj = new Date(year, month - 1, num)
    const dateStr = toLocalISOString(dateObj)
    grid.push({ dateObj, dateStr, num, isCurrentMonth: false, isToday: dateStr === todayStr })
  }

  for (let num = 1; num <= daysInMonth; num++) {
    const dateObj = new Date(year, month, num)
    const dateStr = toLocalISOString(dateObj)
    grid.push({ dateObj, dateStr, num, isCurrentMonth: true, isToday: dateStr === todayStr })
  }

  const totalGrid = grid.length > 35 ? 42 : 35
  const remaining = totalGrid - grid.length
  for (let num = 1; num <= remaining; num++) {
    const dateObj = new Date(year, month + 1, num)
    const dateStr = toLocalISOString(dateObj)
    grid.push({ dateObj, dateStr, num, isCurrentMonth: false, isToday: dateStr === todayStr })
  }

  return grid
})

const eventsMap = computed(() => {
  /** @type {Record<string, Array<any>>} */
  const map = {}

  const eventList = /** @type {Array<any>} */ (props.events)

  for (const ev of eventList) {
    if (!map[ev.date]) map[ev.date] = []
    map[ev.date].push(ev)
  }
  return map
})

/**
 * @param {Date} dateObj
 */
const handleCellClick = (dateObj) => {
  emit('select-date', dateObj)
}

/**
 * @param {any} event
 * @param {Event} e
 */
const handleEventClick = (event, e) => {
  e.stopPropagation()
  emit('select-event', event)
}
</script>

<template>
  <div class="w-100 h-auto d-flex flex-column border bg-body overflow-hidden shadow-sm">
    <!-- Header -->
    <div class="p-3 border-bottom d-flex flex-column gap-3">
      <div class="d-flex align-items-center justify-content-between">
        <h3 class="h5 mb-0 fw-bold">
          {{
            props.headerTitle ||
            currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
          }}
        </h3>

        <div v-if="!props.readonly" class="d-flex align-items-center gap-2">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary py-1 px-2 fs-7"
            @click="goToday"
          >
            Today
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary p-1" @click="prevMonth">
            <Icon icon="akar-icons:chevron-left-small" class="w-4 h-4" />
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary p-1" @click="nextMonth">
            <Icon icon="akar-icons:chevron-right-small" class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Days Header -->
      <div class="row row-cols-7 text-center m-0">
        <span v-for="day in weekDays" :key="day" class="col fs-7 fw-semibold text-muted p-0">
          {{ day }}
        </span>
      </div>
    </div>

    <!-- Calendar Grid -->
    <div class="row row-cols-7 g-0">
      <div
        v-for="cell in calendarGrid"
        :key="cell.dateStr"
        class="col border-end border-bottom p-2 d-flex flex-column justify-between transition-colors cursor-pointer calendar-cell"
        :class="{
          'text-body': cell.isCurrentMonth,
          'text-muted opacity-50 bg-light': !cell.isCurrentMonth,
        }"
        style="min-height: 100px"
        @click="handleCellClick(cell.dateObj)"
      >
        <!-- Cell Top Bar -->
        <div class="w-100 d-flex justify-content-end">
          <span
            class="fs-7 fw-semibold d-flex align-items-center justify-content-center rounded-circle"
            :class="{ 'bg-primary text-white': cell.isToday }"
            style="width: 24px; height: 24px"
          >
            {{ cell.num }}
          </span>
        </div>

        <!-- Event List inside Cell -->
        <div class="w-100 d-flex flex-column gap-1 overflow-y-auto" style="max-height: 60px">
          <div
            v-for="ev in eventsMap[cell.dateStr] || []"
            :key="ev.id"
            class="w-100 px-1 py-1 rounded text-truncate d-flex align-items-center gap-1 event-badge"
            :style="{
              backgroundColor: ev.style?.bg || props.accentColor,
              color: ev.style?.text || props.accentColor,
              fontSize: '11px',
            }"
            @click="(e) => handleEventClick(ev, e)"
          >
            <span
              class="rounded-circle shrink-0"
              :style="{
                width: '4px',
                height: '10px',
                backgroundColor: ev.style?.dot || props.accentColor,
              }"
            />
            <span class="text-truncate lh-sm">{{ ev.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-cell:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
.event-badge:hover {
  opacity: 0.85;
}
</style>
