<template>
  <div>
    <div class="text-title-large">Upcoming Shows</div>
    <v-divider :thickness="3" class="my-3" />

    <v-data-table :items="shows" :headers hide-default-footer>
      <template #item.where="{ item }">
        <div class="text-body-large">
          {{ item.venue.name }}
        </div>
      </template>
      <template v-slot:item.when="{ item }">
        <div
          class="text-body-large"
          v-html="formatDateRange(item.startAt, item.endAt)"
        ></div>
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { useDate } from "vuetify";

const store = useUpcomingShowsStore();

const { shows } = storeToRefs(store);

const headers = [
  { title: "Where", value: "venue.name", key: "where" },
  { title: "When", value: "startAt", key: "when" },
];

const date = useDate();

const formatDateRange = (startDate: Date, endDate: Date) => {
  if (date.isSameDay(startDate, endDate)) {
    return `${date.format(startDate, "fullDate")} <br />${date.format(startDate, "fullTime12h")} - ${date.format(endDate, "fullTime12h")}`;
  }
};

onMounted(() => {
  store.fetchUpcomingShows();
});
</script>

<style scoped></style>
