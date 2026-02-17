import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="text-center p-8">
      <div className="w-16 h-16 rounded-2xl bg-soft-sage flex items-center justify-center mx-auto mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-granite-charcoal">
        {title}
      </h3>
      <p className="text-slate-gray text-[0.95rem]">{description}</p>
    </div>
  );
}
