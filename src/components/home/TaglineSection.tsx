import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function TaglineSection() {
  return (
    <section className="py-32 md:py-40">
      <Container>
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading-kr)] text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-dark tracking-tight">
            빠르게 만든 AI 영상이 아니라
            <br />
            <span className="text-primary">
              브랜드에 맞는 이유 있는 한 컷.
            </span>
          </h2>
          <AnimatedSection delay={200}>
            <p className="mt-8 text-dark-light text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              단순히 AI로 생성한 영상이 아닌,
              <br className="hidden sm:block" />
              브랜드의 방향성과 톤을 정확히 이해한 아트 디렉팅으로
              <br className="hidden sm:block" />
              이유 있는 비주얼을 만듭니다.
            </p>
          </AnimatedSection>
        </AnimatedSection>
      </Container>
    </section>
  );
}
