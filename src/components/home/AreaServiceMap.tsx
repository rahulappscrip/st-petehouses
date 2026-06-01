import { Reveal } from "@/components/ui/Reveal";
import { AREA_MAP_EMBED, buildCityMapEmbed, buildCityMapTitle } from "@/lib/constants";

type AreaServiceMapProps = {
  cityName?: string;
  embedUrl?: string;
  title?: string;
};

export function AreaServiceMap({ cityName, embedUrl, title }: AreaServiceMapProps) {
  const src = embedUrl ?? (cityName ? buildCityMapEmbed(cityName) : AREA_MAP_EMBED);
  const mapTitle =
    title ?? (cityName ? buildCityMapTitle(cityName) : "Map of St. Petersburg, FL and the Tampa Bay service area");

  return (
    <Reveal className="area-map">
      <iframe
        src={src}
        title={mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="area-map__embed"
      />
    </Reveal>
  );
}
