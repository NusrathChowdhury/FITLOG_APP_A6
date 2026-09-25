import React from "react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0D0C]">
      <div className="text-center">

        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#CCFF00]" />

        <h2 className="text-xl font-black uppercase tracking-wider text-white">
          FITLOG
        </h2>

        <p className="mt-2 text-sm text-white/50">
          Loading your workout...
        </p>

      </div>
    </div>
  );
};

export default GlobalLoading;
