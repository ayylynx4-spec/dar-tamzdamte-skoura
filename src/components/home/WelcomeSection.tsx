export function WelcomeSection() {
  return (
    <section id="story" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.38em] text-clay/60">Welcome</p>
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight text-clay md:text-6xl">
            Slow down.
            <span className="block text-clay/75">Here, the day moves differently.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-clay/80">
            Welcome to Dar Tamzdamte — a warm home in the heart of Skoura Oasis, where days unfold slowly and simple moments are meant to be shared.
          </p>
        </div>
      </div>
    </section>
  );
}
