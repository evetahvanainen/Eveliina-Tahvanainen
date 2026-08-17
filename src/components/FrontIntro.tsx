import Link from 'next/link';

export default function FrontIntro() {
  return (
    <section className="bg-[#FFFFFF] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center text-text">
        <p className="text-[1.05rem] tracking-[0.18em] text-text/70">
          Handcrafted ceramic objects made in limited editions.
        </p>

        <p className="mt-10 text-[1.05rem] tracking-[0.18em] text-text/70">
          Contemporary glass and ceramic pieces with Nordic touch. Designed for interiors, spaces
          and thoughtful living.
          <br className="hidden sm:block" />
        </p>

        <p className="mt-10">
          <Link
            href="/shop"
            className="text-[1.05rem] tracking-[0.22em] text-text/80 transition-all duration-300 hover:text-text hover:tracking-[0.26em]"
          >
            Explore the pieces.
          </Link>
        </p>
      </div>
    </section>
  );
}
