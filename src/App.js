import React, { useState, useRef } from "react";
import AudioCard from "./AudioCard";

export default function PremiumPortfolio() {
  const tracks = [
    // ==========================
    // RAW MIXES
    // ==========================
    {
      id: 1,
      section: "Raw Mixes",
      category: "Film Scoring",
      raw: "/audio/pop edm punk haestle raw.mp3",
      mixed: "/audio/pop edm punk haestle mstrd.mp3",
    },
    {
      id: 2,
      section: "Raw Mixes",
      category: "Commercial Music",
      raw: "/audio/hip hop raw.mp3",
      mixed: "/audio/hip hop mastered.mp3",
    },

    // ==========================
    // ORIGINAL COMPOSITIONS
    // ==========================
   
    {
      id: 4,
      section: "Original Compositions",
      category: "Background Score",
      raw: "/audio/the hip hop 3 raw.mp3",
      mixed: "/audio/the hip hop 3 mstred.mp3",
    },
  ];

  const groupedTracks = tracks.reduce((acc, track) => {
    if (!acc[track.section]) {
      acc[track.section] = [];
    }
    acc[track.section].push(track);
    return acc;
  }, {});

  const [playing, setPlaying] = useState(null);
  const audioRefs = useRef({});

const togglePlay = async (id) => {
  const audio = audioRefs.current[id];
  if (!audio) return;

  if (playing === id) {
    audio.pause();
    setPlaying(null);
  } else {
    Object.values(audioRefs.current).forEach((a) => a?.pause());

    try {
      await audio.play();
      setPlaying(id);
    } catch (err) {
      console.error("Audio Error:", err);
      console.error("Source:", audio.src);
    }
  }
};

  return (
    <div className="min-h-screen bg-[#050505] text-white font-[Poppins]">
      {/* HERO */}
      <section className="px-6 md:px-10 py-16 md:py-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl mt-6 font-light">
              Hari Ram
            </h1>

            <p className="mt-2 text-xs md:text-sm tracking-[0.4em] text-white/40">
              MUSIC PRODUCER
            </p>

            <p className="text-base pt-10 md:text-lg text-white/60 leading-relaxed">
              Officially Graduated Music Producer / Audio Engineer Based In
              India.
            </p>
          </div>
        </div>
      </section>

      {/* TITLE */}
      <section>
        <h3 className="text-center text-3xl font-bold my-4 py-4">
          Here’s the Bars & Beats Done By Me 🎚️🎶
        </h3>
      </section>

      {/* TRACKS */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-20">
        {Object.entries(groupedTracks).map(([section, items]) => (
          <div key={section}>
            {/* Section Heading */}
            <div className="mb-10">
              {/* <h2 className="text-3xl md:text-4xl font-semibold">
                {section}
              </h2> */}
              {/* <div className="w-24 h-[2px] bg-white/20 mt-3"></div> */}
            </div>

            {/* Tracks */}
            <div className="space-y-10">
              {items.map((track) => (
                <div key={track.id}>
                  {/* <h3 className="text-lg md:text-xl text-white/70 mb-5">
                    {track.category}
                  </h3> */}

                  <div className="flex flex-col md:flex-row gap-6">
                    <AudioCard
                      label="RAW AUDIO"
                      src={track.raw}
                      id={`raw-${track.id}`}
                      color="text-green-400"
                      playing={playing}
                      togglePlay={togglePlay}
                      audioRefs={audioRefs}
                    />

                    <AudioCard
                      label="MASTERED AUDIO"
                      src={track.mixed}
                      id={`mix-${track.id}`}
                      color="text-blue-400"
                      playing={playing}
                      togglePlay={togglePlay}
                      audioRefs={audioRefs}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FEATURED CLIENT */}
      <section className="border-t border-white/10 px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-6">
            ♪ Featured Client: Zeengi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] text-white/40 mb-2">
                PROJECT SCOPE
              </p>

              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                Music for advertisement — custom composition created for Zeengi
                food delivery platform campaign. Professional commercial
                production.
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <AudioCard
              label="ADVERTISEMENT MUSIC"
              src="/audio/Zeengi.mp3"
              id="featured"
              color="text-purple-400"
              playing={playing}
              togglePlay={togglePlay}
              audioRefs={audioRefs}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-white/40 text-sm">
        © 2026 Hari Ram • All Rights Reserved
      </footer>
    </div>
  );
}