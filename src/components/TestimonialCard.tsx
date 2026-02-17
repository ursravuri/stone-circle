interface TestimonialCardProps {
  quote: string;
  author: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-warm-gold">
      <div className="text-warm-gold tracking-wider mb-4 text-lg">
        {"★".repeat(rating)}
      </div>
      <blockquote className="text-slate-gray italic leading-relaxed mb-5">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="font-semibold text-sm text-granite-charcoal">
        — {author}
      </div>
    </div>
  );
}
