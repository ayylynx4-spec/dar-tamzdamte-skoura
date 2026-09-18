export function HouseSection() {
  return (
    <section className="border-y border-clay/10 bg-[#f8f2ea]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-clay/10 bg-white shadow-soft">
          <div className="h-[420px] bg-[linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.15)),url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.38em] text-clay/60">Your place in Skoura</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            A house,
            <span className="block text-clay/75">not a hotel.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-clay/80">
            Four rooms. One shared home. A little corner of Skoura to slow down, settle in, and feel at home.
          </p>
          <p className="mt-4 text-base leading-7 text-clay/75">
            This is a place where people live, cook, drink tea, share stories, and welcome guests into their everyday life.
          </p>
        </div>
      </div>
    </section>
  );
}
