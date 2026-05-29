"use client";

import { useState } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const [playing, setPlaying] = useState(false);
  const isVertical = item.aspect === "vertical";
  const aspectClass = isVertical ? "aspect-[9/16.8]" : "aspect-video";

  if (playing) {
    return (
      <div className={`relative ${aspectClass} overflow-hidden bg-black`}>
        <iframe
          src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
          title={item.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`group block relative w-full ${aspectClass} overflow-hidden bg-dark/5 cursor-pointer`}
    >
      <Image
        src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
        alt={item.title}
        fill
        unoptimized
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center bg-dark/20 group-hover:bg-dark/40 transition-colors duration-300">
        <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
          <svg className="w-5 h-5 text-dark ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/70 to-transparent">
        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
        {item.client && (
          <p className="text-white/60 text-xs mt-1">{item.client}</p>
        )}
      </div>
    </button>
  );
}
