export function KitchenSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.38em] text-clay/60">The oasis kitchen</p>
          <h2 className="mt-5 font-serif text-4xl text-clay md:text-6xl">Come to the kitchen.</h2>
          <p className="mt-6 text-lg leading-8 text-clay/80">Cook together. Share a table. Taste Skoura.</p>
          <p className="mt-4 text-base leading-7 text-clay/75">
            Fresh local ingredients, slow cooking, shared moments, and the feeling of a family table in the heart of the oasis.
          </p>
          <div className="mt-8 inline-flex items-center rounded-full bg-clay px-5 py-3 text-sm font-medium text-sand">
            €25/person
          </div>
        </div>

        <div className="rounded-[2rem] border border-clay/10 bg-white p-4 shadow-soft">
          <div className="h-[420px] rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(43,31,25,0.06),rgba(43,31,25,0.18)),url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
}
