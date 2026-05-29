import { HeroSection } from "@/components/home/HeroSection";
import { TaglineSection } from "@/components/home/TaglineSection";
import { CompanySection } from "@/components/home/CompanySection";
import { InstagramFeed } from "@/components/home/InstagramFeed";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TaglineSection />
      <CompanySection />
      <InstagramFeed />
    </>
  );
}
