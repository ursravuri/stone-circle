import Link from "next/link";

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "green" | "dark";
}

export default function CtaBanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  variant = "green",
}: CtaBannerProps) {
  const bgClass =
    variant === "green" ? "bg-forest-green" : "bg-granite-charcoal";

  return (
    <section className={`${bgClass} py-20 text-center`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[2.5rem] font-bold text-white mb-4 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/85 text-lg max-w-xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        <Link
          href={ctaHref}
          className="inline-block bg-white text-forest-green px-8 py-3.5 rounded-lg font-medium hover:bg-stone-white transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
