import { IBM_Plex_Sans_Arabic, Instrument_Sans } from "next/font/google";

// Both families are self-hosted at build by next/font — no runtime request to
// Google. The Latin face is preloaded because Latin glyphs appear on every
// page (brand, numbers, the "EN" label). The Arabic face is declared with
// unicode-range subsetting and no preload: English pages fetch only the file
// the switcher label needs, Arabic pages fetch it as soon as the CSS parses.
// Revisit with measurements in the Phase 6 performance pass.

export const latin = Instrument_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-instrument-sans",
  display: "swap",
  preload: true,
});

export const arabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600"],
  subsets: ["arabic"],
  variable: "--font-plex-arabic",
  display: "swap",
  preload: false,
});
