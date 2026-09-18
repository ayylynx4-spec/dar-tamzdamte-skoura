export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-clay text-sand">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,183,151,0.30),transparent_35%),linear-gradient(180deg,rgba(47,33,25,0.45),rgba(47,33,25,0.70))]" />
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.42em] text-sand/70">Skoura Oasis · Morocco</p>
            <h1 className="mt-5 font-serif text-5xl leading-none md:text-7xl">DAR TAMZDAMTE</h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-sand/85">A warm home in the heart of the oasis.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#story"
                className="rounded-full bg-sand px-6 py-3 text-sm font-medium text-clay transition hover:bg-white"
              >
                Enter the oasis ↓
              </a>
              <a
                href="/stay"
                className="rounded-full border border-sand/35 bg-white/5 px-6 py-3 text-sm font-medium text-sand transition hover:border-sand/70 hover:bg-white/10"
              >
                Build your stay
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur-sm">
            <div className="h-[520px] rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(39,28,22,0.25),rgba(39,28,22,0.7)),url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
