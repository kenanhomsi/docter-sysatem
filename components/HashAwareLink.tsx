"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  sectionId: string;
};

/**
 * Locale-prefixed home links with hash. When already on the home page, Next.js
 * often updates the URL but does not scroll; we scroll explicitly.
 */
export function HashAwareLink({ sectionId, children, onClick, ...rest }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={{ pathname: "/", hash: sectionId }}
      onClick={(e) => {
        onClick?.(e);
        if (pathname !== "/" || e.defaultPrevented) return;
        queueMicrotask(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
