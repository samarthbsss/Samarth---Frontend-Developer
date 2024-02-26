import React from 'react';
import roadmap from './documents/Roadmap.png'
import card1 from './documents/Roadmap card1.png'
import card2 from './documents/Roadmap card2.png'
import card3 from './documents/Roadmap card3.png'
// import card4 from './documents/Roadmap card4.png'

const Roadmap = () => {
    const phases = [

        { id: 1, title: "Phase 1", description: "Initial Design and Development", date: "Q4 2023", url: card1 },
        { id: 2, title: "Phase 2", description: "Release and Testing of Bita Market & Bridge", date: "Q1 2024", url: card2 },
        { id: 3, title: "Phase 3", description: "Bitapad & Rollout", date: "Q2 2024", url: card3 },
        // { id: 4, title: "Phase 3", description: "Bitapad & Rollout", date: "Q2 2024", url: card4 },

    ];
    console.log(card2);
    return (
        <div className="bg-yellow-400 p-10">
            {/* <h2 className="text-4xl font-bold text-left mb-8">Roadmap</h2> */}
            <img alt="Roadmap" src={roadmap} className='flex w-61 h-24 mb-3' />
            <div className="flex overflow-x-auto space-x-4">
                {phases.map(phase => (
                    <div key={phase.id} className="min-w-max p-2 rounded-lg shadow-lg">
                        {/* <h3 className="text-2xl mb-4">{phase.title}</h3>
                        <p>{phase.description}</p>
                        <span className="text-sm">{phase.date}</span> */}
                        <img alt={phase.title} src={phase.url} className='w-80 h-80' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
