import React from 'react';
import AppCard from '../shared/AppCard';

const Library = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();

    return (
        <div className="my-[80px] bg-[#0B0D0C] px-6">
            <div className="mx-auto max-w-7xl">

                <div className="space-y-4 text-left">
                    <h2 className="text-3xl font-bold text-white">
                        THE LIBRARY
                    </h2>

                    <p className="text-white/60">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        data.map((app, ind) => {
                            return (
                                <AppCard
                                    key={ind}
                                    workout={app}
                                />
                            );
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Library;
