import Link from "next/link";

export default function StayPage() {
  return (
    <main className="min-h-screen bg-stone text-clay">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-clay/60">Dar Tamzdamte</p>
            <h1 className="mt-4 font-serif text-5xl text-clay md:text-6xl">Build your stay</h1>
          </div>

          <Link
            href="/"
            className="rounded-full border border-clay/20 bg-white px-5 py-2.5 text-sm font-medium text-clay transition hover:border-clay/40 hover:bg-sand"
          >
            Back to home
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { step: "1", label: "Dates", note: "Choose your arrival and departure." },
            { step: "2", label: "Guests", note: "Set the number of travelers." },
            { step: "3", label: "Rooms", note: "Pick the best room setup." },
            { step: "4", label: "Your Days", note: "Plan experiences and dinner." },
          ].map((item) => (
            <div key={item.step} className="rounded-[1.8rem] border border-clay/10 bg-white p-6 shadow-soft">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-clay text-sm font-semibold text-sand">
                {item.step}
              </div>
              <h2 className="font-serif text-2xl text-clay">{item.label}</h2>
              <p className="mt-3 text-sm leading-6 text-clay/70">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-clay/10 bg-clay p-8 text-sand shadow-soft md:p-10">
          <p className="text-xs uppercase tracking-[0.38em] text-sand/70">Stay builder</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">A calm, flexible journey from arrival to departure.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-sand/80">
            Guests can explore the house, experiences and kitchen first, then build a stay based on their own rhythm.
          </p>
        </div>
      </div>
    </main>
  );
}
