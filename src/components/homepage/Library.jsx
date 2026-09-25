import React from 'react';
import AppCard from '../shared/AppCard';
import { getWorkouts } from "@/lib/apps";

const Library = async () => {
    
const data = await getWorkouts();
    return (
        <div className="bg-[#0B0D0C] px-6 pt-[60px] pb-[80px]">
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
