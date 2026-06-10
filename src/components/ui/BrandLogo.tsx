import Link from "next/link";
import { SiteImg } from "@/components/ui/SiteImage";
import { ASSETS, SITE } from "@/lib/constants";
import { BRAND_IMAGES } from "@/lib/image-accessibility";

type BrandLogoProps = {
  showName?: boolean;
  variant?: "header" | "footer";
};

export function BrandLogo({ showName = true, variant = "header" }: BrandLogoProps) {
  const logoCopy =
    variant === "footer" ? BRAND_IMAGES.footerLogo : BRAND_IMAGES.headerLogo;

  return (
    <Link href="/" className="brand" aria-label={`${SITE.name} — home`}>
      <span className="brand-mark">
        <SiteImg
          src={ASSETS.logo}
          alt={logoCopy.alt}
          title={logoCopy.title}
          width={2048}
          height={1822}
          decoding="async"
        />
      </span>
      {showName ? (
        <span className="brand-name">
          {SITE.name}
        </span>
      ) : null}
    </Link>
  );
}
