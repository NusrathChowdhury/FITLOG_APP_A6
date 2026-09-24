const Navber = () => {
  return (
    <nav className="w-full border-b border-white/10 bg-[#0B0D0C]">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <Image></Image> */}

          <span className="text-xl font-black tracking-[-0.04em] text-white">
            FITLOG
          </span>
        </div>

        {/* Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          <span className="relative py-2 text-sm font-bold uppercase tracking-wide text-white">
            Workout

            {/* Active underline */}
            <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#CCFF00]" />
          </span>

          <span className="py-2 text-sm font-bold uppercase tracking-wide text-white/50">
            My Plan
          </span>
        </div>

        {/* Right Badges */}
        <div className="flex items-center gap-2">
          {/* Plan */}
          <div className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2">
            <span className="text-xs font-black uppercase tracking-wide text-black">
              Plan
            </span>

            <span className="text-xs font-black text-black">
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2">
            <span className="text-xs font-black uppercase tracking-wide text-white">
              Saved
            </span>

            <span className="text-xs font-black text-white">
              0
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navber;