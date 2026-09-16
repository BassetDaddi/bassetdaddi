import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware Link / usePathname / redirect. Link prefixes the current
// locale automatically; usePathname returns the path without the prefix,
// which is what lets the switcher preserve the current page.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
