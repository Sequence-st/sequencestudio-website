import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function ContactInfo() {
  return (
    <AnimatedSection className="space-y-6">
      <div>
        <h2 className="font-[family-name:var(--font-heading-kr)] text-2xl font-bold text-primary mb-2">
          시퀀스스튜디오
        </h2>
        <p className="text-dark-light text-sm">Sequence Studio</p>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <p className="text-dark-light mb-1">Email</p>
          <a
            href="mailto:seqc.studio@gmail.com"
            className="text-dark font-medium hover:text-primary transition-colors"
          >
            seqc.studio@gmail.com
          </a>
        </div>
        <div>
          <p className="text-dark-light mb-1">사업자등록번호</p>
          <p className="text-dark font-medium">116-07-25834</p>
        </div>
        <div>
          <p className="text-dark-light mb-1">대표</p>
          <p className="text-dark font-medium">송예슬</p>
        </div>
        <div>
          <p className="text-dark-light mb-1">SNS</p>
          <SocialLinks className="text-dark" iconClassName="w-5 h-5" />
        </div>
      </div>
    </AnimatedSection>
  );
}
