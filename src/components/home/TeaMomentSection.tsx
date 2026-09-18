export function TeaMomentSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.38em] text-clay/60">A moment at Tamzdamte</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">Sit. Have tea. Stay a while.</h2>
          <p className="mt-6 text-lg leading-8 text-clay/80">
            At Dar Tamzdamte, hospitality begins with simple things: a glass of Moroccan tea, a conversation, and the feeling that you have been welcomed into a home.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-clay/10 bg-white shadow-soft">
          <div className="h-[460px] bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.2)),url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
}
