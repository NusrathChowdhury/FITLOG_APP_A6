import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#0B0D0C] px-6">
      <div className="text-center">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
          404 ERROR
        </p>

        <h1 className="text-6xl font-black text-white">
          NOT FOUND
        </h1>

        <p className="mt-4 text-white/50">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105"
        >
          GO HOME
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
