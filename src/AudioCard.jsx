import React from "react";

export default function AudioCard({
  label,
  src,
  id,
  color,
  playing,
  togglePlay,
  audioRefs,
}) {
  return (
    <div className="w-full md:flex-1 border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur hover:bg-white/10 transition">
      <div className="flex justify-between mb-3">
        <p className={`text-xs tracking-widest ${color}`}>{label}</p>
        
      </div>

      {/* Waveform */}
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
        className={`w-full py-2 rounded-lg text-sm transition ${
          playing === id
            ? "bg-white text-black"
            : "bg-white/10 hover:bg-white/20"
        }`}
      >
        {playing === id ? "Pause" : "Play"}
      </button>

      <audio
        ref={(el) => {
          if (el) {
            audioRefs.current[id] = el;
          }
        }}
        src={src}
      />
    </div>
  );
}