import type { VenueViewModel } from "./venue.model";

export interface ShowViewModel {
    id: string;
    startAt: Date;
    endAt: Date;
    venue: VenueViewModel;
}