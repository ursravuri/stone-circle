import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  gradient?: string;
}

export default function ProductCard({
  title,
  description,
  href,
  gradient = "from-[#d4cfc8] to-[#bfb8ae]",
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div
        className={`aspect-[4/3] bg-gradient-to-br ${gradient} flex items-center justify-center text-slate-gray/60 text-sm font-medium`}
      >
        {title}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-granite-charcoal">
          {title}
        </h3>
        <p className="text-slate-gray text-[0.95rem] mb-4">{description}</p>
        <Link
          href={href}
          className="text-forest-green font-semibold hover:underline"
        >
          Learn More &rarr;
        </Link>
      </div>
    </div>
  );
}
