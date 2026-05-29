import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  white?: boolean;
}

export function Logo({ className, white }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src="/images/logo.png"
        alt="Sequence Studio"
        width={180}
        height={36}
        priority
        className={white ? "brightness-0 invert" : ""}
      />
    </Link>
  );
}
