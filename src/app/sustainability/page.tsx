import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-forest-green to-forest-green-dark mt-[72px] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">Sustainability at Our Core</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Zero waste isn&rsquo;t an aspiration — it&rsquo;s our operating model. Every process, every product, and every decision reflects our commitment to responsible manufacturing.</p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-granite-charcoal">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { value: "0", label: "Tons to Landfill" },
            { value: "100%", label: "Dust Recovered" },
            { value: "30%", label: "Material Cost Savings" },
            { value: "12+", label: "Secondary Products" },
            { value: "40%", label: "Water Recycled" },
            { value: "25%", label: "Renewable Energy" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-gold">{s.value}</div>
              <div className="text-xs text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Reduce. Reuse. Reimagine." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Reduce", desc: "Precision CNC cutting minimizes material loss. Closed-loop water systems recycle process water, reducing freshwater intake by 40%." },
              { title: "Reuse", desc: "Nothing leaves as waste. Granite dust becomes secondary products. Cooling water is recirculated. Off-spec products are broken down and reprocessed." },
              { title: "Reimagine", desc: "Our R&D team continuously tests new granite dust applications — from agricultural soil amendments to advanced composite building materials." },
            ].map((p) => (
              <div key={p.title} className="bg-stone-white rounded-xl p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-3 text-forest-green">{p.title}</h3>
                <p className="text-slate-gray text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-stone-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Where We're Headed" />
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { year: "2024", status: "Achieved", items: ["100% granite dust recovery", "Closed-loop water recycling", "8 secondary product categories"] },
              { year: "2025", status: "Achieved", items: ["4 new secondary products launched", "15% energy reduction per unit", "3 municipal partnerships"] },
              { year: "2026", status: "Current", items: ["500kW rooftop solar installation", "Electric delivery fleet pilot", "Granite dust composite panels R&D"] },
              { year: "2027–28", status: "Planned", items: ["100% renewable energy", "Take-back program for off-cuts", "20+ secondary product SKUs"] },
            ].map((m) => (
              <div key={m.year} className="flex gap-6">
                <div className="shrink-0 w-20">
                  <div className="font-[family-name:var(--font-playfair)] text-lg font-bold text-granite-charcoal">{m.year}</div>
                  <div className={`text-xs font-medium mt-1 ${m.status === "Current" ? "text-forest-green" : m.status === "Planned" ? "text-warm-gold" : "text-slate-gray"}`}>{m.status}</div>
                </div>
                <div className="border-l-2 border-forest-green/20 pl-6 pb-4">
                  <ul className="space-y-2">
                    {m.items.map((item) => (
                      <li key={item} className="text-sm text-slate-gray flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-forest-green mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Want the Full Picture?" subtitle="Download our sustainability overview document for detailed metrics and methodology." ctaLabel="Download Report" ctaHref="/contact" />

      <Footer />
    </>
  );
}
