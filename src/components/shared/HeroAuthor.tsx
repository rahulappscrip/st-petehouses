import { SiteImage } from "@/components/ui/SiteImage";
import { ASSETS } from "@/lib/constants";
import { PERSON_IMAGES } from "@/lib/image-accessibility";

type Props = {
  role?: string;
};

export function HeroAuthor({ role = "Local Founder · We Buy St Pete Houses" }: Props) {
  return (
    <div className="city-hero__author">
      <span className="city-hero__avatar">
        <SiteImage
          src={ASSETS.johnSvg}
          alt={PERSON_IMAGES.johnAvatar.alt}
          title={PERSON_IMAGES.johnAvatar.title}
          width={44}
          height={44}
          className="city-hero__avatar-img"
        />
      </span>
      <div>
        <strong className="feature-title" aria-hidden="true">
          Benette Andrew
        </strong>
        <span className="body-standard">{role}</span>
      </div>
    </div>
  );
}
