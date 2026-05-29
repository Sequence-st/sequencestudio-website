import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function TallyEmbed() {
  return (
    <AnimatedSection delay={200}>
      <div className="bg-white rounded-2xl shadow-sm border border-dark/5 overflow-hidden">
        <iframe
          src="https://tally.so/r/mJa7ar"
          width="100%"
          height="600"
          title="문의하기"
          className="border-0"
        />
      </div>
    </AnimatedSection>
  );
}
