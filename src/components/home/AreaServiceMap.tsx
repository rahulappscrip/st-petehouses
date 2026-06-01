import { Reveal } from "@/components/ui/Reveal";
import { AREA_MAP_EMBED } from "@/lib/constants";

export function AreaServiceMap() {
  return (
    <Reveal className="area-map">
      <iframe
        src={AREA_MAP_EMBED}
        title="Map of St. Petersburg, FL and the Tampa Bay service area"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="area-map__embed"
      />
    </Reveal>
  );
}
