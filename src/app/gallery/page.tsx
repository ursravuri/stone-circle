"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Slabs", "Countertops", "Tiles", "Staircases", "Custom", "Eco-Products"];

const galleryItems = [
  { title: "Absolute Black Lobby Cladding", cat: "Slabs", gradient: "from-[#1a1a1a] to-[#333]" },
  { title: "Kashmir White Feature Wall", cat: "Slabs", gradient: "from-[#e8e4df] to-[#d4cfc8]" },
  { title: "Tan Brown Kitchen Island", cat: "Countertops", gradient: "from-[#8B6F4E] to-[#6E5A3E]" },
  { title: "Polished Black Galaxy Floor", cat: "Tiles", gradient: "from-[#2a2a2a] to-[#1a1a1a]" },
  { title: "Anti-Slip Corporate Staircase", cat: "Staircases", gradient: "from-[#4a4a4a] to-[#333]" },
  { title: "CNC-Engraved Company Signage", cat: "Custom", gradient: "from-[#6e6e6e] to-[#555]" },
  { title: "Eco-Brick Perimeter Wall", cat: "Eco-Products", gradient: "from-[#8a8580] to-[#6e6a65]" },
  { title: "Terrazzo Cafe Flooring", cat: "Eco-Products", gradient: "from-[#c4bdb4] to-[#a89e94]" },
  { title: "Steel Grey Office Floor", cat: "Tiles", gradient: "from-[#6B7B8D] to-[#556B7D]" },
  { title: "Waterfall Edge Bar Counter", cat: "Countertops", gradient: "from-[#3a3a3a] to-[#222]" },
  { title: "Curved Hotel Entrance Steps", cat: "Staircases", gradient: "from-[#8a8580] to-[#6e6a65]" },
  { title: "Granite Memorial Installation", cat: "Custom", gradient: "from-[#4a4a4a] to-[#2a2a2a]" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.cat === activeFilter);

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-granite-charcoal to-[#1a1a1a] mt-[72px] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">From polished countertops to eco-paver walkways — see our products in real-world applications.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === cat ? "bg-granite-charcoal text-white" : "bg-stone-white text-slate-gray hover:bg-granite-charcoal/10"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.title} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-warm-gold font-medium uppercase tracking-wider">{item.cat}</span>
                    <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
