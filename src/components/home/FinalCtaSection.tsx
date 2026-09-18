export function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-8">
      <div className="rounded-[2.2rem] border border-clay/10 bg-[linear-gradient(135deg,#f3e6d8,#f6f1ea)] p-10 shadow-soft md:p-14">
        <p className="text-xs uppercase tracking-[0.38em] text-clay/60">Your time at Dar Tamzdamte</p>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-clay md:text-6xl">
          Build a stay that feels like your own rhythm.
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/stay" className="rounded-full bg-clay px-6 py-3 text-sm font-medium text-sand transition hover:bg-clayDeep">
            Build your stay
          </a>
          <a href="https://wa.me/" className="rounded-full border border-clay/20 bg-white px-6 py-3 text-sm font-medium text-clay transition hover:border-clay/40 hover:bg-sand">
            WhatsApp request
          </a>
        </div>
      </div>
    </section>
  );
}
