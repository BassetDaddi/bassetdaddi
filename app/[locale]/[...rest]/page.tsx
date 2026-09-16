import { notFound } from "next/navigation";

// Any path under a valid locale that matches no page renders the localized
// not-found.tsx (unprefixed unknown paths are first redirected into a locale
// by proxy.ts, so this covers every miss).
export default function CatchAll() {
  notFound();
}
