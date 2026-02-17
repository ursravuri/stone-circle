import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
  gradient?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  href,
  gradient = "from-[#d4cfc8] to-[#c4bdb4]",
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div
        className={`aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center text-slate-gray/50 text-xs px-4 text-center`}
      >
        {category}
      </div>
      <div className="p-6">
        <div className="text-sm text-slate-gray mb-2">
          {date} &bull; {category}
        </div>
        <h3 className="font-semibold text-[1.1rem] leading-snug mb-3 text-granite-charcoal">
          {title}
        </h3>
        <p className="text-slate-gray text-sm mb-4">{excerpt}</p>
        <Link
          href={href}
          className="text-forest-green font-semibold text-sm hover:underline"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
