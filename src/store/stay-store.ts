import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Occupancy = 1 | 2 | 3;

export type StayRoom = {
  id: string;
  roomId: string;
  guests: Occupancy;
};

export type StayDayType = "arrival" | "full" | "departure";

export type StayDay = {
  date: string;
  type: StayDayType;
  experiences: string[];
  dinner: string | null;
};

export type Stay = {
  guests: number;
  arrival: string | null;
  departure: string | null;
  rooms: StayRoom[];
  days: StayDay[];
};

const initialStay: Stay = {
  guests: 1,
  arrival: null,
  departure: null,
  rooms: [],
  days: [],
};

type StayStore = {
  stay: Stay;
  setGuests: (guests: number) => void;
  setDates: (arrival: string | null, departure: string | null) => void;
  addRoom: (roomId: string, guests: Occupancy) => void;
  removeRoom: (id: string) => void;
  updateRoomGuests: (id: string, guests: Occupancy) => void;
  resetStay: () => void;
};

export const useStayStore = create<StayStore>()(
  persist(
    (set) => ({
      stay: initialStay,
      setGuests: (guests) =>
        set((state) => ({
          stay: { ...state.stay, guests },
        })),
      setDates: (arrival, departure) =>
        set((state) => ({
          stay: {
            ...state.stay,
            arrival,
            departure,
          },
        })),
      addRoom: (roomId, guests) =>
        set((state) => ({
          stay: {
            ...state.stay,
            rooms: [...state.stay.rooms, { id: crypto.randomUUID(), roomId, guests }],
          },
        })),
      removeRoom: (id) =>
        set((state) => ({
          stay: {
            ...state.stay,
            rooms: state.stay.rooms.filter((room) => room.id !== id),
          },
        })),
      updateRoomGuests: (id, guests) =>
        set((state) => ({
          stay: {
            ...state.stay,
            rooms: state.stay.rooms.map((room) => (room.id === id ? { ...room, guests } : room)),
          },
        })),
      resetStay: () =>
        set(() => ({
          stay: { ...initialStay },
        })),
    }),
    {
      name: "dar-tamzdamte-stay-v1",
    }
  )
);
