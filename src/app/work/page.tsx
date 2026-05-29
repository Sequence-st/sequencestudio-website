import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PortfolioGrid } from "@/components/work/PortfolioGrid";
import { shortFormItems, horizontalItems, motionItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description: "시퀀스스튜디오 포트폴리오 — AI 아트 디렉션 기반 브랜드 영상 작업물",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <AnimatedSection className="max-w-2xl">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] font-[family-name:var(--font-montserrat)] mb-4">
              WORK
            </p>
            <h1 className="font-[family-name:var(--font-heading-kr)] text-3xl sm:text-4xl font-bold text-dark mb-6">
              포트폴리오
            </h1>
            <p className="text-dark-light leading-relaxed">
              브랜드의 이야기를 담은 AI 아트 디렉션 작업물입니다.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <PortfolioGrid
          shortFormItems={shortFormItems}
          horizontalItems={horizontalItems}
          motionItems={motionItems}
        />
      </section>
    </>
  );
}
