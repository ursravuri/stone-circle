interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  dark?: boolean;
}

export default function ProcessSteps({
  steps,
  dark = false,
}: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
      {steps.map((step) => (
        <div key={step.number} className="text-center relative">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 ${
              dark
                ? "bg-warm-gold text-granite-charcoal"
                : "bg-forest-green text-white"
            }`}
          >
            {step.number}
          </div>
          <h4
            className={`font-semibold mb-2 ${dark ? "text-white" : "text-granite-charcoal"}`}
          >
            {step.title}
          </h4>
          <p className={`text-sm ${dark ? "text-white/60" : "text-slate-gray"}`}>
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
