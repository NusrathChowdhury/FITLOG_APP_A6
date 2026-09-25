const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B0D0C]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CCFF00] text-sm font-black text-black">
            F
          </div>

          <span className="text-xl font-black tracking-wider text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-white/50 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
