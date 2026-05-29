import Link from "next/link";
import { ASSETS, SITE } from "@/lib/constants";

type BrandLogoProps = {
  showName?: boolean;
};

export function BrandLogo({ showName = true }: BrandLogoProps) {
  return (
    <Link href="/" className="brand" aria-label={`${SITE.name} — home`}>
      <span className="brand-mark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ASSETS.logo}
          alt=""
          width={2048}
          height={1822}
          decoding="async"
        />
      </span>
      {showName ? (
        <span className="brand-name">
          {SITE.name}
          <small>{SITE.tagline}</small>
        </span>
      ) : null}
    </Link>
  );
}
