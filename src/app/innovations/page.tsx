import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import ProcessSteps from "@/components/ProcessSteps";

const categories = [
  {
    name: "Construction",
    products: [
      { title: "Eco-Bricks", desc: "Compressed bricks from granite dust. Higher density, lower absorption than clay bricks." },
      { title: "Paver Blocks", desc: "Interlocking paver blocks for driveways, walkways, and commercial hardscaping." },
      { title: "Terrazzo Tiles", desc: "Decorative tiles combining granite dust and stone chips with cement binders." },
      { title: "Concrete Additives", desc: "Fine granite dust as partial sand/cement replacement. Improves strength." },
      { title: "Wall Texture Plaster", desc: "Premixed plaster with granite dust for natural stone-textured finishes." },
    ],
  },
  {
    name: "Decorative",
    products: [
      { title: "Coasters", desc: "Handcrafted stone coasters from compressed granite dust composite." },
      { title: "Planters", desc: "Molded granite dust planters — weather-resistant and lighter than solid stone." },
      { title: "Candle Holders", desc: "Sculpted candle holders with unique coloring from natural mineral variation." },
    ],
  },
  {
    name: "Industrial & Agricultural",
    products: [
      { title: "Abrasive Materials", desc: "Graded granite dust particles for sandblasting and surface preparation." },
      { title: "Soil Additives", desc: "Mineral-rich granite dust as agricultural soil amendment." },
      { title: "Road Base Material", desc: "Processed granite dust and aggregate for road sub-base construction." },
    ],
  },
];

const closedLoopSteps = [
  { number: 1, title: "Collection", description: "Dust captured at each cutting and polishing station" },
  { number: 2, title: "Processing", description: "Material dried, graded, and sorted by particle size" },
  { number: 3, title: "Formulation", description: "Mixed with binders and additives for target product" },
  { number: 4, title: "Manufacturing", description: "Molded, compressed, or blended on dedicated lines" },
  { number: 5, title: "Dispatch", description: "Packaged and shipped alongside primary products" },
];

export default function InnovationsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-granite-charcoal to-[#1a1a1a] mt-[72px] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">Granite Dust Innovations</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">What others discard, we transform. Our secondary product line turns manufacturing by-product into construction materials, industrial compounds, and handcrafted decor.</p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-forest-green">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "0 kg", label: "Waste to Landfill" },
            { value: "100%", label: "Dust Recovered" },
            { value: "12+", label: "Secondary Products" },
            { value: "30%", label: "Cost Reduction" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      {categories.map((cat) => (
        <section key={cat.name} className="py-24 odd:bg-stone-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold mb-10">{cat.name} Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.products.map((p) => (
                <div key={p.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-soft-sage flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-forest-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-granite-charcoal">{p.title}</h3>
                  <p className="text-sm text-slate-gray">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Closed Loop */}
      <section className="py-24 bg-granite-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="From Dust to Product in One Facility" dark />
          <ProcessSteps steps={closedLoopSteps} dark />
        </div>
      </section>

      <CtaBanner title="Interested in Our Secondary Products?" subtitle="Whether you're a builder, municipality, or retailer — we supply at scale." ctaLabel="Get in Touch" ctaHref="/contact" />

      <Footer />
    </>
  );
}
