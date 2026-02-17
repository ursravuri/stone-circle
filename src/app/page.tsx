import Link from "next/link";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import ProcessSteps from "@/components/ProcessSteps";
import FeatureCard from "@/components/FeatureCard";
import CtaBanner from "@/components/CtaBanner";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

const products = [
  {
    title: "Granite Slabs",
    description: "Premium-grade slabs in 30+ varieties. Custom dimensions up to 300cm x 200cm.",
    href: "/products",
    gradient: "from-[#3a3a3a] to-[#2a2a2a]",
  },
  {
    title: "Granite Tiles",
    description: "Precision-cut tiles for flooring, cladding, and exterior paving. Calibrated thickness.",
    href: "/products",
    gradient: "from-[#8a8580] to-[#6e6a65]",
  },
  {
    title: "Countertops",
    description: "Custom fabrication for kitchens and bathrooms. Edge profiling, cutouts, and sealing included.",
    href: "/products",
    gradient: "from-[#c4bdb4] to-[#a89e94]",
  },
  {
    title: "Staircases",
    description: "Treads, risers, and landings engineered for durability. Anti-slip finishes available.",
    href: "/products",
    gradient: "from-[#4a4a4a] to-[#333]",
  },
  {
    title: "Custom Stonework",
    description: "Bespoke fabrication using 5-axis CNC. Monuments, architectural features, and landscaping.",
    href: "/products",
    gradient: "from-[#6e6e6e] to-[#555]",
  },
];

const processSteps = [
  { number: 1, title: "Source", description: "Ethically sourced granite blocks" },
  { number: 2, title: "Manufacture", description: "Precision cutting, shaping, polishing" },
  { number: 3, title: "Capture", description: "Integrated dust collection systems" },
  { number: 4, title: "Transform", description: "Dust processed into new products" },
  { number: 5, title: "Deliver", description: "Two product lines, zero landfill" },
];

const testimonials = [
  {
    quote: "The quality of their granite slabs is consistently excellent. What truly sets them apart is the sustainability commitment — it's genuine and verifiable.",
    author: "Project Architect, Commercial Development Firm",
  },
  {
    quote: "We switched to their eco-bricks for a municipal project and saved 20% on material costs without compromising structural integrity.",
    author: "Senior Engineer, Infrastructure Company",
  },
  {
    quote: "From sample selection to delivery, the process was smooth and professional. The countertops exceeded our client's expectations.",
    author: "Interior Designer, Residential Studio",
  },
];

const blogPosts = [
  {
    title: "What Happens to Granite Dust? The Industry's Hidden Waste Problem",
    excerpt: "Millions of tons of granite dust end up in landfills annually. Here's how we're changing that.",
    date: "Feb 10, 2026",
    category: "Sustainability",
    href: "/blog",
  },
  {
    title: "Choosing the Right Granite Finish: Polished, Honed, Flamed, and Beyond",
    excerpt: "The finish you choose affects appearance, slip resistance, and durability. Here's how to decide.",
    date: "Jan 28, 2026",
    category: "Product Guide",
    href: "/blog",
  },
  {
    title: "Eco-Bricks vs. Clay Bricks: A Comparative Analysis for Builders",
    excerpt: "How recycled granite dust bricks compare to traditional fired clay across key metrics.",
    date: "Jan 15, 2026",
    category: "Product Guide",
    href: "/blog",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-granite-charcoal to-[#1a1a1a] overflow-hidden mt-[72px]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-[640px]">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
              Granite, Perfected.<br />Waste, Eliminated.
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-[540px]">
              We manufacture premium granite slabs, tiles, countertops, and custom stonework — and transform every grain of dust into something valuable. Zero waste. Zero compromise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/quote" className="bg-forest-green text-white px-8 py-3.5 rounded-lg font-medium hover:bg-forest-green-dark transition-colors">
                Request a Quote
              </Link>
              <Link href="/products" className="border-2 border-white text-white px-7 py-3 rounded-lg font-medium hover:bg-white hover:text-granite-charcoal transition-colors">
                Explore Our Products
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Logo className="w-64 h-64 opacity-20" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md z-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 py-6 text-center">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "100%", label: "Material Utilization" },
              { value: "500+", label: "Projects Completed" },
              { value: "50K+", label: "Sq Ft Monthly Capacity" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-warm-gold">{stat.value}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[2.5rem] font-bold mb-6 leading-tight">Stone Manufacturing, Reimagined</h2>
            <p className="text-slate-gray mb-4">We are a granite manufacturing company built on two commitments: producing premium stone products and eliminating waste from the process entirely.</p>
            <p className="text-slate-gray mb-6">Our facility transforms raw granite blocks into polished slabs, precision-cut tiles, custom countertops, and architectural stonework. The granite dust generated during production becomes the raw input for an entire second product line.</p>
            <Link href="/about" className="text-forest-green font-semibold hover:underline">Learn Our Story &rarr;</Link>
          </div>
          <div className="aspect-[4/3] bg-gradient-to-br from-[#e8e4df] to-[#d4cfc8] rounded-xl flex items-center justify-center text-slate-gray/50 text-sm">Factory / Stone Image</div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-stone-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Crafted from Nature. Built to Last." subtitle="Premium granite products manufactured to exacting standards from ethically sourced natural stone." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (<ProductCard key={product.title} {...product} />))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="inline-block border-2 border-granite-charcoal text-granite-charcoal px-7 py-3 rounded-lg font-medium hover:bg-granite-charcoal hover:text-white transition-colors">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Zero-Waste Innovation */}
      <section className="py-24 bg-granite-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Every Grain of Granite Finds a Purpose" subtitle="Conventional granite manufacturing generates up to 30% waste. We capture 100% of this material and transform it into useful products." dark />
          <ProcessSteps steps={processSteps} dark />
          <div className="text-center mt-12">
            <Link href="/innovations" className="inline-block bg-forest-green text-white px-8 py-3.5 rounded-lg font-medium hover:bg-forest-green-dark transition-colors">Explore Granite Dust Innovations</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="The Standard for Responsible Stone Manufacturing" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<svg className="w-7 h-7 text-forest-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>} title="Uncompromising Quality" description="Every product inspected against strict dimensional, structural, and aesthetic standards." />
            <FeatureCard icon={<svg className="w-7 h-7 text-forest-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>} title="Complete Sustainability" description="100% material utilization. No landfill. No environmental shortcuts." />
            <FeatureCard icon={<svg className="w-7 h-7 text-forest-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>} title="Broad Product Range" description="From polished countertops to recycled paver blocks — one supplier for all stone needs." />
            <FeatureCard icon={<svg className="w-7 h-7 text-forest-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>} title="Trusted Partnership" description="Transparent pricing, technical consultation, on-time delivery, and dedicated support." />
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to Start Your Project?" subtitle="Whether you need premium granite or recycled stone products, we deliver — on spec and on schedule." ctaLabel="Request a Free Quote" ctaHref="/quote" />

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (<TestimonialCard key={i} {...t} />))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-stone-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="From the Blog" subtitle="Expert perspectives on granite, sustainability, and the future of stone manufacturing." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (<BlogCard key={post.title} {...post} />))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-block border-2 border-granite-charcoal text-granite-charcoal px-7 py-3 rounded-lg font-medium hover:bg-granite-charcoal hover:text-white transition-colors">View All Insights</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
