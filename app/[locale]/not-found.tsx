import { getTranslations } from "next-intl/server";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PageIntro } from "@/components/ui/PageIntro";

// Localized 404, rendered by the catch-all route below the locale segment.
export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <PageIntro eyebrow={t("eyebrow")} title={t("title")} lede={t("body")}>
      <div className="mt-10">
        <ArrowLink href="/">{t("back")}</ArrowLink>
      </div>
    </PageIntro>
  );
}
