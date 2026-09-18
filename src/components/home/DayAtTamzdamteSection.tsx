export function DayAtTamzdamteSection() {
  const dayParts = [
    { title: "Morning", items: ["Wake slowly.", "Step into the courtyard.", "Have breakfast.", "Watch the oasis wake up."] },
    { title: "Afternoon", items: ["Walk through the palms.", "Ride a bicycle.", "Discover the quiet paths of Skoura."] },
    { title: "Evening", items: ["Come back home.", "Have tea.", "Share dinner.", "Let the day slow down."] },
  ];

  return (
    <section className="border-y border-clay/10 bg-[#f2e8dc]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.38em] text-clay/60">A day at Tamzdamte</p>
          <h2 className="mt-4 font-serif text-4xl text-clay md:text-6xl">Imagine your day.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {dayParts.map((part) => (
            <div key={part.title} className="rounded-[2rem] border border-clay/10 bg-white p-8 shadow-soft">
              <h3 className="font-serif text-3xl text-clay">{part.title}</h3>
              <ul className="mt-6 space-y-3 text-base leading-7 text-clay/75">
                {part.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
