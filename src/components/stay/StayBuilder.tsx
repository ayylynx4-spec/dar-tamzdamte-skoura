import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useStayStore, type Occupancy } from "@/store/stay-store";

const roomOptions = [
  { id: "heritage", name: "Oasis Heritage Room", price: 3500, capacity: 3 },
  { id: "family", name: "Tamzdamte Family Room", price: 3600, capacity: 3 },
  { id: "palm", name: "Palm Garden Room", price: 3400, capacity: 3 },
  { id: "skoura", name: "Skoura View Room", price: 3600, capacity: 3 },
] as const;

const occupancyOptions: Occupancy[] = [1, 2, 3];

export function StayBuilder() {
  const { stay, setGuests, setDates, addRoom, removeRoom, updateRoomGuests } = useStayStore();

  const [selectedRoomId, setSelectedRoomId] = useState<(typeof roomOptions)[number]["id"]>("heritage");
  const [selectedOccupancy, setSelectedOccupancy] = useState<Occupancy>(2);

  const roomTotals = useMemo(
    () =>
      stay.rooms.map((room) => {
        const option = roomOptions.find((item) => item.id === room.roomId);
        return {
          ...room,
          name: option?.name ?? "Room",
          perNight: option?.price ?? 0,
        };
      }),
    [stay.rooms]
  );

  const totalNights = stay.arrival && stay.departure ? Math.max(0, Math.round((new Date(stay.departure).getTime() - new Date(stay.arrival).getTime()) / 86400000)) : 0;

  const estimatedAccommodation = roomTotals.reduce((sum, room) => {
    const priceForRoom = room.perNight * room.guests;
    return sum + priceForRoom * Math.max(totalNights, 0);
  }, 0);

  const handleAddRoom = () => {
    addRoom(selectedRoomId, selectedOccupancy);
  };

  const handleDateChange = (key: "arrival" | "departure", value: string) => {
    const nextArrival = key === "arrival" ? value : stay.arrival;
    const nextDeparture = key === "departure" ? value : stay.departure;
    setDates(nextArrival, nextDeparture);
  };

  return (
    <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-8">
        <section className="rounded-[2rem] border border-clay/10 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="font-serif text-3xl text-clay">Dates</h3>
            <span className="rounded-full bg-cream px-3 py-1 text-xs uppercase tracking-[0.2em] text-clay/70">
              Step 1
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm text-clay/70">
              Arrival
              <input
                type="date"
                value={stay.arrival ?? ""}
                onChange={(event) => handleDateChange("arrival", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-clay/15 bg-cream px-4 py-3 text-base text-clay outline-none ring-0 transition focus:border-clay/40"
              />
            </label>
            <label className="block text-sm text-clay/70">
              Departure
              <input
                type="date"
                value={stay.departure ?? ""}
                onChange={(event) => handleDateChange("departure", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-clay/15 bg-cream px-4 py-3 text-base text-clay outline-none ring-0 transition focus:border-clay/40"
              />
            </label>
          </div>
        </section>

        <section className="rounded-[2rem] border border-clay/10 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="font-serif text-3xl text-clay">Guests</h3>
            <span className="rounded-full bg-cream px-3 py-1 text-xs uppercase tracking-[0.2em] text-clay/70">
              Step 2
            </span>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="number"
              min={1}
              max={12}
              value={stay.guests}
              onChange={(event) => setGuests(Number(event.target.value) || 1)}
              className="w-28 rounded-2xl border border-clay/15 bg-cream px-4 py-3 text-base text-clay outline-none focus:border-clay/40"
            />
            <p className="text-sm text-clay/70">Total guests</p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-clay/10 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="font-serif text-3xl text-clay">Rooms</h3>
            <span className="rounded-full bg-cream px-3 py-1 text-xs uppercase tracking-[0.2em] text-clay/70">
              Step 3
            </span>
          </div>

          <div className="space-y-4">
            {roomOptions.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() => setSelectedRoomId(room.id)}
                className={`flex w-full items-center justify-between rounded-[1.5rem] border p-4 text-left transition ${
                  selectedRoomId === room.id
                    ? "border-clay bg-clay text-sand"
                    : "border-clay/15 bg-cream text-clay hover:border-clay/40"
                }`}
              >
                <div>
                  <p className="font-serif text-2xl">{room.name}</p>
                  <p className={`mt-1 text-sm ${selectedRoomId === room.id ? "text-sand/80" : "text-clay/70"}`}>
                    Capacity: {room.capacity} guests
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">€{(room.price / 100).toFixed(2)}/night</p>
                  <p className={`text-xs uppercase tracking-[0.2em] ${selectedRoomId === room.id ? "text-sand/70" : "text-clay/50"}`}>
                    Select
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-4 rounded-[1.5rem] border border-clay/10 bg-cream p-4">
            <label className="block text-sm text-clay/70">
              Occupancy
              <select
                value={selectedOccupancy}
                onChange={(event) => setSelectedOccupancy(Number(event.target.value) as Occupancy)}
                className="mt-2 w-full rounded-2xl border border-clay/15 bg-white px-4 py-3 text-base text-clay outline-none focus:border-clay/40"
              >
                {occupancyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option} guest{option > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </label>

            <Button onClick={handleAddRoom}>Add room to stay</Button>
          </div>
        </section>
      </div>

      <aside className="space-y-6">
        <div className="rounded-[2rem] border border-clay/10 bg-clay p-6 text-sand shadow-soft">
          <p className="text-xs uppercase tracking-[0.38em] text-sand/70">Your stay</p>
          <h3 className="mt-3 font-serif text-3xl">Summary</h3>

          <div className="mt-6 space-y-4 text-sm text-sand/80">
            <div className="flex items-center justify-between gap-3">
              <span>Guests</span>
              <strong>{stay.guests}</strong>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>Arrival</span>
              <strong>{stay.arrival ?? "—"}</strong>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>Departure</span>
              <strong>{stay.departure ?? "—"}</strong>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>Nights</span>
              <strong>{totalNights}</strong>
            </div>
          </div>

          <div className="mt-6 border-t border-sand/15 pt-4">
            <p className="text-xs uppercase tracking-[0.28em] text-sand/60">Estimated accommodation</p>
            <p className="mt-2 font-serif text-3xl text-sand">€{(estimatedAccommodation / 100).toFixed(2)}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-clay/10 bg-white p-6 shadow-soft">
          <h3 className="font-serif text-3xl text-clay">Selected rooms</h3>

          <div className="mt-5 space-y-4">
            {roomTotals.length === 0 ? (
              <p className="text-sm text-clay/60">No room has been added yet.</p>
            ) : (
              roomTotals.map((room) => (
                <div key={room.id} className="rounded-[1.4rem] border border-clay/10 bg-cream p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-serif text-xl text-clay">{room.name}</p>
                      <p className="mt-1 text-sm text-clay/60">€{(room.perNight / 100).toFixed(2)}/night</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeRoom(room.id)}
                      className="text-sm font-medium text-clay/60 transition hover:text-clay"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <label className="text-sm text-clay/70">Guests</label>
                    <select
                      value={room.guests}
                      onChange={(event) => updateRoomGuests(room.id, Number(event.target.value) as Occupancy)}
                      className="rounded-xl border border-clay/15 bg-white px-3 py-2 text-sm text-clay outline-none focus:border-clay/40"
                    >
                      {occupancyOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
