import { getTranslations } from "next-intl/server";

export async function SkipLink() {
  const t = await getTranslations("A11y");
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:start-5 focus:top-5 focus:z-50 focus:rounded-[2px] focus:bg-fg focus:px-4 focus:py-3 focus:t-ui focus:text-surface"
    >
      {t("skip")}
    </a>
  );
}
