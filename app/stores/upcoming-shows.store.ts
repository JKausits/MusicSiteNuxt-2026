import type { ShowViewModel } from "~/models";

export const useUpcomingShowsStore = defineStore("upcoming-shows", () => {
  const shows = ref<ShowViewModel[]>([]);

  const fetchUpcomingShows = async () => {
    const currentDate = new Date();
    // TODO: API Call.
    shows.value = [
      {
        id: "1",
        startAt: new Date(2026, 9, 5, 9, 0, 0, 0),
        endAt: new Date(2026, 9, 5, 13, 0, 0),
        venue: { id: "1", name: "Howland Farmer's Market" },
      },
      {
        id: "2",
        startAt: new Date(2026, 9, 6, 17, 0, 0, 0),
        endAt: new Date(2026, 9, 6, 20, 0, 0),
        venue: { id: "2", name: "Kennsington" },
      },
      {
        id: "3",
        startAt: new Date(2026, 9, 7, 16, 0, 0, 0),
        endAt: new Date(2026, 9, 7, 18, 0, 0),
        venue: { id: "3", name: "Canfield Fair Art and Photo Building" },
      },
      {
        id: "4",
        startAt: new Date(2026, 9, 11, 18, 0, 0, 0),
        endAt: new Date(2026, 9, 11, 21, 0, 0),
        venue: { id: "4", name: "Good Lady Brewhouse" },
      },
      {
        id: "5",
        startAt: new Date(2026, 9, 18, 19, 30, 0, 0),
        endAt: new Date(2026, 9, 18, 23, 30, 0),
        venue: { id: "4", name: "The Dessert Bar at Gorant" },
      },
      {
        id: "6",
        startAt: new Date(2026, 9, 26, 18, 0, 0, 0),
        endAt: new Date(2026, 9, 26, 21, 0, 0),
        venue: { id: "4", name: "Greene Eagle Winery" },
      },
    ].filter((x) => x.endAt > currentDate);
  };

  return { shows, fetchUpcomingShows };
});
