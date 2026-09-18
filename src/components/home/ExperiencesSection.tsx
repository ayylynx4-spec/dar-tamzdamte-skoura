const experiences = [
  { name: "Cycling", price: "€20/person", description: "Explore Skoura on two wheels." },
  { name: "Oasis Walk", price: "€15/person", description: "Take the long way and discover the palms slowly." },
  { name: "Kasbahs", price: "€10/person", description: "Explore the heritage around Skoura." },
  { name: "The Oasis Kitchen", price: "€25/person", description: "Cook, eat, and share local flavors." },
];

export function ExperiencesSection() {
  return (
    <section className="bg-clay text-sand">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-sand/70">Experiences</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">Live the rhythm of the oasis.</h2>
          </div>
          <a href="/stay" className="hidden rounded-full border border-sand/35 px-5 py-3 text-sm font-medium text-sand transition hover:bg-white/5 md:inline-flex">
            Add to my stay
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item) => (
            <div key={item.name} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="font-serif text-2xl text-sand">{item.name}</h3>
                <span className="text-sm text-warm">{item.price}</span>
              </div>
              <p className="text-base leading-7 text-sand/80">{item.description}</p>
              <button className="mt-7 rounded-full border border-sand/30 bg-transparent px-4 py-2.5 text-sm font-medium text-sand transition hover:bg-sand hover:text-clay">
                Add to my stay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
