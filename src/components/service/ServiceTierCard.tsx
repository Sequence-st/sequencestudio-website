import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { ServiceLine } from "@/data/services";
import { cn } from "@/lib/cn";

interface ServiceTierCardProps {
  service: ServiceLine;
  index: number;
}

const tierColors: Record<string, { accent: string; badge: string }> = {
  base: { accent: "border-dark/10", badge: "bg-dark/5 text-dark" },
  mood: { accent: "border-primary/20", badge: "bg-primary/5 text-primary" },
  prime: { accent: "border-primary/40", badge: "bg-primary/10 text-primary" },
};

export function ServiceTierCard({ service, index }: ServiceTierCardProps) {
  const colors = tierColors[service.nameEn] ?? tierColors.base;

  return (
    <AnimatedSection delay={index * 150}>
      <div
        className={cn(
          "rounded-2xl border-2 bg-white p-8 md:p-10 transition-shadow hover:shadow-lg",
          colors.accent
        )}
      >
        {/* Header */}
        <div className="mb-6">
          <span
            className={cn(
              "inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider mb-3",
              colors.badge
            )}
          >
            {service.keywords}
          </span>
          <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-primary">
            {service.name}
          </h3>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#f8f9fb] rounded-xl px-5 py-4">
            <p className="text-xs text-dark-light tracking-wider font-medium mb-1">포커스</p>
            <p className="font-semibold text-dark text-sm">{service.focus}</p>
          </div>
          <div className="bg-[#f8f9fb] rounded-xl px-5 py-4">
            <p className="text-xs text-dark-light tracking-wider font-medium mb-1">적합 대상</p>
            <p className="font-semibold text-dark text-sm">{service.suitable}</p>
          </div>
        </div>

        {/* Includes */}
        <div className="mb-8 bg-[#f8f9fb] rounded-xl px-5 py-4">
          <p className="text-xs text-dark-light tracking-wider font-medium mb-2">
            포함 항목
          </p>
          <p className="text-sm text-dark-light leading-relaxed whitespace-pre-line">
            {service.includes}
          </p>
        </div>

        {/* Tier Overview */}
        <div className="space-y-3">
          {service.tiers.map((tier) => (
            <div
              key={tier.label}
              className="flex items-center gap-8 py-3 border-b border-dark/5 last:border-0"
            >
              <span className="text-dark font-bold text-sm">
                {tier.label}
              </span>
              <span className="text-dark-light text-sm">{tier.period}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
