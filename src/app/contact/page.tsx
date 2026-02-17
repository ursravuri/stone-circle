"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-granite-charcoal to-[#1a1a1a] mt-[72px] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Questions about our products, pricing, or capabilities? Our team typically responds within one business day.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-8">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-granite-charcoal mb-2">Full Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none transition-colors" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-granite-charcoal mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none transition-colors" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-granite-charcoal mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none transition-colors" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-granite-charcoal mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none transition-colors bg-white">
                  <option>General Inquiry</option>
                  <option>Product Information</option>
                  <option>Pricing & Quote</option>
                  <option>Partnership Opportunity</option>
                  <option>Factory Visit</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-granite-charcoal mb-2">Message *</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none transition-colors resize-none" placeholder="Tell us about your project or inquiry..." />
              </div>
              <button type="submit" className="bg-forest-green text-white px-8 py-3 rounded-lg font-medium hover:bg-forest-green-dark transition-colors w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-8">Reach Us Directly</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-granite-charcoal mb-2">Factory & Head Office</h3>
                <p className="text-slate-gray text-sm leading-relaxed">Stone Circle Manufacturing<br />Contact: Anil Kumar Ravuri<br />Martur, Andhra Pradesh<br />India</p>
              </div>
              <div>
                <h3 className="font-semibold text-granite-charcoal mb-2">Phone</h3>
                <p className="text-slate-gray text-sm">+91 98765 43210<br />+91 98765 43211</p>
              </div>
              <div>
                <h3 className="font-semibold text-granite-charcoal mb-2">Email</h3>
                <p className="text-slate-gray text-sm">info@stonecircle.com<br />sales@stonecircle.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-granite-charcoal mb-2">Business Hours</h3>
                <p className="text-slate-gray text-sm">Monday – Saturday: 9:00 AM – 6:00 PM (IST)<br />Sunday: Closed</p>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#e8e4df] to-[#d4cfc8] rounded-xl flex items-center justify-center text-slate-gray/50 text-sm mt-8">
                Google Maps Embed
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
