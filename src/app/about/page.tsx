import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBanner from "@/components/CtaBanner";

const processSteps = [
  { number: 1, title: "Sourcing", description: "Granite blocks from established quarries with documented extraction practices." },
  { number: 2, title: "Primary Manufacturing", description: "CNC cutting machines, bridge saws, and polishing lines shape raw blocks." },
  { number: 3, title: "Quality Control", description: "Dimensional checks, surface inspections, and structural testing." },
  { number: 4, title: "Dust Recovery", description: "Wet and dry dust collection captures stone particles at every station." },
  { number: 5, title: "Secondary Manufacturing", description: "Granite dust mixed, molded, and compressed into new products." },
];

const values = [
  { title: "Craftsmanship", desc: "Every product reflects precision, skill, and attention to detail." },
  { title: "Sustainability", desc: "Zero waste is not a marketing claim — it's our operational standard." },
  { title: "Innovation", desc: "We continuously develop new applications for recycled stone materials." },
  { title: "Integrity", desc: "Transparent pricing, honest specifications, and reliable delivery." },
  { title: "Partnership", desc: "We succeed when our customers succeed." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-granite-charcoal to-[#1a1a1a] mt-[72px] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">Built on Stone. Driven by Purpose.</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">A granite manufacturing company that proves premium quality and zero-waste operations aren&rsquo;t competing goals — they&rsquo;re complementary strengths.</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6">How We Started</h2>
            <p className="text-slate-gray mb-4">We didn&rsquo;t set out to reinvent the granite industry. We set out to build a manufacturing operation that reflected our standards — for quality, for efficiency, and for environmental responsibility.</p>
            <p className="text-slate-gray mb-4">Early on, we noticed something that every granite manufacturer sees but few address: the dust. For every slab we cut, a significant portion of the raw block became fine stone particles. Industry practice was to discard this material. We saw it differently.</p>
            <p className="text-slate-gray">We invested in dust collection infrastructure, material processing research, and product development. Today, our secondary product line is one of the most innovative in the natural stone sector.</p>
          </div>
          <div className="aspect-[4/3] bg-gradient-to-br from-[#d4cfc8] to-[#bfb8ae] rounded-xl flex items-center justify-center text-slate-gray/50 text-sm">Factory Panoramic Image</div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-stone-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Mission, Vision & Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-3 text-forest-green">Our Mission</h3>
              <p className="text-slate-gray">To manufacture world-class granite products while achieving complete material utilization — ensuring every gram of stone we process is transformed into something valuable.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-3 text-forest-green">Our Vision</h3>
              <p className="text-slate-gray">To set the global benchmark for zero-waste manufacturing in the natural stone industry.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h4 className="font-semibold text-granite-charcoal mb-2">{v.title}</h4>
                <p className="text-sm text-slate-gray">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="From Raw Block to Finished Product" subtitle="Nothing Left Behind" />
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-stone-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Recognized Quality" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["ISO 9001:2015 — Quality Management System", "ISO 14001:2015 — Environmental Management System", "Bureau of Indian Standards (BIS) Certification", "Green Building Material Certification", "Member — Federation of Indian Granite & Stone Industry", "Zero-Waste Manufacturing Certified"].map((cert) => (
              <div key={cert} className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-forest-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
                </div>
                <span className="text-sm font-medium text-granite-charcoal">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Want to See Our Facility in Action?" subtitle="We welcome site visits from architects, builders, and potential partners." ctaLabel="Schedule a Factory Visit" ctaHref="/contact" />

      <Footer />
    </>
  );
}
