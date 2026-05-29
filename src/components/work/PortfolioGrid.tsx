import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PortfolioCard } from "./PortfolioCard";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioSectionProps {
  title: string;
  items: PortfolioItem[];
  gridClass: string;
}

function PortfolioSection({ title, items, gridClass }: PortfolioSectionProps) {
  if (items.length === 0) return null;
  return (
    <div className="mb-24 last:mb-0">
      <AnimatedSection>
        <h2 className="font-[family-name:var(--font-heading-kr)] text-2xl sm:text-3xl font-bold text-dark mb-8">
          {title}
        </h2>
      </AnimatedSection>
      <div className={gridClass}>
        {items.map((item, i) => (
          <AnimatedSection key={item.id} delay={i * 100}>
            <PortfolioCard item={item} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

interface PortfolioGridProps {
  shortFormItems: PortfolioItem[];
  horizontalItems: PortfolioItem[];
  motionItems: PortfolioItem[];
}

export function PortfolioGrid({ shortFormItems, horizontalItems, motionItems }: PortfolioGridProps) {
  const isEmpty = shortFormItems.length === 0 && horizontalItems.length === 0 && motionItems.length === 0;

  if (isEmpty) {
    return (
      <Container>
        <AnimatedSection className="text-center py-16">
          <p className="text-dark-light text-lg mb-4">포트폴리오를 준비 중입니다.</p>
        </AnimatedSection>
      </Container>
    );
  }

  return (
    <Container>
      <PortfolioSection
        title="Short Form AI Contents"
        items={shortFormItems}
        gridClass="grid grid-cols-2 sm:grid-cols-3 gap-x-2 md:gap-x-3 gap-y-8 md:gap-y-12"
      />
      <PortfolioSection
        title="AI Contents"
        items={horizontalItems}
        gridClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-3 gap-y-8 md:gap-y-12"
      />
      <PortfolioSection
        title="Motion Graphics Contents"
        items={motionItems}
        gridClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-3 gap-y-8 md:gap-y-12"
      />
    </Container>
  );
}
