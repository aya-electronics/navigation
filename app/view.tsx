"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PageView(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Track pageviews
  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
    }
  }, [pathname, searchParams]);

  return null;
}
