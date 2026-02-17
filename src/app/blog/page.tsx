import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const articles = [
  { title: "What Happens to Granite Dust? The Industry's Hidden Waste Problem", excerpt: "Granite manufacturing generates millions of tons of fine stone dust annually. Most ends up in landfills.", date: "Feb 10, 2026", category: "Sustainability", href: "/blog" },
  { title: "Choosing the Right Granite Finish: Polished, Honed, Flamed, and Beyond", excerpt: "The finish affects appearance, slip resistance, maintenance, and durability.", date: "Jan 28, 2026", category: "Product Guide", href: "/blog" },
  { title: "Eco-Bricks vs. Clay Bricks: A Comparative Analysis for Builders", excerpt: "We compare compressive strength, water absorption, thermal performance, cost, and environmental impact.", date: "Jan 15, 2026", category: "Product Guide", href: "/blog" },
  { title: "How Zero-Waste Manufacturing Works in a Granite Factory", excerpt: "A detailed walkthrough of our closed-loop manufacturing system.", date: "Jan 5, 2026", category: "Sustainability", href: "/blog" },
  { title: "Granite in Modern Architecture: Trends Shaping Design", excerpt: "Large-format slabs, book-matched walls, and mixed-finish applications are driving demand.", date: "Dec 20, 2025", category: "Industry Trends", href: "/blog" },
  { title: "The Complete Guide to Granite Countertop Care and Maintenance", excerpt: "Daily cleaning, stain removal, sealing schedules, and common mistakes to avoid.", date: "Dec 10, 2025", category: "Care Guide", href: "/blog" },
  { title: "From Dust to Driveway: How Granite Paver Blocks Are Made", excerpt: "Follow the journey from the cutting floor to a finished paver block.", date: "Nov 28, 2025", category: "Product Guide", href: "/blog" },
  { title: "Green Building Certifications: How Recycled Stone Products Earn Credits", excerpt: "Mapping specific product categories to IGBC, GRIHA, and LEED credit systems.", date: "Nov 15, 2025", category: "Sustainability", href: "/blog" },
  { title: "Terrazzo Tiles: The Return of a Classic Material", excerpt: "Modern terrazzo made with recycled granite dust offers the same appeal with less impact.", date: "Nov 1, 2025", category: "Industry Trends", href: "/blog" },
  { title: "Granite Dust in Agriculture: An Overlooked Soil Amendment", excerpt: "Examining mineral content, application methods, and early field trial results.", date: "Oct 18, 2025", category: "Innovation", href: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-granite-charcoal to-[#1a1a1a] mt-[72px] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">Insights & Industry News</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Expert perspectives on granite manufacturing, sustainable construction, stone care, and the future of zero-waste materials.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
