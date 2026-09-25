const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0B0D0C] px-4 py-10">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-3xl font-black uppercase text-white">
          MY PLAN
        </h1>

        <p className="mt-2 text-white/50">
          Loading workouts…
        </p>

        <div className="mt-10 flex justify-center">
          <span className="loading loading-spinner loading-lg text-[#CCFF00]" />
        </div>

      </div>
    </main>
  );
};

export default Loading;
