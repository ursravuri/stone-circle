import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";

const products = [
  { id: "slabs", title: "Granite Slabs", desc: "Large-format granite slabs for commercial facades, flooring, and architectural installations. Available in polished, honed, flamed, and brushed finishes across our full color range.", specs: ["Thickness: 18mm–50mm", "Max size: 300cm x 200cm", "30+ varieties", "Cut-to-size service"], gradient: "from-[#3a3a3a] to-[#2a2a2a]" },
  { id: "tiles", title: "Granite Tiles", desc: "Precision-cut tiles for flooring, wall cladding, exterior paving, and decorative applications. Uniform thickness, squared edges, and calibrated dimensions.", specs: ["Sizes: 30x30 to 120x60cm", "Thickness: 10mm–20mm", "Calibration: ±0.3mm", "Slip-resistant options"], gradient: "from-[#8a8580] to-[#6e6a65]" },
  { id: "countertops", title: "Countertops", desc: "Kitchen, bathroom, and commercial countertops fabricated to precise measurements. Full-service from template to installation.", specs: ["20+ colors available", "Edge profiles: bullnose, bevel, ogee", "Sink/cooktop cutouts", "Sealer included"], gradient: "from-[#c4bdb4] to-[#a89e94]" },
  { id: "staircases", title: "Staircases", desc: "Granite treads, risers, landings, and handrail bases for residential and commercial staircase installations.", specs: ["Standard: 120cm x 33cm x 30mm", "Anti-slip finishes available", "Custom curved fabrication", "Color-matched components"], gradient: "from-[#4a4a4a] to-[#333]" },
  { id: "custom", title: "Custom Stonework", desc: "Bespoke granite fabrication for architectural features, monuments, water features, and specialty applications using 5-axis CNC.", specs: ["5-axis CNC machining", "Accepts DWG/DXF/STEP files", "Single piece minimum", "3D prototyping available"], gradient: "from-[#6e6e6e] to-[#555]" },
];

const colors = [
  { name: "Absolute Black", color: "#1a1a1a" },
  { name: "Kashmir White", color: "#e8e4df" },
  { name: "Tan Brown", color: "#8B6F4E" },
  { name: "Steel Grey", color: "#6B7B8D" },
  { name: "Imperial Red", color: "#8B2500" },
  { name: "River White", color: "#d4cfc8" },
  { name: "Black Galaxy", color: "#2a2a2a" },
  { name: "Viscount White", color: "#c9c4bc" },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-granite-charcoal to-[#1a1a1a] mt-[72px] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">Premium Granite Products</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Slabs, tiles, countertops, staircases, and custom stonework — manufactured to exacting standards from ethically sourced natural stone.</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {products.map((product, i) => (
            <div key={product.id} id={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={`aspect-[4/3] bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center text-white/30 text-sm ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                {product.title} Image
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold mb-4">{product.title}</h2>
                <p className="text-slate-gray mb-6">{product.desc}</p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-sm text-slate-gray">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-green shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a href="/quote" className="inline-block bg-forest-green text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-forest-green-dark transition-colors">
                  Request a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section className="py-24 bg-stone-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Natural Stone Colors" subtitle="Our granite range includes varieties sourced from quarries known for color consistency and structural quality." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {colors.map((c) => (
              <div key={c.name} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-square" style={{ backgroundColor: c.color }} />
                <div className="p-4 text-center">
                  <span className="text-sm font-medium text-granite-charcoal">{c.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Need Specific Dimensions or a Custom Finish?" subtitle="Our team works with architects, designers, and builders to deliver exactly what your project requires." ctaLabel="Request a Custom Quote" ctaHref="/quote" />

      <Footer />
    </>
  );
}
