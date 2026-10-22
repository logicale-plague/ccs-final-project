<script setup>
import { computed } from 'vue'

const props = defineProps({
  events: { type: Array, default: () => [] },
  visibleDates: { type: Array, default: () => [] },
  emptyText: { type: String, default: 'No events scheduled for this day.' },
})

const emit = defineEmits(['select-event'])

/**
 *
 * @param {String} dateStr
 */
const parseISODate = (dateStr) => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const groupedEvents = computed(() => {
  /** @type {Record<string, Array<any>>} */
  const map = {}

  const eventList = /** @type {Array<any>} */ (props.events)
  const visibleDatesList = /** @type {Array<string>} */ (props.visibleDates)

  for (const ev of eventList) {
    if (!map[ev.date]) map[ev.date] = []
    map[ev.date].push(ev)
  }

  const dateKeys = visibleDatesList.length > 0 ? visibleDatesList : Object.keys(map).sort()

  /** @param {string} dateStr */
  return dateKeys.map((dateStr) => {
    const d = parseISODate(dateStr)
    return {
      dateObj: d,
      dateLabel: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
      dotwLabel: d.toLocaleDateString('en-US', { weekday: 'long' }),
      events: map[dateStr] || [],
    }
  })
})

/**
 * @param {any} event
 */
const handleEventClick = (event) => {
  emit('select-event', event)
}
</script>

<template>
  <div
    class="bg-body w-100 h-auto d-flex flex-column align-items-center justify-content-start divide-y"
  >
    <div
      v-for="group in groupedEvents"
      :key="group.dateLabel"
      class="bg-body w-100 px-3 py-3 d-flex flex-row align-items-start justify-content-start gap-3 border-bottom"
      style="min-height: 8rem"
    >
      <div
        class="shrink-0 py-1 d-flex flex-column align-items-start justify-content-start"
        style="width: 80px"
      >
        <p class="fs-5 text-body fw-semibold lh-sm mb-0">
          {{ group.dateLabel }}
        </p>
        <p class="fs-7 text-muted fw-normal mb-0">
          {{ group.dotwLabel }}
        </p>
      </div>

      <div class="grow d-flex flex-column gap-1 w-100">
        <template v-if="group.events.length > 0">
          <div
            v-for="ev in group.events"
            :key="ev.id"
            class="w-100 p-2 d-flex flex-row align-items-center justify-content-between hover-bg-muted transition-all cursor-pointer rounded"
            @click="handleEventClick(ev)"
          >
            <div
              class="d-flex flex-row align-items-center justify-content-start gap-2 grow min-w-0"
            >
              <div
                class="rounded-pill shrink-0"
                style="width: 4px; align-self: stretch"
                :style="{ backgroundColor: ev.style?.dot || 'rgb(180,83,9)' }"
              />
              <div class="d-flex flex-column align-items-start justify-content-start text-truncate">
                <p class="fs-6 text-body fw-semibold text-truncate w-100 mb-0">
                  {{ ev.title }}
                </p>
                <p v-if="ev.eventType" class="fs-7 text-muted fw-normal text-truncate w-100 mb-0">
                  {{ ev.eventType }}
                </p>
              </div>
            </div>

            <div
              class="shrink-0 d-flex flex-column align-items-end justify-content-start text-end ps-2"
              style="width: 70px"
            >
              <p class="fs-7 text-body fw-semibold mb-0">
                {{ ev.timeStart }}
              </p>
              <p class="fs-8 text-muted fw-normal mb-0">
                {{ ev.timeEnd }}
              </p>
            </div>
          </div>
        </template>

        <div v-else class="h-100 d-flex align-items-center py-2">
          <p class="fs-7 text-muted fst-italic mb-0">
            {{ props.emptyText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-bg-muted:hover {
  background-color: rgba(0, 0, 0, 0.04);
}
</style>
