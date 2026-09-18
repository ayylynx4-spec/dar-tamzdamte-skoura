import { StayBuilder } from "@/components/stay/StayBuilder";

export default function StayPage() {
  return (
    <main className="min-h-screen bg-stone text-clay">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <header className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-clay/60">Dar Tamzdamte</p>
            <h1 className="mt-4 font-serif text-5xl text-clay md:text-6xl">Build your stay</h1>
          </div>

          <a
            href="/"
            className="inline-flex rounded-full border border-clay/20 bg-white px-5 py-2.5 text-sm font-medium text-clay transition hover:border-clay/40 hover:bg-sand"
          >
            Back to home
          </a>
        </header>

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

        <div className="mt-10">
          <StayBuilder />
        </div>
      </div>
    </main>
  );
}
