import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { TallyEmbed } from "@/components/contact/TallyEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description: "시퀀스스튜디오에 프로젝트를 문의하세요.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <AnimatedSection className="mb-12">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] font-[family-name:var(--font-montserrat)] mb-4">
            CONTACT
          </p>
          <h1 className="font-[family-name:var(--font-heading-kr)] text-3xl sm:text-4xl font-bold text-dark mb-6">
            문의하기
          </h1>
          <p className="text-dark-light leading-relaxed max-w-lg">
            프로젝트 문의, 협업 제안, 견적 요청 등 편하게 연락주세요.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <TallyEmbed />
          </div>
        </div>
      </Container>
    </section>
  );
}
