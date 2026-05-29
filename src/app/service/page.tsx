import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ServiceIntro } from "@/components/service/ServiceIntro";
import { ServiceTierCard } from "@/components/service/ServiceTierCard";
import { ServiceNote } from "@/components/service/ServiceNote";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Service",
  description:
    "시퀀스스튜디오 제작 플랜 안내 — Base, Mood, Prime 3가지 프로덕션 라인",
};

export default function ServicePage() {
  return (
    <>
      <ServiceIntro />
      <section className="pb-16">
        <Container>
          <div className="flex flex-col gap-10">
            {services.map((service, i) => (
              <ServiceTierCard key={service.nameEn} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>
      <ServiceNote />
    </>
  );
}
