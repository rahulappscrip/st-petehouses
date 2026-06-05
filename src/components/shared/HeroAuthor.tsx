import Image from "next/image";
import { ASSETS } from "@/lib/constants";

type Props = {
  role?: string;
};

export function HeroAuthor({ role = "Local Founder · We Buy St Pete Houses" }: Props) {
  return (
    <div className="city-hero__author">
      <span className="city-hero__avatar">
        <Image
          src={ASSETS.johnSvg}
          alt=""
          width={44}
          height={44}
          className="city-hero__avatar-img"
          aria-hidden
        />
      </span>
      <div>
        <strong className="feature-title">John Gardepe</strong>
        <span className="body-standard">{role}</span>
      </div>
    </div>
  );
}
