import Link from "next/link";
import { SITE, TOPBAR } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="topbar-l">
          <span>
            <span className="stars">★★★★★</span> {TOPBAR.rating}
          </span>
        </div>
        <div className="topbar-r">
          <span className="topbar-hide-mobile">{TOPBAR.bbb}</span>
          <span className="sep topbar-hide-mobile" />
          <span className="topbar-hide-mobile">{TOPBAR.homes}</span>
          <span className="sep topbar-hide-mobile" />
          <Link href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</Link>
        </div>
      </div>
    </div>
  );
}
