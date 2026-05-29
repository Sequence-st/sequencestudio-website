import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 flex-1 flex items-center">
      <Container className="text-center">
        <h1 className="text-6xl font-bold font-[family-name:var(--font-montserrat)] text-primary mb-4">
          404
        </h1>
        <p className="text-dark-light text-lg mb-8">
          페이지를 찾을 수 없습니다.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full text-sm font-medium tracking-wider font-[family-name:var(--font-montserrat)] hover:bg-primary-light transition-colors"
        >
          HOME
        </Link>
      </Container>
    </section>
  );
}
