"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productOptions = [
  "Granite Slabs", "Granite Tiles", "Countertops", "Staircases", "Custom Stonework",
  "Eco-Bricks", "Paver Blocks", "Terrazzo Tiles", "Concrete Additives",
  "Wall Texture Plaster", "Decorative Products", "Other",
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleProduct = (p: string) => {
    setSelected((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]);
  };

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-granite-charcoal to-[#1a1a1a] mt-[72px] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">Request a Quote</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Tell us what you need and we&rsquo;ll provide a detailed estimate within 48 hours. No obligation, no hidden costs.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-forest-green text-white" : "bg-gray-200 text-slate-gray"}`}>{s}</div>
                {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-forest-green" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6">Select Products</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {productOptions.map((p) => (
                      <button key={p} onClick={() => toggleProduct(p)} className={`p-4 rounded-xl text-sm font-medium text-left transition-all ${selected.includes(p) ? "bg-forest-green text-white shadow-md" : "bg-stone-white text-granite-charcoal hover:bg-forest-green/10"}`}>
                        {p}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(2)} disabled={selected.length === 0} className="mt-8 bg-forest-green text-white px-8 py-3 rounded-lg font-medium hover:bg-forest-green-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                    Next: Specifications &rarr;
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6">Specifications</h2>
                  <form className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Color Preference</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none bg-white">
                        <option>Open to recommendations</option>
                        <option>Absolute Black</option>
                        <option>Kashmir White</option>
                        <option>Tan Brown</option>
                        <option>Steel Grey</option>
                        <option>Imperial Red</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Finish</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none bg-white">
                        <option>Not sure</option>
                        <option>Polished</option>
                        <option>Honed</option>
                        <option>Flamed</option>
                        <option>Bush-Hammered</option>
                        <option>Leather</option>
                        <option>Brushed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Dimensions</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" placeholder="e.g., 120cm x 60cm or 'Custom'" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Quantity</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" placeholder="e.g., 500 sq ft, 200 pieces" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Notes</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none resize-none" placeholder="Special requirements, edge profiles, delivery constraints..." />
                    </div>
                  </form>
                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setStep(1)} className="border-2 border-granite-charcoal text-granite-charcoal px-6 py-2.5 rounded-lg font-medium hover:bg-granite-charcoal hover:text-white transition-colors">&larr; Back</button>
                    <button onClick={() => setStep(3)} className="bg-forest-green text-white px-8 py-3 rounded-lg font-medium hover:bg-forest-green-dark transition-colors">Next: Your Details &rarr;</button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6">Your Details</h2>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company / Organization</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" placeholder="Optional" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location / City</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" placeholder="Your city" />
                    </div>
                  </form>
                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setStep(2)} className="border-2 border-granite-charcoal text-granite-charcoal px-6 py-2.5 rounded-lg font-medium hover:bg-granite-charcoal hover:text-white transition-colors">&larr; Back</button>
                    <button className="bg-forest-green text-white px-8 py-3 rounded-lg font-medium hover:bg-forest-green-dark transition-colors">Submit Quote Request</button>
                  </div>
                </div>
              )}
            </div>

            {/* Side Panel */}
            <div className="hidden lg:block">
              <div className="bg-stone-white rounded-xl p-6 sticky top-24">
                <h3 className="font-semibold text-granite-charcoal mb-4">What You Get</h3>
                <ul className="space-y-3 text-sm text-slate-gray">
                  <li className="flex items-start gap-2"><span className="text-forest-green mt-0.5">✓</span> Detailed pricing & itemized costs</li>
                  <li className="flex items-start gap-2"><span className="text-forest-green mt-0.5">✓</span> Lead time estimate</li>
                  <li className="flex items-start gap-2"><span className="text-forest-green mt-0.5">✓</span> Technical consultation</li>
                  <li className="flex items-start gap-2"><span className="text-forest-green mt-0.5">✓</span> Physical sample service</li>
                  <li className="flex items-start gap-2"><span className="text-forest-green mt-0.5">✓</span> No obligation</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-xs text-slate-gray">
                  <p className="font-medium text-granite-charcoal">Trust Badges</p>
                  <p>✓ ISO 9001 Certified</p>
                  <p>✓ 500+ Projects Delivered</p>
                  <p>✓ 48-Hour Quote Guarantee</p>
                </div>
                {selected.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs font-medium text-granite-charcoal mb-2">Selected Products:</p>
                    <div className="flex flex-wrap gap-1">
                      {selected.map((s) => (
                        <span key={s} className="text-xs bg-forest-green/10 text-forest-green px-2 py-1 rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
