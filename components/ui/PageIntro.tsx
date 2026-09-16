import type { ReactNode } from "react";
import { Container } from "./Container";

// Standard page opener on the 12-column grid: eyebrow in the first three
// columns, title and lede in the next eight, the last column empty on purpose.
type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, lede, children }: Props) {
  return (
    <Container>
      <div className="grid grid-cols-6 gap-x-4 gap-y-6 border-b border-line py-20 md:grid-cols-12 md:gap-x-6 md:py-32 lg:gap-x-8 lg:py-40">
        <p className="col-span-6 t-meta text-fg-3 md:col-span-3">{eyebrow}</p>
        <div className="col-span-6 md:col-span-8">
          <h1 className="t-h1">{title}</h1>
          {lede ? <p className="mt-6 measure t-body-l text-fg-2">{lede}</p> : null}
          {children}
        </div>
      </div>
    </Container>
  );
}
