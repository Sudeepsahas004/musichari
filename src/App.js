import React, { useState, useRef } from "react";

export default function PremiumPortfolio() {
  const tracks = [
    {
      id: 1,
      title: "Cinematic Score",
      category: "Film Scoring",
      raw: "/audio/raw1.mp3",
      mixed: "/audio/mixed1.mp3",
    },
    {
      id: 2,
      title: "Ad Campaign",
      category: "Commercial Music",
      raw: "/audio/raw2.mp3",
      mixed: "/audio/mixed2.mp3",
    },
    {
      id: 3,
      title: "Piano Theme",
      category: "Original Composition",
      raw: "/audio/raw3.mp3",
      mixed: "/audio/mixed3.mp3",
    },
  ];

  const [playing, setPlaying] = useState(null);
  const audioRefs = useRef({});

  const togglePlay = (id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (playing === id) {
      audio.pause();
      setPlaying(null);
    } else {
      Object.values(audioRefs.current).forEach((a) => a?.pause());
      audio.play();
      setPlaying(id);
    }
  };

  // 🎧 Audio Card
  const AudioCard = ({ label, src, id, color }) => (
    <div className="w-full md:flex-1 border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur hover:bg-white/10 transition">
      
      <div className="flex justify-between mb-3">
        <p className={`text-xs tracking-widest ${color}`}>
          {label}
        </p>
        <p className="text-xs text-white/40">0:45</p>
      </div>

      {/* waveform */}
      <div className="flex items-end gap-[2px] h-16 mb-4">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className={`w-[2px] ${
              playing === id
                ? "bg-gradient-to-t from-blue-500 to-purple-400"
                : "bg-white/20"
            }`}
            style={{ height: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <button
        onClick={() => togglePlay(id)}
        className={`w-full py-2 rounded-lg text-sm ${
          playing === id
            ? "bg-white text-black"
            : "bg-white/10 hover:bg-white/20"
        }`}
      >
        {playing === id ? "Pause" : "Play"}
      </button>

      <audio ref={(el) => (audioRefs.current[id] = el)} src={src} />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-[Poppins]">
      {/* HERO */}
<section className="px-6 md:px-10 py-16 md:py-10 border-b border-white/10">
  <div className="max-w-7xl mx-auto flex flex-col gap-6">
    
    <div className="max-w-xl">
     

      {/* 👇 ADD NAME HERE */}
      <h1 className="text-4xl md:text-6xl mt-6 font-light">
        Hari Ram
      </h1>

      <p className="mt-2 text-xs md:text-sm tracking-[0.4em] text-white/40">
        MUSIC DIRECTOR
      </p>

       <p className="text-base pt-10 md:text-lg text-white/60 leading-relaxed">
        Creating immersive sound experiences for films, brands, and storytelling.
      </p>
    </div>

  </div>
</section>

      {/* TRACKS */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 space-y-16">
        {tracks.map((track) => (
          <div key={track.id}>
            
            <h3 className="text-xl md:text-2xl mb-4 md:mb-6 font-light">
              ♪ {track.title}
            </h3>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              
              {/* RAW */}
              <AudioCard
                label="RAW AUDIO"
                src={track.raw}
                id={`raw-${track.id}`}
                color="text-green-400"
              />

              {/* MASTERED */}
              <AudioCard
                label="MASTERED"
                src={track.mixed}
                id={`mix-${track.id}`}
                color="text-blue-400"
              />

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10">
            
            <div>
              <p className="text-xs tracking-[0.3em] text-white/40 mb-2">
                PROJECT SCOPE
              </p>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                Music for advertisement — custom composition created for Zeengi
                food delivery platform campaign. Professional commercial production.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] text-white/40 mb-2">
                DURATION
              </p>
              <p className="text-white/70 text-sm md:text-base">
                45 Second Audio Track
              </p>
            </div>
          </div>

          <div className="max-w-200 ">
            <AudioCard
              label="ADVERTISEMENT MUSIC"
              src="/audio/zeengi.mp3"
              id="featured"
              color="text-purple-400"
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