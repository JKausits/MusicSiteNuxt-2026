import type { ShowViewModel } from "~/models";

export const useUpcomingShowsStore = defineStore("upcoming-shows", () => {
  const shows = ref<ShowViewModel[]>([]);

  const fetchUpcomingShows = async () => {
    const currentDate = new Date();
    // TODO: API Call.
    shows.value = [
      {
        id: "4",
        startAt: new Date(2026, 8, 11, 18, 0, 0, 0),
        endAt: new Date(2026, 8, 11, 21, 0, 0),
        venue: { id: "4", name: "Good Lady Brewhouse" },
      },
      {
        id: "5",
        startAt: new Date(2026, 8, 18, 19, 30, 0, 0),
        endAt: new Date(2026, 8, 18, 23, 30, 0),
        venue: { id: "4", name: "The Dessert Bar at Gorant" },
      },
      {
        id: "6",
        startAt: new Date(2026, 8, 26, 18, 0, 0, 0),
        endAt: new Date(2026, 8, 26, 21, 0, 0),
        venue: { id: "4", name: "Greene Eagle Winery" },
      },
    ].filter((x) => x.endAt > currentDate);
  };

  return { shows, fetchUpcomingShows };
});
