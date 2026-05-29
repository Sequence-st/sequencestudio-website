import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ServiceNote() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <AnimatedSection>
          <div className="bg-[#f8f9fb] rounded-2xl p-8 md:p-10 text-sm text-dark-light leading-relaxed">
            <p className="font-medium text-dark mb-3">안내사항</p>
            <ul className="space-y-2">
              <li>
                * 본 플랜은 대략적인 예시이며, 실제 작업 범위와 조건, 제작
                난이도에 따라 조정될 수 있습니다.
              </li>
              <li>* 모든 가격은 VAT 별도입니다.</li>
              <li>
                * 프로젝트 성격에 따라 적합한 라인을 추천드리오니, 편하게
                문의해주세요.
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
