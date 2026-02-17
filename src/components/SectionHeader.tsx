interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className="text-center max-w-[680px] mx-auto mb-16">
      <h2
        className={`font-[family-name:var(--font-playfair)] text-3xl md:text-[2.5rem] font-bold leading-tight ${dark ? "text-white" : "text-granite-charcoal"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg ${dark ? "text-white/70" : "text-slate-gray"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
