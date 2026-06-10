"use client";

import { usePathname } from "next/navigation";
import { CITY_PAGES } from "@/lib/cities";

const LOCATION_PATHS = new Set(CITY_PAGES.map((page) => `/${page.route}`));

export function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLocation = pathname != null && LOCATION_PATHS.has(pathname);

  return <main className={isLocation ? "location" : undefined}>{children}</main>;
}
