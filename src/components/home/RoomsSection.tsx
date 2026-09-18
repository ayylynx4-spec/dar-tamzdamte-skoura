const rooms = [
  { name: "Oasis Heritage Room", capacity: "1–3 guests", price: "€35/night" },
  { name: "Tamzdamte Family Room", capacity: "3 guests", price: "€36/night" },
  { name: "Palm Garden Room", capacity: "3 guests", price: "€34/night" },
  { name: "Skoura View Room", capacity: "3 guests", price: "€36/night" },
];

export function RoomsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.38em] text-clay/60">Rooms</p>
        <h2 className="mt-4 font-serif text-4xl text-clay md:text-6xl">Quiet rooms. Shared living.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {rooms.map((room) => (
          <article key={room.name} className="rounded-[2rem] border border-clay/10 bg-white p-5 shadow-soft">
            <div className="mb-5 h-56 rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(58,41,32,0.10),rgba(58,41,32,0.22)),url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
            <h3 className="font-serif text-2xl text-clay">{room.name}</h3>
            <p className="mt-3 text-sm text-clay/70">Capacity: {room.capacity}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-medium text-clay">{room.price}</span>
              <button className="rounded-full bg-clay px-4 py-2 text-sm font-medium text-sand transition hover:bg-clayDeep">
                Add room
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
