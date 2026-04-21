export default function Hero() {
  return (
    <section className="px-6 py-24 text-center">
      <h1 className="text-5xl font-semibold tracking-tight">
        Build faster with AI
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Production-grade tools for modern developers.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 rounded-md bg-primary text-white hover:opacity-90 transition">
          Get Started
        </button>

        <button className="px-6 py-3 rounded-md border border-zinc-700 hover:bg-zinc-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
