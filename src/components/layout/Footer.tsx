import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Sequence Studio"
              width={160}
              height={32}
              className="brightness-0 invert mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              AI Art Direction &amp; Brand Film
              <br />
              브랜드에 맞는 이유 있는 한 컷.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider mb-4 font-[family-name:var(--font-montserrat)]">
              MENU
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/service", label: "Service" },
                { href: "/work", label: "Work" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider mb-4 font-[family-name:var(--font-montserrat)]">
              CONTACT
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a
                href="mailto:seqc.studio@gmail.com"
                className="hover:text-white transition-colors"
              >
                seqc.studio@gmail.com
              </a>
              <SocialLinks className="text-white/70 mt-2" iconClassName="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Sequence Studio. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            사업자등록번호 116-07-25834
          </p>
        </div>
      </Container>
    </footer>
  );
}
