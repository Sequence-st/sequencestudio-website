import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CompanySection() {
  return (
    <section className="py-24 md:py-32 bg-[#f8f9fb]">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] font-[family-name:var(--font-montserrat)] mb-4">
            ABOUT
          </p>
          <h2 className="font-[family-name:var(--font-heading-kr)] text-2xl sm:text-3xl font-bold text-dark">
            AI 스튜디오 × 디자인 파트너십
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Art Direction",
              description:
                "삼성전자 출신 그래픽 디자이너의 감각으로,\nAI 기술과 크리에이티브 디렉팅을 결합합니다.",
            },
            {
              title: "Brand-First Approach",
              description:
                "트렌디한 AI 영상이 아닌, 브랜드의 톤앤매너에 맞춘 전략적 비주얼 콘텐츠를 제작합니다.",
            },
            {
              title: "End-to-End Production",
              description:
                "기획부터 콘셉트 설계, 이미지 생성, 영상화,\n사운드 디자인까지 원스톱으로 진행합니다.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 150}>
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-dark-light text-sm leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
