import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ServiceIntro() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <Container>
        <AnimatedSection className="max-w-2xl">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] font-[family-name:var(--font-montserrat)] mb-4">
            SERVICE
          </p>
          <h1 className="font-[family-name:var(--font-heading-kr)] text-3xl sm:text-4xl font-bold text-dark mb-6">
            제작 플랜 안내
          </h1>
          <p className="text-dark-light leading-relaxed">
            시퀀스스튜디오는 3가지 프로덕션 라인으로 운영됩니다.
            <br />
            브랜드의 방향과 목적에 맞는 시퀀스를 추천드립니다.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
